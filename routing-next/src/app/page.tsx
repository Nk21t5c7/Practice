import Header from "@/components/Header";
import Link from "next/link";

// export async function getStaticProps() {

// }

export default function Home() {
  return (
    <div className="font-[family-name:var(--font-geist-sans)] flex flex-row flex-nowrap items-center">
      <Header />
      <main className=" basis-full flex flex-col gap-8 row-start-2 items-center sm:items-start w-[65vw] ">
        <div className="grid grid-cols-2 grid-rows-2 ">
          <Link href="/small-breed">
            <div className="h-[35vh] w-[35vw] border-2">Small Breed</div>
          </Link>
          <Link href="/medium-breed">
            <div className="h-[35vh] w-[35vw] border-2">Medium Breed</div>
          </Link>
          <Link href="/large-breed">
            <div className="h-[35vh] w-[35vw] border-2">Large Breed</div>
          </Link>
        </div>
      </main>

      <footer className="row-start-3 flex gap-6 flex-wrap items-center justify-center"></footer>
    </div>
  );
}
