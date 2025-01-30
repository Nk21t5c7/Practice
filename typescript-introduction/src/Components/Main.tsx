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
  ];

  const imgUrl = '../public/img/img1.jpg';
  return (
    <main>
      <h2>{subtitle}</h2>
      <Card skillList={skillList} imgUrl = {imgUrl} />
    </main>
  );
};

export default Main;
