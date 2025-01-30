package nh.springgraphql.graphqlservice.domain;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.core.ParameterizedTypeReference;
import org.springframework.http.HttpStatus;
import org.springframework.scheduling.annotation.Async;
import org.springframework.scheduling.annotation.EnableAsync;
import org.springframework.stereotype.Service;
import org.springframework.web.client.HttpClientErrorException;
import org.springframework.web.client.RestClient;

import java.util.Map;
import java.util.Optional;
import java.util.concurrent.CompletableFuture;

@Service
public class PublisherServiceClient {
    private static final Logger log = LoggerFactory.getLogger(PublisherServiceClient.class);

    private final static long slowdownRequest = 500;

    private final RestClient restClient;

    public PublisherServiceClient(@Value("${publisher.service.base-url}") String baseUrl) {
        this.restClient = RestClient.builder()
            .baseUrl(baseUrl)
            .build();
    }

    public Optional<Map<String, String>> fetchPublisher(String publisherId) {

        log.info("Fetching Publisher with Id '{}'", publisherId);

        try {
            var response = this.restClient.
                get().uri(b -> b.path("api/publishers/" + publisherId)
                    .queryParam("slowdown", slowdownRequest)
                    .build())
                .retrieve().body(new ParameterizedTypeReference<Map<String, String>>() {
                });

            return Optional.ofNullable(response);
        } catch (HttpClientErrorException ex) {
            if (ex.getStatusCode().isSameCodeAs(HttpStatus.NOT_FOUND)) {
                log.info("Publisher '{}' not found", publisherId);
                return Optional.empty();
            }

            throw ex;
        }
    }

    @Async
    public CompletableFuture<Optional<Map<String, String>>> fetchPublisherAsync(String publisherId) {
        return CompletableFuture.completedFuture(fetchPublisher(publisherId));
    }

    public static void main(String[] args) {
        try {
            PublisherServiceClient c = new PublisherServiceClient("http://localhost:8090/api/");
            var result = c.fetchPublisher("1");
            log.info("RESULT 1 {}", result);

            var notFound = c.fetchPublisher("1000");
            log.info("RESULT notFound {}", notFound);

        } catch (Exception ex) {
            ex.printStackTrace();
        }
    }
}
