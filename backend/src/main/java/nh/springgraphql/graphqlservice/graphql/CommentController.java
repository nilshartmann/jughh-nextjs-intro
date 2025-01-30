package nh.springgraphql.graphqlservice.graphql;

import nh.springgraphql.graphqlservice.domain.Comment;
import nh.springgraphql.graphqlservice.domain.Story;
import nh.springgraphql.graphqlservice.domain.StoryRepository;
import org.springframework.context.annotation.Bean;
import org.springframework.graphql.data.method.annotation.SchemaMapping;
import org.springframework.stereotype.Controller;

import java.util.Optional;

@Controller
class CommentController {

    private final StoryRepository storyRepository;

    CommentController(StoryRepository storyRepository) {
        this.storyRepository = storyRepository;
    }

    @SchemaMapping
    Optional<Story> story(Comment comment) {
        return storyRepository.findStoryForComment(comment.id());

    }

}
