package nh.springgraphql.graphqlservice.domain;

public enum PublicationState {

    draft, in_review, published;

    public boolean isDraft() {
        return this == draft;
    }

}
