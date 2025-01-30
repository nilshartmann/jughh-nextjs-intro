package nh.springgraphql.graphqlservice.graphql;

public class InvalidRequestException extends RuntimeException{

    public InvalidRequestException(String message) {
        super(message);
    }
}
