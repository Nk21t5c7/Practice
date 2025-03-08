import React, { useEffect } from "react";
import path from "path";
import fs from "fs";
import "@/app/globals.css";
import Link from "next/link";
import Header from "@/components/Header";
import Image from "next/image";
export async function getStaticProps() {
  const filePath = path.join(process.cwd(), "src", "assets", "largebreed.json");
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
  img: string;
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
      <main className="p-4 align-top ">
        <h2 className="text-3xl ">Large Breed</h2>
        {/* <ul className="grid grid-cols-[repeat(auto-fill, minmax(200px 1fr))]"> */}
        <ul className="pt-4 grid gap-4 sm:grid-flow-dense sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 ">
          {aboutData.map((e: BreedItem, index) => {
            return (
              <li key={index} className="h-[300px] max-w-[500px]">
                <Link
                  href={`/large-breed/${encodeURIComponent(e.breed)}`}
                  className="font-bold text-[1.2rem] relative hover:underline"
                >
                  <p className="absolute bottom-5 bg-[rgba(0_0_0_.7)] text-white flex left-0 right-0 justify-center backdrop-blur-2xl">{e.breed}</p>
                  <Image
                    src={e.img}
                    alt={e.breed}
                    width={"500"}
                    height={"300"}
                    style={{
                      width: "500px",
                      height: "300px",
                      maxHeight: "350px",
                      objectFit: "cover",
                    }}
                    objectPosition="center"
                    className="w-full h-full rounded-2xl object-[50%_25%]"
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
