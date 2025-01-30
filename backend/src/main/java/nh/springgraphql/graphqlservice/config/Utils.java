package nh.springgraphql.graphqlservice.config;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

import java.util.concurrent.ThreadLocalRandom;

public class Utils {

    private static final Logger log = LoggerFactory.getLogger(Utils.class);

    public static void sleep(long baseDelayMs) {
        sleep(baseDelayMs, 10);
    }

    public static void sleep(long baseDelayMs, int variancePct) {
        if (variancePct < 0 || variancePct > 100) {
            throw new IllegalArgumentException("Variance percentage must be between 0 and 100");
        }

        // Calculate variance in milliseconds
        long varianceMs = (long) (baseDelayMs * (variancePct / 100.0));

        // Calculate the actual delay with random variance
        long actualDelay = baseDelayMs + ThreadLocalRandom.current().nextLong(-varianceMs, varianceMs + 1);

        // Ensure the delay is not negative
        actualDelay = Math.max(0, actualDelay);

        try {
            log.debug("Sleep for {}ms", actualDelay);
            Thread.sleep(actualDelay);
        } catch (InterruptedException e) {
            e.printStackTrace();
        }
    }
}
