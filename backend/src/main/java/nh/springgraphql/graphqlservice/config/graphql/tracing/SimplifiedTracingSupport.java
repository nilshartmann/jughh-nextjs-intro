package nh.springgraphql.graphqlservice.config.graphql.tracing;

import graphql.PublicApi;
import graphql.execution.ExecutionStepInfo;
import graphql.execution.instrumentation.InstrumentationState;
import graphql.schema.DataFetchingEnvironment;

import java.time.Instant;
import java.time.format.DateTimeFormatter;
import java.util.LinkedHashMap;
import java.util.LinkedList;
import java.util.List;
import java.util.Map;
import java.util.concurrent.ConcurrentLinkedQueue;

import static graphql.schema.GraphQLTypeUtil.simplePrint;

/**
 * This creates a map of tracing information as outlined in https://github.com/apollographql/apollo-tracing
 * <p>
 * This is a stateful object that should be instantiated and called via {@link java.lang.instrument.Instrumentation}
 * calls.  It has been made a separate class so that you can compose this into existing
 * instrumentation code.
 */
@PublicApi
public class SimplifiedTracingSupport implements InstrumentationState {

    private final Instant startRequestTime;
    private final long startRequestMs;
    private final ConcurrentLinkedQueue<Map<String, Object>> fieldData;
    private final Map<String, Object> parseMap = new LinkedHashMap<>();
    private final Map<String, Object> validationMap = new LinkedHashMap<>();
    private final boolean includeTrivialDataFetchers;

    /**
     * The timer starts as soon as you create this object
     *
     * @param includeTrivialDataFetchers whether the trace trivial data fetchers
     */
    public SimplifiedTracingSupport(boolean includeTrivialDataFetchers) {
        this.includeTrivialDataFetchers = includeTrivialDataFetchers;
        startRequestMs = System.currentTimeMillis();
        startRequestTime = Instant.now();
        fieldData = new ConcurrentLinkedQueue<>();
    }

    /**
     * A simple object that you need to call {@link #onEnd()} on
     */
    public interface TracingContext {
        /**
         * Call this to end the current trace context
         */
        void onEnd();
    }

    /**
     * This should be called to start the trace of a field, with {@link TracingContext#onEnd()} being called to
     * end the call.
     *
     * @param dataFetchingEnvironment the data fetching that is occurring
     * @param trivialDataFetcher      if the data fetcher is considered trivial
     *
     * @return a context to call end on
     */
    public TracingContext beginField(DataFetchingEnvironment dataFetchingEnvironment, boolean trivialDataFetcher) {
        if (!includeTrivialDataFetchers && "id".equals(dataFetchingEnvironment.getField().getName())) {
            // id-Felder sind bei uns wegen des 'id' Schema-Mappings keine trivialDataFetchers,
            // aber ich will sie trotzdem nicht im Loghabenb
            return () -> {
                // nothing to do
            };
        }
        if (!includeTrivialDataFetchers && trivialDataFetcher) {
            return () -> {
                // nothing to do
            };
        }
        long startFieldFetch = System.currentTimeMillis();
        return () -> {
            long now = System.currentTimeMillis();
            long duration = now - startFieldFetch;
            long startOffset = startFieldFetch - startRequestMs;
            ExecutionStepInfo executionStepInfo = dataFetchingEnvironment.getExecutionStepInfo();

            Map<String, Object> fetchMap = new LinkedHashMap<>();
            fetchMap.put("path", executionStepInfo.getPath().toString());
            fetchMap.put("thread", Thread.currentThread().getName());
//            fetchMap.put("parentType", simplePrint(executionStepInfo.getParent().getUnwrappedNonNullType()));
//            fetchMap.put("returnType", executionStepInfo.simplePrint());
//            fetchMap.put("fieldName", executionStepInfo.getFieldDefinition().getName());
            fetchMap.put("startOffset", startOffset);
            fetchMap.put("duration", duration);

            fieldData.add(fetchMap);
        };
    }

    /**
     * This should be called to start the trace of query parsing, with {@link TracingContext#onEnd()} being called to
     * end the call.
     *
     * @return a context to call end on
     */
    public TracingContext beginParse() {
        return traceToMap(parseMap);
    }

    /**
     * This should be called to start the trace of query validation, with {@link TracingContext#onEnd()} being called to
     * end the call.
     *
     * @return a context to call end on
     */
    public TracingContext beginValidation() {
        return traceToMap(validationMap);
    }

    private TracingContext traceToMap(Map<String, Object> map) {
        long start = System.currentTimeMillis();
        return () -> {
            long now = System.currentTimeMillis();
            long duration = now - start;
            long startOffset = now - startRequestMs;

            map.put("startOffset", startOffset);
            map.put("duration", duration);
        };
    }

    /**
     * This will snapshot this tracing and return a map of the results
     *
     * @return a snapshot of the tracing data
     */
    public Map<String, Object> snapshotTracingData() {

        Map<String, Object> traceMap = new LinkedHashMap<>();
//        traceMap.put("version", 1L);
//        traceMap.put("startTime", rfc3339(startRequestTime));
//        traceMap.put("endTime", rfc3339(Instant.now()));
        traceMap.put("duration", System.currentTimeMillis() - startRequestMs);
        traceMap.put("parsing", copyMap(parseMap));
        traceMap.put("validation", copyMap(validationMap));
        traceMap.put("execution", executionData());

        return traceMap;
    }

    private Object copyMap(Map<String, Object> map) {
        return new LinkedHashMap<>(map);
    }

    private Map<String, Object> executionData() {
        Map<String, Object> map = new LinkedHashMap<>();
        //
        List<Map<String, Object>> list = new LinkedList<>(fieldData);
        map.put("handlers", list);
        return map;
    }

    private String rfc3339(Instant time) {
        return DateTimeFormatter.ISO_INSTANT.format(time);
    }

}
