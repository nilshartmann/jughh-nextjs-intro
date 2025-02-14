import ArticlesHeader from "@/components/layout/ArticlesHeader";
import Footer from "@/components/layout/Footer";

export default function ArticlesLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <main className={"flex flex-grow flex-col justify-between"}>
      <div className={"space-y-8"}>
        <ArticlesHeader />
        {children}
      </div>
      <Footer />
    </main>
  );
}
