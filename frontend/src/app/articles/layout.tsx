import ArticlesLayout from "@/components/layout/ArticlesLayout";

export default function ArticlesRouteLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <ArticlesLayout>{children}</ArticlesLayout>;
}
