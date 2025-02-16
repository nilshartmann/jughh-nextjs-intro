package nh.springgraphql.graphqlservice;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.info.GitProperties;
import org.springframework.cache.annotation.EnableCaching;
import org.springframework.scheduling.annotation.EnableAsync;
import org.springframework.stereotype.Component;

import java.util.Optional;

@SpringBootApplication
@EnableCaching
@EnableAsync
public class GraphqlServiceApplication {

    public static void main(String[] args) {
        SpringApplication.run(GraphqlServiceApplication.class, args);
    }


}
