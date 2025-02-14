package nh.springgraphql.graphqlservice.graphql;

import graphql.ErrorType;
import graphql.GraphQLError;
import graphql.schema.DataFetchingEnvironment;
import nh.springgraphql.graphqlservice.domain.Article;
import nh.springgraphql.graphqlservice.domain.ArticleRepository;
import nh.springgraphql.graphqlservice.domain.Comment;
import nh.springgraphql.graphqlservice.domain.ResourceNotFoundException;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.graphql.data.method.annotation.Argument;
import org.springframework.graphql.data.method.annotation.GraphQlExceptionHandler;
import org.springframework.graphql.data.method.annotation.MutationMapping;
import org.springframework.stereotype.Controller;

@Controller
public class MutationController {

    private static final Logger log = LoggerFactory.getLogger( MutationController.class );

    private final ArticleRepository articleRepository;

    public MutationController(ArticleRepository articleRepository) {
        this.articleRepository = articleRepository;
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

    public record AddCommentInput(NodeId articleId, String text) {
    }

    @MutationMapping
    AddCommentPayload addComment(@Argument AddCommentInput input) {
        try {
            var newComment = this.articleRepository.addComment(
                input.articleId().id(),
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

    public record AddLikeSuccess(Article article) implements AddLikePayload {
    }

    public record AddLikeInput(NodeId articleId) {
    }

    @MutationMapping
    AddLikePayload addLike(@Argument AddLikeInput input) {
        try {
            var article = this.articleRepository.findArticle(input.articleId().id())
                .orElseThrow( () -> new ResourceNotFoundException("Article not found"));
            article.increaseLike();
            return new AddLikeSuccess(article);
        } catch (Exception ex) {
            log.error("Increasing Like failed: {}", ex.getMessage(), ex);
            return new AddLikeError(ex.getMessage());
        }
    }
}
