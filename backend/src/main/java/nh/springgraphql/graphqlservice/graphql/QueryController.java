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

    private final StoryRepository storyRepository;

    QueryController(StoryRepository storyRepository) {
        this.storyRepository = storyRepository;
    }

    @QueryMapping
    StoriesResult stories(@Argument Optional<StoryOrderBy> orderBy, @Argument Optional<Integer> page, @Argument Optional<Integer> pageSize) {
        var actualOrderBy = orderBy.orElse(StoryOrderBy.DATE);
        var actualPage = page.orElse(1);
        var actualPageSize = pageSize.orElse(4);

        if (actualPage < 1) {
            throw new InvalidRequestException("Value for 'page' is invalid: '%s'. Must be at least '1'"
                .formatted(actualPage));
        }

        var result = this.storyRepository.findAllStories(actualOrderBy, actualPage, actualPageSize);
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
        return storyRepository.findAllWriters();
    }


    @QueryMapping
    Optional<Story> story(@Argument Optional<NodeId> storyId) {
        return storyId
            .map(NodeId::id)
            .map(this.storyRepository::findStory)
            .orElseGet(() -> Optional.ofNullable(this.storyRepository.findAllStories(StoryOrderBy.DATE, 1, 1).results().getFirst()))
            ;
    }

    @SchemaMapping
    String excerpt(Story story, @Argument int maxLength) {
        return storyRepository.generateExcerpt(story, maxLength);
    }

    @SchemaMapping
    long wordCount(Story story) {
        long wordCount = story.body().chars().filter(ch -> ch == 'e').count() * 10;
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
