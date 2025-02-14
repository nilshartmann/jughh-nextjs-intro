package nh.springgraphql.graphqlservice.domain;

import java.time.OffsetDateTime;
import java.util.List;
import java.util.Objects;
import java.util.UUID;
import java.util.concurrent.CopyOnWriteArrayList;

public class Article {
    private final String id;
    private final OffsetDateTime date;
    private final String title;
    private final String body;
    private final List<Comment> comments;
    private final Category category;
    private final Writer writer;
    private int likes;

    public Article(String id, OffsetDateTime date, String title, String body, List<Comment> comments, Category category, Writer writer, int likes) {
        this.id = id;
        this.date = date;
        this.title = title;
        this.body = body;
        this.comments = new CopyOnWriteArrayList<>(comments);
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

    public synchronized Comment addComment(String text) {
        var newComment = new Comment(
            UUID.randomUUID().toString(),
            "",
            text
        );

        comments().add(newComment);

        return newComment;
    }

    public void increaseLike() {
        this.likes++;
    }

    @Override
    public boolean equals(Object o) {
        if (!(o instanceof Article article)) return false;
        return Objects.equals(id, article.id);
    }

    @Override
    public int hashCode() {
        return Objects.hashCode(id);
    }

    @Override
    public String toString() {
        return "Article{" +
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
