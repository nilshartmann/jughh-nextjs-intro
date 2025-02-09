package nh.springgraphql.graphqlservice.config.graphql;

import org.springframework.graphql.server.WebGraphQlInterceptor;
import org.springframework.graphql.server.WebGraphQlRequest;
import org.springframework.graphql.server.WebGraphQlResponse;
import org.springframework.stereotype.Component;
import reactor.core.publisher.Mono;

import java.util.Collections;

@Component
class RequestHeaderInterceptor implements WebGraphQlInterceptor {

	@Override
	public Mono<WebGraphQlResponse> intercept(WebGraphQlRequest request, Chain chain) {
//		request.getHeaders().getFirst("slowdown");
//		String value = request.getHeaders().getFirst("myHeader");
//		request.configureExecutionInput((executionInput, builder) ->
//				builder.graphQLContext(Collections.singletonMap("myHeader", value)).build());
		return chain.next(request);
	}
}