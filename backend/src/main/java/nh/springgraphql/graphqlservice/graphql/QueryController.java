package nh.springgraphql.graphqlservice.graphql;

import graphql.GraphQLError;
import graphql.schema.DataFetchingEnvironment;
import nh.springgraphql.graphqlservice.domain.*;
import org.springframework.graphql.data.method.annotation.Argument;
import org.springframework.graphql.data.method.annotation.GraphQlExceptionHandler;
import org.springframework.graphql.data.method.annotation.QueryMapping;
import org.springframework.graphql.data.method.annotation.SchemaMapping;
import org.springframework.graphql.execution.ErrorType;
import org.springframework.stereotype.Controller;

import java.time.LocalTime;
import java.util.List;
import java.util.Optional;
import java.util.UUID;

@Controller
class QueryController {

    private final ArticleRepository articleRepository;

    QueryController(ArticleRepository articleRepository) {
        this.articleRepository = articleRepository;
    }

    @QueryMapping
    ArticlesResult articles(@Argument Optional<ArticleOrderBy> orderBy, @Argument Optional<Integer> page, @Argument Optional<Integer> pageSize) {
        var actualOrderBy = orderBy.orElse(ArticleOrderBy.DATE);
        var actualPage = page.orElse(1);
        var actualPageSize = pageSize.orElse(4);

        if (actualPage < 1) {
            throw new InvalidRequestException("Value for 'page' is invalid: '%s'. Must be at least '1'"
                .formatted(actualPage));
        }

        var result = this.articleRepository.findAllArticles(actualOrderBy, actualPage, actualPageSize);
        return result;
    }

    @QueryMapping
    String hello() {
        return "World";
    }

    @QueryMapping
    String uuid() {
        return "%s at %s".formatted(
            UUID.randomUUID().toString(),
            LocalTime.now().toString()
        );
    }

    @QueryMapping
    List<Writer> writers() {
        return articleRepository.findAllWriters();
    }


    @QueryMapping
    Optional<Article> article(@Argument Optional<NodeId> articleId) {
        return articleId
            .map(NodeId::id)
            .map(this.articleRepository::findArticle)
            .orElseGet(() -> Optional.ofNullable(this.articleRepository.findAllArticles(ArticleOrderBy.DATE, 1, 1).results().getFirst()))
            ;
    }

    @SchemaMapping
    String excerpt(Article article, @Argument int maxLength) {
        return articleRepository.generateExcerpt(article, maxLength);
    }

    @SchemaMapping
    long wordCount(Article article) {
        long wordCount = article.body().chars().filter(ch -> ch == 'e').count() * 10;
        return wordCount;
    }

    @SchemaMapping
    Image image(Article article) {
        return new Image(
            "/images/articles/s_%s.webp".formatted(article.id()),
            "Alt text for %s".formatted(article.title())
        );
    }

    @SchemaMapping
    List<Article> relatedArticles(Article article) {
        return articleRepository.getRelatedArticles(article);
    }

    @GraphQlExceptionHandler
    GraphQLError handleInvalidArgs(InvalidRequestException invalidRequestException, DataFetchingEnvironment dataFetchingEnvironment) {
        return GraphQLError.newError()
            .location(dataFetchingEnvironment.getField().getSourceLocation())
            .errorType(ErrorType.BAD_REQUEST)
            .message(invalidRequestException.getMessage())
            .build();
    }
}
