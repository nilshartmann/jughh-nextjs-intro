package nh.springgraphql.graphqlservice.graphql;

import nh.springgraphql.graphqlservice.config.graphql.GraphQlConfig;
import nh.springgraphql.graphqlservice.domain.StoryRepository;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.graphql.GraphQlTest;
import org.springframework.context.annotation.Import;
import org.springframework.graphql.test.tester.GraphQlTester;
import org.springframework.test.annotation.DirtiesContext;

import static org.assertj.core.api.Assertions.assertThat;

@GraphQlTest(MutationController.class)
@Import({StoryRepository.class, GraphQlConfig.class})
public class AddCommentMutationTest {

    @Autowired
    GraphQlTester graphQlTester;

    @Autowired
    StoryRepository storyRepository;

    @Test
    @DirtiesContext
    void add_comment_adds_comment_to_repo_and_returns_success_payload() {

        graphQlTester.document(
            // language=GraphQL
            """
            mutation { newComment: addComment(
                    input: { storyId: "1", text: "hello world" }
                ) {
                ...on AddCommentSuccess{ newComment {
                id text } }
                }
                
            }
"""
        ).execute()
            .path("newComment.newComment", tester -> {
                tester.path("id").hasValue();
                tester.path("text").entity(String.class).isEqualTo("hello world");
            });

        var comments = storyRepository.findStory("1").orElseThrow().comments();
        assertThat(comments).hasSize(4);
        assertThat(comments.get(3).text()).isEqualTo("hello world");
    }

    @Test
    void invalid_story_id_returns_error_payload() {

        graphQlTester.document(
                // language=GraphQL
                """
                mutation { newComment: addComment(
                        input: { storyId: "666", text: "hello world" }
                    ) {
                    ...on AddCommentError{ msg }
                    }
                }
    """
            ).execute()
            .path("newComment.newComment").pathDoesNotExist()
            .path("newComment.msg").hasValue();
    }
}
