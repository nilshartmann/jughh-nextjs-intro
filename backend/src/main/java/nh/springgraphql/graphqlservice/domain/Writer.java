package nh.springgraphql.graphqlservice.domain;

public record Writer(
    String id,
    String name,
    Contact contact
) implements Comparable<Writer> {

    @Override
    public int compareTo(Writer other) {
        return this.id.compareTo(other.id());
    }
}