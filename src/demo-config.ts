import { RelatedArticle } from "@/types";

export const enableSuspense = true;

export const enableRelatedArticlesButton = true;

// when set to true, also add
// <ReadingSpeedProvider> to /app/layout.tsx
export const showReadingSpeedChooser = false;

/**
 * Can be used to artifically delay single GraphQL requests
 * to simulate slow response times from the backend
 *
 */
export const delayConfig: Record<string, number> = {
  // Article-List on `/articles`
  GetArticleList: 0,

  // Single Article on `/articles/[articleId]`
  GetArticle: 0,

  // Submitting the Newsletter form
  SubscribeNewsletter: 150,

  // Reading comments on `/articles/[articleId]`
  GetCommentList: 0,

  // Reading related articles on `/articles/[articleId]`,
  GetRelatedArticles: 0,

  // Delay the response in LikesWidget
  AddLike: 250,
};

// Setting this to 'force-cache' will enable Next.js
// DATA cache, so graphql requests are not run twice
export const graphQlFetchCache: "force-cache" | null = null;

// used for excercies
export const dummyRelatedArticles: RelatedArticle[] = [
  {
    id: "A_7",
    title: "Space Exploration: Next Stop Europa",
    image: {
      uri: "/images/articles/s_7.webp",
      altText: "Alt text for Space Exploration: Next Stop Europa",
    },
  },
  {
    id: "A_8",
    title: "Advancements in Wind Energy Technology",
    image: {
      uri: "/images/articles/s_8.webp",
      altText: "Alt text for Advancements in Wind Energy Technology",
    },
  },
  {
    id: "A_9",
    title: "CRISPR Gene Editing Breakthrough",
    image: {
      uri: "/images/articles/s_9.webp",
      altText: "Alt text for CRISPR Gene Editing Breakthrough",
    },
  },
  {
    id: "A_12",
    title: "Biodiversity Conservation Efforts Gain Momentum",
    image: {
      uri: "/images/articles/s_12.webp",
      altText: "Alt text for Biodiversity Conservation Efforts Gain Momentum",
    },
  },
  {
    id: "A_13",
    title: "AI-Powered Assistants in Education",
    image: {
      uri: "/images/articles/s_13.webp",
      altText: "Alt text for AI-Powered Assistants in Education",
    },
  },
  {
    id: "A_14",
    title: "The Impact of Reforestation on Climate Change",
    image: {
      uri: "/images/articles/s_14.webp",
      altText: "Alt text for The Impact of Reforestation on Climate Change",
    },
  },
];
