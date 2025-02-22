type ArticleBodyProps = {
  body: string;
};

export default function ArticleBody({ body }: ArticleBodyProps) {
  return (
    <>
      <div className={"space-y-2 text-lg leading-8"}>
        {body.split("\n").map((p, i) => {
          return <p key={i}>{p}</p>;
        })}
      </div>
      <div className={"rounded-lg border border-slate-200 bg-stone-50 p-4"}>
        Text is AI-generated and for demo purposes only. It is{" "}
        <span className={"font-bold"}>no real content!</span>
      </div>
    </>
  );
}
