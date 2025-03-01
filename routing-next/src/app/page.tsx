
import Header from "@/components/Header";
import Link from "next/link";
export default function Home() {
  return (
    <div className="font-[family-name:var(--font-geist-sans)] flex flex-col flex-nowrap">
      <Header />
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start w-[65vw]">
        <div className = 'grid grid-cols-2 grid-rows-2 '>
          <div className = "h-[35vh] w-[35vw] border-2">
              <Link href = '/small-breed'>Small Breed</Link>
          </div>
          <div className = "h-[35vh] w-[35vw] border-2">
              <Link href = '/medium-breed'>Medium Breed</Link>
          </div>
          <div className = "h-[35vh] w-[35vw] border-2">
              <Link href = '/large-breed'>Large Breed</Link>
          </div>

        </div>
      </main>
      <footer className="row-start-3 flex gap-6 flex-wrap items-center justify-center">
        
      </footer>
    </div>
  );
}
