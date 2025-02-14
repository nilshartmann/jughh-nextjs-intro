"use client";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { ReactNode } from "react";

import { Button, CheckLabel } from "@/components/Button";

type OrderButtonProps = {
  children: ReactNode;
  orderBy?: "DATE" | "CATEGORY" | "LIKES";
};
export function OrderButton({ orderBy, children }: OrderButtonProps) {
  const params = useSearchParams();
  const currentOrderBy = params.get("orderBy");

  const searchParams = new URLSearchParams(params);
  if (orderBy) {
    searchParams.set("orderBy", orderBy);
  } else {
    searchParams.delete("orderBy");
  }

  if (currentOrderBy !== orderBy) {
    // when search order change, go back to first page
    searchParams.delete("page");
  }

  const href = `/articles?${searchParams.toString()}`;

  const checked =
    orderBy?.toUpperCase() === (currentOrderBy?.toUpperCase() || undefined);

  return (
    <Button checked={checked}>
      <CheckLabel checked={checked}>
        {checked ? children : <Link href={href}>{children}</Link>}
      </CheckLabel>
    </Button>
  );
}
