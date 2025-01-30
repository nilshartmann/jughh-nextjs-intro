package nh.springgraphql.graphqlservice.config.graphql.complexity;

import graphql.analysis.FieldComplexityCalculator;
import graphql.analysis.FieldComplexityEnvironment;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

public class DirectiveBasedCalculator implements FieldComplexityCalculator {

    // directive @complexity(complexity: Int! = 1) on FIELD_DEFINITION

    private static final Logger log = LoggerFactory.getLogger( DirectiveBasedCalculator.class );

    @Override
    public int calculate(FieldComplexityEnvironment environment, int childComplexity) {
        var directive = environment.getFieldDefinition().getAppliedDirective("complexity");
        if (directive == null) {
            return childComplexity + 1;
        }

        Integer complexity = directive.getArgument("complexity").getValue();

        log.info("Field '{}' has explicitly set complexity to {}", environment.getField().getName(),
            complexity);

        return childComplexity + complexity;
    }

}
