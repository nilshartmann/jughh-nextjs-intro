package nh.springgraphql.graphqlservice.domain;

import java.util.List;
import java.util.Optional;

public record StoriesResult(
    int page, int pageSize,
    StoryOrderBy orderBy,
    Optional<Integer> prevPage,
    Optional<Integer> nextPage,
    List<Story> results
) {
}
