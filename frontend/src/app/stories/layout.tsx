import StoriesHeader from "@/components/layout/StoriesHeader";

export default function StoriesLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <StoriesHeader />
      {children}
    </>
  );
}
