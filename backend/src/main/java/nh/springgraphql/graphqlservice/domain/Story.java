package nh.springgraphql.graphqlservice.domain;

import java.time.OffsetDateTime;
import java.util.List;
import java.util.Objects;

public class Story {
    private final String id;
    private final OffsetDateTime date;
    private final String title;
    private final String body;
    private final List<Comment> comments;
    private final Category category;
    private final Writer writer;
    private int likes;

    public Story(String id, OffsetDateTime date, String title, String body, List<Comment> comments, Category category, Writer writer, int likes) {
        this.id = id;
        this.date = date;
        this.title = title;
        this.body = body;
        this.comments = comments;
        this.category = category;
        this.writer = writer;
        this.likes = likes;
    }

    public String id() {
        return id;
    }

    public OffsetDateTime date() {
        return date;
    }

    public String title() {
        return title;
    }

    public String body() {
        return body;
    }

    public List<Comment> comments() {
        return comments;
    }

    public Category category() {
        return category;
    }

    public Writer writer() {
        return writer;
    }

    public int likes() {
        return likes;
    }

    public void increaseLike() {
        this.likes = this.likes + 1;
    }

    @Override
    public boolean equals(Object o) {
        if (!(o instanceof Story story)) return false;
        return Objects.equals(id, story.id);
    }

    @Override
    public int hashCode() {
        return Objects.hashCode(id);
    }

    @Override
    public String toString() {
        return "Story{" +
               "id='" + id + '\'' +
               ", date=" + date +
               ", title='" + title + '\'' +
               ", body='" + body + '\'' +
               ", comments=" + comments +
               ", category=" + category +
               ", writer=" + writer +
               ", likes=" + likes +
               '}';
    }
}
