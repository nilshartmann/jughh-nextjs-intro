package nh.springgraphql.graphqlservice.graphql;

import nh.springgraphql.graphqlservice.domain.Article;
import nh.springgraphql.graphqlservice.domain.ArticleRepository;
import nh.springgraphql.graphqlservice.domain.Comment;
import org.springframework.graphql.data.method.annotation.SchemaMapping;
import org.springframework.stereotype.Controller;

import java.util.Optional;

@Controller
class CommentController {

    private final ArticleRepository articleRepository;

    CommentController(ArticleRepository articleRepository) {
        this.articleRepository = articleRepository;
    }

    @SchemaMapping
    Optional<Article> article(Comment comment) {
        return articleRepository.findArticleForComment(comment.id());

    }

}
