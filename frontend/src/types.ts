export type BaseStory = {
  id: string;
  title: string;
  excerpt: string;
  date: string;
  category: string;
  likes: number;
  image?: { uri: string };
  writer: { name: string };
};
