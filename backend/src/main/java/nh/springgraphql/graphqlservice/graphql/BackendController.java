package nh.springgraphql.graphqlservice.graphql;

import nh.springgraphql.graphqlservice.config.GitInfo;
import org.springframework.graphql.data.method.annotation.QueryMapping;
import org.springframework.stereotype.Controller;

@Controller
class BackendController {

    private final GitInfo gitInfo;

    BackendController(GitInfo gitInfo) {
        this.gitInfo = gitInfo;
    }

    public record BackendInfo(String commitId, String commitDate, String commitMsg) {}

    @QueryMapping
    public BackendInfo backendInfo() {
        return new BackendInfo(
            gitInfo.getCommidId(),
            gitInfo.getCommitTime(),
            gitInfo.getCommitMsg()
        );
    }
}
