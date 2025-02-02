package nh.springgraphql.graphqlservice.graphql;

import graphql.GraphQLError;
import graphql.schema.DataFetchingEnvironment;
import nh.springgraphql.graphqlservice.domain.StoriesResult;
import nh.springgraphql.graphqlservice.domain.StoryOrderBy;
import nh.springgraphql.graphqlservice.domain.StoryRepository;
import nh.springgraphql.graphqlservice.domain.Story;
import org.springframework.graphql.data.method.annotation.Argument;
import org.springframework.graphql.data.method.annotation.GraphQlExceptionHandler;
import org.springframework.graphql.data.method.annotation.QueryMapping;
import org.springframework.graphql.data.method.annotation.SchemaMapping;
import org.springframework.graphql.execution.ErrorType;
import org.springframework.stereotype.Controller;

import java.util.Arrays;
import java.util.Optional;

import static nh.springgraphql.graphqlservice.config.Utils.sleep;

@Controller
class QueryController {

    private final StoryRepository storyRepository;

    QueryController(StoryRepository storyRepository) {
        this.storyRepository = storyRepository;
    }

    @QueryMapping
    StoriesResult stories(@Argument Optional<StoryOrderBy> orderBy, @Argument Optional<Integer> page, @Argument Optional<Integer> pageSize) {
        var actualOrderBy = orderBy.orElse(StoryOrderBy.DATE);
        var actualPage = page.orElse(1);
        var actualPageSize = pageSize.orElse(4);

        if (actualPage<1) {
            throw new InvalidRequestException("Value for 'page' is invalid: '%s'. Must be at least '1'"
                .formatted(actualPage));
        }

        var result = this.storyRepository.findAllStories(actualOrderBy, actualPage, actualPageSize);
        return result;
    }

    @QueryMapping
    Optional<Story> story(@Argument NodeId storyId) {
        return this.storyRepository.findStory(storyId.id());
    }

    @SchemaMapping
    String excerpt(Story story, @Argument int maxLength) {
        return storyRepository.generateExcerpt(story, maxLength);
    }

    @SchemaMapping
    long wordCount(Story story) {
        long wordCount = story.body().chars().filter(ch -> ch == 'e').count()*10;
        return wordCount;
    }

    @SchemaMapping
    Image image(Story story) {
        return new Image(
            "/images/stories/s_%s.webp".formatted(story.id())
        );
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
