package nh.springgraphql.graphqlservice.domain;

import org.springframework.stereotype.Component;

import java.util.List;
import java.util.Optional;

/**
 * This simulates some store of articles. To make things simple during the workshop everything we need is
 * placed in this single class.
 * <p>
 * In real life, that would be a database, remote service, ... <br/>
 * Also it would maybe be splitted into multiple parts: Articles, Comments, ExcerptService, ...
 * </p>
 */
@Component
public class ArticleRepository {

    private final List<Article> articles;

    ArticleRepository() {
        this.articles = Articles.generateSampleArticles();
    }

    public ArticlesResult findAllArticles(ArticleOrderBy orderBy, int page, int pageSize) {
        var zeroBasedPage = page - 1;
        var sortedArticles = articles.stream()
            .sorted(orderBy.comparator)
            .skip((long) zeroBasedPage * pageSize)
            .limit(pageSize)
            .toList();

        var prevPage = page > 1 ? page - 1 : null;
        var nextPage = (zeroBasedPage + 1) * pageSize < articles.size() ? page + 1 : null;

        return new ArticlesResult(
            page, pageSize,
            orderBy,
            Optional.ofNullable(prevPage),
            Optional.ofNullable(nextPage),
            sortedArticles
        );
    }

    public Optional<Article> findArticle(String articleId) {
        return articles.stream().filter(s -> s.id().equals(articleId)).findAny();
    }

    public Optional<Article> findArticleForComment(String commentId) {
        for (Article s : articles) {
            if (s.comments().stream().anyMatch(c -> c.id().equals(commentId))) {
                return Optional.of(s);
            }
        }

        return Optional.empty();
    }


    //    @Cacheable(cacheNames="excerpt-cache")
//    @Cacheable(cacheNames="excerpt-cache", key="'article_' + #article.id() + '_' + #maxLength")
    public String generateExcerpt(Article article, int maxLength) {
//        // run some heavily complex algorithms or ask AI to generate
//        // the excerpt...
//        sleep(2000);

        var effectiveMaxLength = maxLength - 1;

        var input = article.body();

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
        return this.articles.stream()
            .flatMap(s -> s.comments().stream().filter(c -> c.id().equals(id)))
            .findAny();
    }

    public Optional<Writer> findWriter(String id) {
        return this.articles.stream()
            .map(Article::writer)
            .filter(w -> w.id().equals(id))
            .findAny();
    }

    public List<Writer> findAllWriters() {
        return this.articles.stream()
            .map(Article::writer)
            .distinct()
            .sorted()
            .toList();
    }


    public List<Comment> findCommentsForArticle(String articleId) {
        var article = findArticle(articleId).orElseThrow(
            () -> new ResourceNotFoundException("Article '%s' not found".formatted(articleId))
        );

        return article.comments().stream().toList();
    }

    public Comment addComment(String articleId, String text) {
        var article = findArticle(articleId).orElseThrow(
            () -> new ResourceNotFoundException("Article '%s' not found".formatted(articleId))
        );

        if (text.length() < 5) {
            throw new IllegalStateException("Please enter at least five chars for a comment");
        }

        var newComment = article.addComment(text);

        return newComment;
    }

    private String newCommentId() {
        //  😈 😈 😈 😈
        return String.valueOf(
            this.articles.stream()
                .map(Article::comments)
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
        ArticleRepository repo = new ArticleRepository();
        var articles = repo.articles;

        // Print each article and its comments
        for (Article article : articles) {
            System.out.println("Article: " + article);
            System.out.println("Comments: " + repo.findCommentsForArticle(article.id()));
            System.out.println();
        }
    }


}