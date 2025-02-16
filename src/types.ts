export type BaseArticle = {
  id: string;
  title: string;
  excerpt: string;
  date: string;
  category: string;
  likes: number;
  wordCount: number;
  image?: { uri: string; altText: string };
  writer: { name: string };
};

export type Article = BaseArticle & {
  body: string;
};
