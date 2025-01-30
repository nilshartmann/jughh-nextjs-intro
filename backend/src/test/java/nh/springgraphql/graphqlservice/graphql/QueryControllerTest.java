package nh.springgraphql.graphqlservice.graphql;

import nh.springgraphql.graphqlservice.config.graphql.GraphQlConfig;
import nh.springgraphql.graphqlservice.domain.StoryRepository;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.graphql.GraphQlTest;
import org.springframework.context.annotation.Import;
import org.springframework.graphql.test.tester.GraphQlTester;

@GraphQlTest(controllers = QueryController.class)
@Import({StoryRepository.class, GraphQlConfig.class})
public class QueryControllerTest {
    @Autowired
    GraphQlTester tester;

    @Test
    void returns_existing_story_by_id_with_default_excerpt() {
        tester.document(
                // language=GraphQL
                """
                query { story(storyId: "2") { id title excerpt } }
                """)
            .execute()
            .path("story", tester -> {
                tester.path("id").entity(String.class).isEqualTo("2");
                tester.path("title").entity(String.class).isEqualTo("Climate Change and Renewable Energy");
                tester.path("excerpt").entity(String.class).isEqualTo("As global temperatur");
            });
    }

    @Test
    void returns_existing_story_by_id_with_specified_excerpt() {
        tester.document(
                // language=GraphQL
                """
                query { story(storyId: "2") { id title excerpt(maxLength: 5) } }
                """)
            .execute()
            .path("story", tester -> {
                tester.path("id").entity(String.class).isEqualTo("2");
                tester.path("title").entity(String.class).isEqualTo("Climate Change and Renewable Energy");
                tester.path("excerpt").entity(String.class).isEqualTo("As gl");
            });
    }

    @Test
    void returns_null_when_story_not_exists() {
        tester.document(
                // language=GraphQL
                """
                query { story(storyId: "666") { id title } }
                """)
            .execute()
            .path("story").valueIsNull();
    }


    @Test
    void returns_stories() {
        tester.document(
            // language=GraphQL
            """
            query { stories { id title } }
            """)
            .execute()
            .path("stories[*]").entityList(Object.class).hasSize(12)
            .path("stories[0]", tester -> {
                tester.path("id").entity(String.class).isEqualTo("1");
                tester.path("title").entity(String.class).isEqualTo("AI Revolutionizing Healthcare");
            });
    }

}
