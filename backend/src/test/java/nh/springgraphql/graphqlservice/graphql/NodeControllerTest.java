package nh.springgraphql.graphqlservice.graphql;

import nh.springgraphql.graphqlservice.config.graphql.GraphQlConfig;
import nh.springgraphql.graphqlservice.domain.PublisherServiceClient;
import nh.springgraphql.graphqlservice.domain.StoryRepository;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.graphql.GraphQlTest;
import org.springframework.context.annotation.Import;
import org.springframework.graphql.test.tester.GraphQlTester;
import org.springframework.test.context.bean.override.mockito.MockitoBean;

@GraphQlTest(NodeController.class)
@Import({StoryRepository.class, GraphQlConfig.class})
public class NodeControllerTest {

    @MockitoBean
    PublisherServiceClient publisherServiceClient;

    @Autowired
    GraphQlTester tester;


    @Test
    void node_returns_story_by_id() {
        tester.document(
            // language=GraphQL
            """
            { node (id: "S:1") {... on Story { title }}}
"""
        )
            .execute()
            .path("node.title").entity(String.class).isEqualTo("AI Revolutionizing Healthcare");
    }

}
