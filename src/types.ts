// In diesem Modul befinden sich die "fachlichen" TypeScript-Typen
// die aus Komponentensicht definiert sind
// In der Regel können auch die generierten TS Typen aus den
//  GraphQL Abfragen verwendet werden. Die selbstgeschriebenen
//  TS Typen sind aber besser lesbar und außerdem sind wir so
//  nicht auf den Generator (innerhalb der Anwendung) angewiesen
//  In einer großen Anwendung mit sehr vielen Queries würde ich
//  überlegen, die generierten Typen an einigen Stellen zu verwenden
//   (wird z.B. in fetchArticleList gemacht. Dort gibt es keinen
//   selbstgeschrieben Typ für das Ergebnis)
//

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

export type RelatedArticle = {
  title: string;
  id: string;
  image?: { uri: string; altText: string };
};

export type Article = BaseArticle & {
  body: string;
};

export type Comment = {
  id: string;
  text: string;
  writer: string;
};
