package nh.springgraphql.graphqlservice.graphql;

import nh.springgraphql.graphqlservice.domain.Comment;
import nh.springgraphql.graphqlservice.domain.Story;
import nh.springgraphql.graphqlservice.domain.Writer;
import org.springframework.core.convert.converter.Converter;

public record NodeId(String typeName, String id) {

    public static class NodeIdConverter implements Converter<String, NodeId> {

        @Override
        public NodeId convert(String source) {
            var parts = source.split(":");
            if (parts.length < 2) {
                // das machen wir nur, um die Verwendung im Workshop zu vereinfachen
                // wenn wir keine gültige Id haben, setzen wir nur die Id, aber keinen typeName :-/
                // Somit machen wir die NodeId ein Stück weit abwärtskompatibel und müssen z.B.
                // nicht alle Tests umstellen, in denen einen id als String angegeben wird,
                // sobald wir die API um die NodeId erweitern
                return new NodeId("<unknwon>", source);
            }
            return new NodeId(parts[0], parts[1]);
        }
    }


    static NodeId forNode(Object o) {
        if (o instanceof Story s) {
            return new NodeId("S", s.id());
        }

        if (o instanceof Comment c) {
            return new NodeId("C", c.id());
        }

        if (o instanceof Writer w) {
            return new NodeId("W", w.id());
        }

        throw new IllegalStateException("Unknown node " + o);
    }

    @Override
    public String toString() {
        return "%s:%s".formatted(typeName, id);
    }
}
