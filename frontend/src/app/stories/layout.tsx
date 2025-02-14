import Footer from "@/components/layout/Footer";
import StoriesHeader from "@/components/layout/StoriesHeader";

export default function StoriesLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <main className={"flex flex-grow flex-col justify-between"}>
      <div className={"space-y-8"}>
        <StoriesHeader />
        {children}
      </div>
      <Footer />
    </main>
  );
}
