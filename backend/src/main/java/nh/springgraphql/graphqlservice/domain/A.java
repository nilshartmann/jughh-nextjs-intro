package nh.springgraphql.graphqlservice.domain;

import java.util.List;

public class A {

    public static void main(String[] args) {

        List l = List.of("A", "B", "C", "D");

        d(4, 1);
        d(4, 2);
        d(4, 3);
        d(4, 4);

    }


    private static void d(int listSize, int pageSize) {
        var pages = (listSize + pageSize - 1) / pageSize;
        System.out.println(pageSize + " => " + pages);
    }

}
