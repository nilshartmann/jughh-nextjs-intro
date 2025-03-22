import Link from "next/link";

import { buildUrl } from "@/components/build-url";
import { PageButton } from "@/components/Button";
import PaginationBar from "@/components/PaginationBar";

type ArticleListPaginationBarProps = {
  pageable: {
    totalPages: number;
  };
  params: Promise<Record<string, string>>;
};

export default async function ArticleListPaginationBar({
  pageable,
  params,
}: ArticleListPaginationBarProps) {
  const searchParams = await params;
  const totalPages = pageable.totalPages; // pageCountPromise.then((t) => t.totalPages);
  const currentPage = parseInt(searchParams.page || "1");

  return (
    <div className={"flex justify-center pt-4"}>
      <PaginationBar totalPages={totalPages} currentPage={currentPage}>
        {(btn) =>
          btn.disabled ? (
            <PageButton state={btn} />
          ) : (
            <Link
              prefetch={false}
              href={buildUrl("/articles", { ...searchParams, page: btn.page })}
            >
              <PageButton state={btn} />
            </Link>
          )
        }
      </PaginationBar>
    </div>
  );
}
