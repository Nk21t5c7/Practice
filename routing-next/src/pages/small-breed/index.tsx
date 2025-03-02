import React, {useEffect} from "react";
import path from "path";
import fs from "fs";
import Header from "@/components/Header";
export async function getStaticProps() {
  const filePath = path.join(
    process.cwd(),
    "src",
    // "app",
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

interface SmallBreedProps {
  aboutData: {
    breed: string;
    origin: string;
    size: string;
    weight: string;
    personality: string;
    life_expectancy: string;
    fun_fact: string;
    long_description: string;
  }[];
}
const SmallBreed: React.FC<SmallBreedProps> = ({ aboutData }) => {
  // useEffect(() => {
    // {alert('cks')};
  // }, []);
  console.log(aboutData);
  
  return (

    <div>
      <Header />
      <h2></h2>
      {/* {aboutData && <p>{aboutData.breed}</p>} */}
    </div>
  );
};

export default SmallBreed;
