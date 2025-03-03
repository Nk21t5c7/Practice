import React from "react";
import { useRouter } from "next/router";
import smallBreedData from "@/assets/smallbreed.json";
import { GetStaticPaths, GetStaticProps } from "next";
import path from "path";
import fs from "fs";

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


export const getStaticPaths: GetStaticPaths = async () => {
  const paths = smallBreedData.map((breed) => ({
    params: { breed: breed.breed },
      
  }));

  console.log(paths)

  return {
    paths,
    fallback: false, //doesnt exist => 404
  };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const breedName = params?.breed as string;

  // `breedName` と一致するデータを探す
  const breedData = smallBreedData.find(
    (item) => item.breed.toLowerCase() === breedName.toLowerCase()
  );

  if (!breedData) {
    return { notFound: true };
  }

  return {
    props: {
      breedData,
    },
  };
};

const BreedDetail: React.FC<{ breedData: BreedItem }> = ({ breedData }) => {
  const router = useRouter();

  if (router.isFallback) {
    return <div>Loading...</div>; 
  }

  return (
    <div className="max-w-2xl mx-auto p-6">
      <h1 className="text-3xl font-bold">{breedData.breed}</h1>
      <p className="text-gray-600">{breedData.origin}</p>
      <p className="mt-2">{breedData.long_description}</p>
      <ul className="mt-4 space-y-2">
        <li><strong>Size:</strong> {breedData.size}</li>
        <li><strong>Weight:</strong> {breedData.weight}</li>
        <li><strong>Personality:</strong> {breedData.personality}</li>
        <li><strong>Life expectancy:</strong> {breedData.life_expectancy}</li>
        <li><strong>Fun Fact:</strong> {breedData.fun_fact}</li>
      </ul>
    </div>
  );
};

export default BreedDetail;
