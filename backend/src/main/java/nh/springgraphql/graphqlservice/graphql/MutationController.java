package nh.springgraphql.graphqlservice.graphql;

import graphql.ErrorType;
import graphql.GraphQLError;
import graphql.schema.DataFetchingEnvironment;
import jakarta.annotation.security.RolesAllowed;
import nh.springgraphql.graphqlservice.domain.Comment;
import nh.springgraphql.graphqlservice.domain.ResourceNotFoundException;
import nh.springgraphql.graphqlservice.domain.Story;
import nh.springgraphql.graphqlservice.domain.StoryRepository;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.graphql.data.method.annotation.Argument;
import org.springframework.graphql.data.method.annotation.GraphQlExceptionHandler;
import org.springframework.graphql.data.method.annotation.MutationMapping;
import org.springframework.stereotype.Controller;

@Controller
public class MutationController {

    private static final Logger log = LoggerFactory.getLogger( MutationController.class );

    private final StoryRepository storyRepository;

    public MutationController(StoryRepository storyRepository) {
        this.storyRepository = storyRepository;
    }

    @GraphQlExceptionHandler
    GraphQLError handleResourceNotFoundException(ResourceNotFoundException rex, DataFetchingEnvironment env) {
        return GraphQLError.newError()
            .errorType(ErrorType.DataFetchingException)
            .message(rex.getMessage())
            .location(env.getField().getSourceLocation())
            .build();
    }

    // ------------------------------------------------------------------------------------------------------

    public interface AddCommentPayload {
    }

    public record AddCommentError(String msg) implements AddCommentPayload {
    }

    public record AddCommentSuccess(Comment newComment) implements AddCommentPayload {
    }

    public record AddCommentInput(NodeId storyId, String text) {
    }

    @MutationMapping
    AddCommentPayload addComment(@Argument AddCommentInput input) {
        try {
            var newComment = this.storyRepository.addComment(
                input.storyId().id(),
                input.text()
            );

            return new AddCommentSuccess(newComment);
        } catch (Exception ex) {
            log.error("Adding comment failed: {}", ex.getMessage(), ex);
            return new AddCommentError(ex.getMessage());
        }
    }

    // ------------------------------------------------------------------------------------------------------

    public interface AddLikePayload {
    }

    public record AddLikeError(String msg) implements AddLikePayload {
    }

    public record AddLikeSuccess(Story story) implements AddLikePayload {
    }

    public record AddLikeInput(NodeId storyId) {
    }

    @MutationMapping
    AddLikePayload addLike(@Argument AddLikeInput input) {
        try {
            var story = this.storyRepository.findStory(input.storyId().id())
                .orElseThrow( () -> new ResourceNotFoundException("Story not found"));
            story.increaseLike();
            return new AddLikeSuccess(story);
        } catch (Exception ex) {
            log.error("Increasing Like failed: {}", ex.getMessage(), ex);
            return new AddLikeError(ex.getMessage());
        }
    }
}
