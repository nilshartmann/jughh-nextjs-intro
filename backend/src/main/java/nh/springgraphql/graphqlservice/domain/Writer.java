package nh.springgraphql.graphqlservice.domain;

public record Writer(
    String id,
    String name,
    Contact contact
) {}
