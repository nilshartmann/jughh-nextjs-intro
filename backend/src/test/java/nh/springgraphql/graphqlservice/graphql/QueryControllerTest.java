package nh.springgraphql.graphqlservice.graphql;

import nh.springgraphql.graphqlservice.config.graphql.GraphQlConfig;
import nh.springgraphql.graphqlservice.domain.ArticleRepository;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.graphql.GraphQlTest;
import org.springframework.context.annotation.Import;
import org.springframework.graphql.test.tester.GraphQlTester;

@GraphQlTest(controllers = QueryController.class)
@Import({ArticleRepository.class, GraphQlConfig.class})
public class QueryControllerTest {
    @Autowired
    GraphQlTester tester;

    @Test
    void returns_existing_article_by_id_with_default_excerpt() {
        tester.document(
                // language=GraphQL
                """
                query { article(articleId: "2") { id title excerpt } }
                """)
            .execute()
            .path("article", tester -> {
                tester.path("id").entity(String.class).isEqualTo("2");
                tester.path("title").entity(String.class).isEqualTo("Climate Change and Renewable Energy");
                tester.path("excerpt").entity(String.class).isEqualTo("As global.");
            });
    }

    @Test
    void returns_existing_article_by_id_with_specified_excerpt() {
        tester.document(
                // language=GraphQL
                """
                query { article(articleId: "2") { id title excerpt(maxLength: 5) } }
                """)
            .execute()
            .path("article", tester -> {
                tester.path("id").entity(String.class).isEqualTo("2");
                tester.path("title").entity(String.class).isEqualTo("Climate Change and Renewable Energy");
                tester.path("excerpt").entity(String.class).isEqualTo("As.");
            });
    }

    @Test
    void returns_null_when_article_not_exists() {
        tester.document(
                // language=GraphQL
                """
                query { article(articleId: "666") { id title } }
                """)
            .execute()
            .path("article").valueIsNull();
    }


    @Test
    void returns_articles() {
        tester.document(
            // language=GraphQL
            """
            query { articles(pageSize: 12) { results { id title } } }
            """)
            .execute()
            .path("articles.results[*]").entityList(Object.class).hasSize(12)
            .path("articles.results[0]", tester -> {
                tester.path("id").entity(String.class).isEqualTo("16");
                tester.path("title").entity(String.class).isEqualTo("Coral Reef Restoration: A Race Against Time");
            });
    }

}
