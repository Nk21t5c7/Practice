import React from "react";
import Card from "./Card";

interface MainProps {
  subtitle: string;
}

const Main: React.FC<MainProps> = ({ subtitle }) => {
  const skillList = [
    {
      name: "HTML",
    },
    {
      name: "CSS",
    },
    {
      name: "JavaScript",
    },
    {
      name: "React",
    },
    {
      name: "Java",
    },
    {
      name: "MySQL",
    },
    {
      name: "TypeScript",
    },
    {
      name: "R",
    },
    {
      name: "Matlab",
    },
  ];

  const imgUrl = 'https://picsum.photos/300/300';
  return (
    <main className="border p-3 max-w-[900px] m-auto">
      <h2 className="text-4xl">{subtitle}</h2>
      <Card skillList ={skillList} imgUrl = {imgUrl} alt = {subtitle} />
    </main>
  );
};

export default Main;
