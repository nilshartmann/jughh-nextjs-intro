package nh.springgraphql.graphqlservice.config.graphql;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.graphql.server.WebGraphQlInterceptor;
import org.springframework.graphql.server.WebGraphQlRequest;
import org.springframework.graphql.server.WebGraphQlResponse;
import org.springframework.stereotype.Component;
import org.springframework.util.StringUtils;
import reactor.core.publisher.Mono;

import java.util.Optional;

@Component
class RequestHeaderInterceptor implements WebGraphQlInterceptor {

    private static final Logger log = LoggerFactory.getLogger(RequestHeaderInterceptor.class);

    @Override
    public Mono<WebGraphQlResponse> intercept(WebGraphQlRequest request, Chain chain) {
        var slowdown = Optional.ofNullable(
                request.getHeaders().getFirst("slowdown")
            )
            .map(RequestHeaderInterceptor::safeParse);

        sleepFor(request.getOperationName(), slowdown);

        return chain.next(request);
    }

    private static long safeParse(String o) {
        if (!StringUtils.hasText(o)) {
            return 0;
        }

        try {
            return Long.parseLong(o);
        } catch (Exception ex) {
            log.warn("Invalid value in slowdown header: '{}'",
                o, ex);
        }

        return 0;

    }

    public static void sleepFor(String operation, Optional<Long> duration) {
        duration.ifPresent((t) -> sleepFor(operation, t));
    }

    public static void sleepFor(String operation, long duration) {
        if (duration > 0) {
            log.info("Delaying execution of '{}' for {} ms.",
                operation,
                duration);
            try {
                Thread.sleep(duration);
            } catch (InterruptedException e) {
                throw new RuntimeException(e);
            }
        }
    }
}