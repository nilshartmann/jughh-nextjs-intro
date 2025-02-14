package nh.springgraphql.graphqlservice.domain;

import java.util.Comparator;

public enum ArticleOrderBy {
    DATE(Comparator.comparing(Article::date).reversed()),
    LIKES(Comparator.comparingInt(Article::likes).reversed()),
    CATEGORY(Comparator.comparing(Article::category).reversed());

    public final Comparator<Article> comparator;

    ArticleOrderBy(Comparator<Article> comparator) {
        this.comparator = comparator;
    }
}
