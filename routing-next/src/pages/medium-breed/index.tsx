import React, { useEffect } from "react";
import path from "path";
import fs from "fs";
import "@/app/globals.css";
import Link from "next/link";
import Header from "@/components/Header";
import Image from "next/image";
export async function getStaticProps() {
  const filePath = path.join(process.cwd(), "src", "assets", "mediumbreed.json");
  const fileContents = fs.readFileSync(filePath, "utf8");
  const aboutData = JSON.parse(fileContents);
  console.log(aboutData);

  return {
    props: {
      aboutData,
    },
  };
}

interface BreedItem {
  breed: string;
  origin: string;
  size: string;
  img:string;
  weight: string;
  personality: string;
  life_expectancy: string;
  fun_fact: string;
  long_description: string;
}

interface MediumBreedProps {
  aboutData: BreedItem[];
}
const SmallBreed: React.FC<MediumBreedProps> = ({ aboutData }) => {
  console.log(aboutData);

  return (
    <div className=" font-[family-name:var(--font-geist-sans)] grid lg:flex lg:flex-row lg:flex-nowrap lg:items-center">
      <Header />
      <main className="p-4 align-top">
        <h2 className="text-3xl">Medium Breed</h2>
        {/* <ul className="grid grid-cols-[repeat(auto-fill, minmax(200px 1fr))]"> */}
        <ul className="pt-4 grid gap-2 sm:auto-cols-[minmax(100px, auto)] sm:grid-flow-dense grid-cols-1 sm:grid-cols-2 md:grid-cols-3 ">
          {aboutData.map((e: BreedItem, index) => {
            return (
              <li key={index} className={`h-auto min-w-[200px] ${index%3 === 0 && "sm:col-span-2"}`}>
                <Link
                  href={`/medium-breed/${encodeURIComponent(e.breed)}`}
                  className="font-bold text-2xl hover:underline"
                >
                  {e.breed}
                  <Image
                    src={e.img}
                    alt={e.breed}
                    layout="responsive"
                    width={"500"}
                    height={"300"}
                    objectFit="cover"
                    objectPosition="center"
                    className="w-full h-full rounded-2xl"
                  />
                </Link>
              </li>
            );
          })}
        </ul>
      </main>
    </div>
  );
};

export default SmallBreed;
