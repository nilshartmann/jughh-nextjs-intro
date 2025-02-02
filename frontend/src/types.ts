export type BaseStory = {
  id: string;
  title: string;
  excerpt: string;
  date: string;
  category: string;
  likes: number;
  wordCount: number;
  image?: { uri: string };
  writer: { name: string };
};
