import React, { useEffect } from "react";
import path from "path";
import fs from "fs";
import Link from "next/link";
import Header from "@/components/Header";
export async function getStaticProps() {
  const filePath = path.join(
    process.cwd(),
    "src",
    "assets",
    "smallbreed.json"
  );
  const fileContents = fs.readFileSync(filePath, "utf8");
  const aboutData = JSON.parse(fileContents);
  console.log(aboutData);

  return {
    props: {
      aboutData,
    },
  };
}

interface BreedItem{
  breed: string;
    origin: string;
    size: string;
    weight: string;
    personality: string;
    life_expectancy: string;
    fun_fact: string;
    long_description: string;
}

interface SmallBreedProps {
  aboutData:BreedItem[];
}
const SmallBreed: React.FC<SmallBreedProps> = ({ aboutData }) => {
  // useEffect(() => {
  // {alert('cks')};
  // }, []);
  console.log(aboutData);

  return (
    <div className="font-[family-name:var(--font-geist-sans)] flex flex-row flex-nowrap items-center">
      <Header />
      <h2></h2>
      <ul>
      {aboutData.map((e:BreedItem, index) =>{
        return (
          <li key = {index}>
             <Link href={`/small-breed/${encodeURIComponent(e.breed)}`} className="text-blue-500 hover:underline">
             {e.breed}
             </Link>
          </li>
        )
      })}
      </ul>
    </div>
  );
};

export default SmallBreed;
