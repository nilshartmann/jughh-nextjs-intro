package nh.springgraphql.graphqlservice.graphql;

import nh.springgraphql.graphqlservice.domain.ArticleRepository;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.graphql.data.method.annotation.Argument;
import org.springframework.graphql.data.method.annotation.QueryMapping;
import org.springframework.graphql.data.method.annotation.SchemaMapping;
import org.springframework.stereotype.Controller;

@Controller
public class NodeController {

    private static final Logger log = LoggerFactory.getLogger( NodeController.class );

    private final ArticleRepository articleRepository;

    public NodeController(ArticleRepository articleRepository) {
        this.articleRepository = articleRepository;
    }

    @SchemaMapping(typeName = "Node")
    String id(Object o) {
        return NodeId.forNode(o).toString();
    }

    @QueryMapping
    Object node(@Argument NodeId id) {
        return switch (id.typeName()) {
            case "A" -> articleRepository.findArticle(id.id());
            case "C" -> articleRepository.findComment(id.id());
            case "W" -> articleRepository.findWriter(id.id());
            default -> throw new IllegalStateException("Invalid Node Id " + id);
        };
    }
}
