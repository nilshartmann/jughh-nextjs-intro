package nh.springgraphql.graphqlservice.domain;

public interface Contact {

    static EMailContact ofEmail(String email) {
        return new EMailContact(email);
    }

    static PhoneContact ofPhone(String phone) {
        return new PhoneContact(phone);
    }



}