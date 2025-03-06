import React from "react";
import { useRouter } from "next/router";
import smallBreedData from "@/assets/smallbreed.json";
import { GetStaticPaths, GetStaticProps } from "next";
import Image from "next/image";
import Header from "@/components/Header";
import "@/app/globals.css";
import "@fortawesome/fontawesome-svg-core/styles.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDog, faPaw } from "@fortawesome/free-solid-svg-icons";

import path from "path";
import fs from "fs";

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

export const getStaticPaths: GetStaticPaths = async () => {
  const paths = smallBreedData.map((breed) => ({
    params: { breed: breed.breed },
  }));

  console.log(paths);

  return {
    paths,
    fallback: false, //doesnt exist => 404
  };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const breedName = params?.breed as string;

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
    <div className="py-6 bg-black text-white lg:flex lg: ">
      <Header />
      <div className="p-4  w-full flex flex-col ">
        <h2 className="text-3xl relative flex gap-x-4 items-center content-center font-bold py-2 ">
          {/* // before:content-[''] before:block before:rounded-[50%] before:w-[2rem] before:h-[2rem] before:border-2 before:border-emerald-400 */}
          {/* after:content-[''] after:block after:rounded-[50%] after:w-[2rem] after:h-[2rem] after:border-2 after:border-emerald-400" */}
          <span className="relative flex">
            <FontAwesomeIcon icon={faDog} className = '' />
          </span>
          {breedData.breed}
          {/* <span> */}
            <FontAwesomeIcon icon={faPaw} />
          {/* </span> */}
        </h2>
        <div className="w-full  relative">
          {/* ここh足すとレスポンシブじゃなくなる */}
          <Image
            src={breedData.img}
            alt={breedData.breed}
            layout="responsive"
            width={"800"}
            height={"300"}
            objectFit="contain"
            className="w-full h-auto rounded-2xl -z-10"
          />
        </div>
        <div className="text-container py-4">
          <p>{breedData.origin}</p>
          <p className="mt-2">{breedData.long_description}</p>
          <ul className="mt-4 space-y-2">
            <li>
              <strong>Size:</strong> {breedData.size}
            </li>
            <li>
              <strong>Weight:</strong> {breedData.weight}
            </li>
            <li>
              <strong>Personality:</strong> {breedData.personality}
            </li>
            <li>
              <strong>Life expectancy:</strong> {breedData.life_expectancy}
            </li>
            <li>
              <strong>Fun Fact:</strong> {breedData.fun_fact}
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default BreedDetail;
