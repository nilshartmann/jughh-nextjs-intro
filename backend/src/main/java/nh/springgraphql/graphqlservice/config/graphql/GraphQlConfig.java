package nh.springgraphql.graphqlservice.config.graphql;

import graphql.analysis.FieldComplexityCalculator;
import graphql.analysis.FieldComplexityEnvironment;
import graphql.analysis.MaxQueryComplexityInstrumentation;
import graphql.analysis.MaxQueryDepthInstrumentation;
import graphql.scalars.ExtendedScalars;
import nh.springgraphql.graphqlservice.config.graphql.complexity.DirectiveBasedCalculator;
import nh.springgraphql.graphqlservice.config.graphql.tracing.SimplifiedTracingInstrumentation;
import nh.springgraphql.graphqlservice.domain.Comment;
import nh.springgraphql.graphqlservice.domain.Writer;
import nh.springgraphql.graphqlservice.graphql.MutationController;
import nh.springgraphql.graphqlservice.graphql.NodeId;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.aot.hint.annotation.RegisterReflectionForBinding;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.graphql.execution.RuntimeWiringConfigurer;

import java.awt.print.Book;

@Configuration
 @RegisterReflectionForBinding({Comment.class, Writer.class, MutationController.AddCommentSuccess.class, MutationController.AddCommentError.class, MutationController.AddLikeSuccess.class, MutationController.AddLikeError.class})
public class GraphQlConfig {
    @Bean
    public RuntimeWiringConfigurer runtimeWiringConfigurer() {
        return wiringBuilder -> wiringBuilder.scalar(ExtendedScalars.DateTime);
    }

    @Bean
    NodeId.NodeIdConverter nodeIdConverter() {
        return new NodeId.NodeIdConverter();
    }

//    @Bean
//    SimplifiedTracingInstrumentation tracingInstrumentation() {
//        return new SimplifiedTracingInstrumentation();
//    }

//    @Bean
//    MaxQueryComplexityInstrumentation maxQueryComplexityInstrumentation() {
//        final Logger log = LoggerFactory.getLogger( GraphQlConfig.class );
//        return new MaxQueryComplexityInstrumentation(10, new DirectiveBasedCalculator());
//    }

//    @Bean
//    MaxQueryDepthInstrumentation maxQueryDepthInstrumentation() {
//        return new MaxQueryDepthInstrumentation(3);
//    }

}