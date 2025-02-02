import "./GlobalHeader.css";

export default function GlobalHeader() {
  return (
    <header className={"global-header mb-8 flex h-36 items-center"}>
      <div className={"mx-auto w-full max-w-screen-lg"}>
        <div className={"flex items-center justify-between font-bold"}>
          <div
            className={
              "font-space rounded-lg bg-slate-50/50 p-4 text-5xl font-bold text-rose-700"
            }
          >
            news.ly
          </div>

          {/*<div className={"w-64 rounded bg-green-200 px-4 py-2"}>*/}
          {/*  <Breaking>Lorem ipsum dolor</Breaking>*/}
          {/*</div>*/}
        </div>
      </div>
    </header>
  );
}
