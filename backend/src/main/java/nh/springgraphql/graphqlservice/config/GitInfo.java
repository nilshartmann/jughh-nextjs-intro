package nh.springgraphql.graphqlservice.config;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.info.GitProperties;
import org.springframework.stereotype.Component;

import java.time.Instant;
import java.time.ZoneId;
import java.time.format.DateTimeFormatter;
import java.util.Locale;
import java.util.Objects;
import java.util.Optional;

@Component
public class GitInfo implements CommandLineRunner {
    private static final Logger log = LoggerFactory.getLogger(GitInfo.class);

    private final DateTimeFormatter formatter = DateTimeFormatter
        .ofPattern("dd.MM.yyyy HH:mm")
        .withLocale(Locale.GERMAN)
        .withZone(ZoneId.of("Europe/Berlin"));

    private final Optional<GitProperties> gitProperties;

    public GitInfo(Optional<GitProperties> gitProperties) {
        this.gitProperties = gitProperties;
    }

    public String getCommidId() {
        return gitProperties
            .map(GitProperties::getShortCommitId)
            .orElse("unknown");
    }

    public String getCommitTime() {
        return gitProperties
            .map(GitProperties::getCommitTime)
            .map(formatter::format)
            .orElse("unknown");
    }

    public String getCommitMsg() {
        return gitProperties
            .map(p -> p.get("commit.message.full"))
            .filter(Objects::nonNull)
            .orElse("unknown");
    }

    @Override
    public void run(String... args) throws Exception {
        log.info("GitProperties {}",
            getCommidId());
    }
}