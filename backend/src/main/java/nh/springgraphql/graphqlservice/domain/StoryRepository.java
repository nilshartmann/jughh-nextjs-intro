package nh.springgraphql.graphqlservice.domain;

import org.springframework.stereotype.Component;

import java.util.List;
import java.util.Optional;

/**
 * This simulates some store of stories. To make things simple during the workshop everything we need is
 * placed in this single class.
 * <p>
 * In real life, that would be a database, remote service, ... <br/>
 * Also it would maybe be splitted into multiple parts: Stories, Comments, ExcerptService, ...
 * </p>
 * <p>
 * This is <b>not threadsafe</b>. While you can access the repository with multiple read requests in parallel,
 * writing (add new comments) might fail
 * </p>
 */
@Component
public class StoryRepository {

    private final List<Story> stories;

    StoryRepository() {
        this.stories = Stories.generateSampleStories();
    }

    public StoriesResult findAllStories(StoryOrderBy orderBy, int page, int pageSize) {
        var zeroBasedPage = page - 1;
        var sortedStories = stories.stream()
            .sorted(orderBy.comparator)
            .skip((long) zeroBasedPage * pageSize)
            .limit(pageSize)
            .toList();

        var prevPage = page > 1 ? page - 1 : null;
        var nextPage = (zeroBasedPage + 1) * pageSize < stories.size() ? page + 1 : null;

        return new StoriesResult(
            page, pageSize,
            orderBy,
            Optional.ofNullable(prevPage),
            Optional.ofNullable(nextPage),
            sortedStories
        );
    }

    public Optional<Story> findStory(String storyId) {
        return stories.stream().filter(s -> s.id().equals(storyId)).findAny();
    }

    public Optional<Story> findStoryForComment(String commentId) {
        for (Story s : stories) {
            if (s.comments().stream().anyMatch(c -> c.id().equals(commentId))) {
                return Optional.of(s);
            }
        }

        return Optional.empty();
    }


    //    @Cacheable(cacheNames="excerpt-cache")
//    @Cacheable(cacheNames="excerpt-cache", key="'story_' + #story.id() + '_' + #maxLength")
    public String generateExcerpt(Story story, int maxLength) {
//        // run some heavily complex algorithms or ask AI to generate
//        // the excerpt...
//        sleep(2000);

        var effectiveMaxLength = maxLength - 1;

        var input = story.body();

        if (input.length() <= effectiveMaxLength) {
            return input.endsWith(".") ? input : input + ".";
        }

        int lastSpaceBeforeLimit = input.lastIndexOf(' ', effectiveMaxLength);
        if (lastSpaceBeforeLimit == -1) {
            return input.substring(0, effectiveMaxLength) + "."; // No spaces found, truncate and add period
        }

        String truncated = input.substring(0, lastSpaceBeforeLimit);

        // Remove non-alphabetic characters from the end
        truncated = truncated.replaceAll("[^a-zA-Z0-9]+$", "");

        return truncated + ".";
    }

    public Optional<Comment> findComment(String id) {
        return this.stories.stream()
            .flatMap(s -> s.comments().stream().filter(c -> c.id().equals(id)))
            .findAny();
    }

    public Optional<Writer> findWriter(String id) {
        return this.stories.stream()
            .map(Story::writer)
            .filter(w -> w.id().equals(id))
            .findAny();
    }

    public List<Writer> findAllWriters() {
        return this.stories.stream()
            .map(Story::writer)
            .distinct()
            .sorted()
            .toList();
    }


    public List<Comment> findCommentsForStory(String storyId) {
        var story = findStory(storyId).orElseThrow(
            () -> new ResourceNotFoundException("Story '%s' not found".formatted(storyId))
        );

        return story.comments().stream().toList();
    }

    public Comment addComment(String storyId, String text) {
        var story = findStory(storyId).orElseThrow(
            () -> new ResourceNotFoundException("Story '%s' not found".formatted(storyId))
        );

        if (text.length() < 5) {
            throw new IllegalStateException("Please enter at least five chars for a comment");
        }

        var newComment = new Comment(
            newCommentId(),
            text
        );

        story.comments().add(newComment);

        return newComment;
    }

    private String newCommentId() {
        //  😈 😈 😈 😈
        return String.valueOf(
            this.stories.stream()
                .map(Story::comments)
                .mapToInt(List::size)
                .sum()
        );
    }

//    private static OffsetDateTime date(String dateTimeString) {
//        DateTimeFormatter formatter = DateTimeFormatter.ofPattern("dd.MM.yyyy HH:mm xxx");
//        OffsetDateTime offsetDateTime = OffsetDateTime.parse(dateTimeString, formatter);
//        return offsetDateTime;
//    }

    public static void main(String[] args) {
        StoryRepository repo = new StoryRepository();
        var stories = repo.stories;

        // Print each story and its comments
        for (Story story : stories) {
            System.out.println("Story: " + story);
            System.out.println("Comments: " + repo.findCommentsForStory(story.id()));
            System.out.println();
        }

        // Example: Add a comment to a story in a thread-safe manner
//        repo.addComment("1", new Comment("13", "Looking forward to more updates!", 4));

        // Print updated comments for Story 1
//        System.out.println("Updated Comments for Story 1: " + repo.getComments("1"));
    }


}