import Link from "next/link";

export default function DummyLinks() {
  return (
    <ol>
      <Link prefetch={false} href={"/c/static_01_query"}>
        Static 01
      </Link>
      <Link prefetch={false} href={"/c/static_02_query"}>
        Static 02
      </Link>
      <Link prefetch={false} href={"/c/dynamic_01_query"}>
        Dynamic 01
      </Link>
    </ol>
  );
}
