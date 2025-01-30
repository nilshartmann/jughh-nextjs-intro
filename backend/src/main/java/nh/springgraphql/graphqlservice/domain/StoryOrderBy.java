package nh.springgraphql.graphqlservice.domain;

import java.util.Comparator;

public enum StoryOrderBy {
    DATE(Comparator.comparing(Story::date).reversed()),
    LIKES(Comparator.comparingInt(Story::likes).reversed()),
    CATEGORY(Comparator.comparing(Story::category).reversed());

    public final Comparator<Story> comparator;

    StoryOrderBy(Comparator<Story> comparator) {
        this.comparator = comparator;
    }
}
