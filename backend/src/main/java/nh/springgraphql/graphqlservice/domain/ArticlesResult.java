package nh.springgraphql.graphqlservice.domain;

import java.util.List;
import java.util.Optional;

public record ArticlesResult(
    int page, int pageSize,
    ArticleOrderBy orderBy,
    Optional<Integer> prevPage,
    Optional<Integer> nextPage,
    int totalPages,
    List<Article> results
) {
}
