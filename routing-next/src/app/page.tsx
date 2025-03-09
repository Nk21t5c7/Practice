import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Link from "next/link";
import Image from "next/image";
import "./globals.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faThumbsUp } from "@fortawesome/free-solid-svg-icons";

export default function Home() {
  return (
    <div>
      <div className=" font-[family-name:var(--font-geist-sans)] grid lg:flex lg:flex-row lg:flex-nowrap lg:items-center">
        <Header />
        <main className=" basis-[1024px] flex flex-col gap-8 row-start-2 items-center justify-center sm:items-start p-4 ">
          <div className="grid grid-cols-2 gap-4">
            <Link href="/small-breed">
              <div
                className="relative after:content-['Small_Breed'] after:absolute after:flex 
            after:rounded-lg after:bottom-0 after:left-0 after:w-full after:h-[5vh] after:bg-black after:text-white 
            after:items-center after:justify-center"
              >
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
            <div className="flex gap-4 flex-col">
              <Link href="/medium-breed">
                <div
                  className="relative after:content-['Medium_Breed'] after:absolute
               after:flex after:rounded-lg after:bottom-0 after:left-0 after:w-full after:h-[5vh] 
               after:bg-black after:text-white after:items-center after:justify-center
               after:hover:bg-amber-500;
               "
                >
                  <Image
                    src="/images/medium.jpg"
                    alt="Medium dogs"
                    layout="responsive"
                    width={"150"}
                    height={"100"}
                    objectFit="contain"
                    className="w-full h-auto rounded-2xl -z-10"
                  />
                </div>
              </Link>
              <Link href="/large-breed">
                <div className="relative after:content-['Large_Breed'] after:absolute after:flex after:rounded-lg after:bottom-0 after:left-0 after:w-full after:h-[5vh] after:bg-black after:text-white after:items-center after:justify-center">
                  <Image
                    src="/images/large.jpg"
                    alt="Large dog"
                    layout="responsive"
                    width={"150"}
                    height={"100"}
                    objectFit="contain"
                    className="w-full h-auto rounded-2xl -z-10"
                  />
                </div>
              </Link>
            </div>
          </div>
        </main>
      </div>
      <Footer />
    </div>
  );
}
