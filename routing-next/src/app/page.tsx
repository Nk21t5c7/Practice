import Header from "@/components/Header";
import Link from "next/link";
import Image from "next/image";
import "./globals.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faThumbsUp } from "@fortawesome/free-solid-svg-icons";

export default function Home() {
  return (
    <div className=" font-[family-name:var(--font-geist-sans)] grid lg:flex lg:flex-row lg:flex-nowrap lg:items-center">
      <Header />
      <main className=" basis-full flex flex-col gap-8 row-start-2 items-center sm:items-start w-[65vw] ">
        <div className="flex flex-wrap flex-col">
          <Link href="/small-breed">
            <div className="relative border-2 w-[50%] after:content-['Small Breed'] after:text-white ">
              <Image
                src="/images/teddy.jpg"
                alt="Small dogs"
                layout="responsive"
                width={"150"}
                height={"100"}
                objectFit="contain"
                className="w-full h-auto rounded-2xl -z-10"
              />
            </div>
          </Link>
          <Link href="/medium-breed">
            <div className="relative border-2 w-[50%] after:content-['Medium Breed'] after:text-white ">
              <Image
                src="/images/teddy.jpg"
                alt="Small dogs"
                layout="responsive"
                width={"150"}
                height={"100"}
                objectFit="contain"
                className="w-full h-auto rounded-2xl -z-10"
              />
            </div>
          </Link>
          <Link href="/large-breed">
            <div className="relative border-2 w-[50%] after:content-['Large Breed'] after:text-white ">
              <Image
                src="/images/teddy.jpg"
                alt="Small dogs"
                layout="responsive"
                width={"150"}
                height={"100"}
                objectFit="contain"
                className="w-full h-auto rounded-2xl -z-10"
              />
            </div>
          </Link>
        </div>
      </main>

      <footer className="row-start-3 flex gap-6 flex-wrap items-center justify-center"></footer>
    </div>
  );
}
