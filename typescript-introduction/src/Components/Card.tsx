import React from "react";

interface Skill {
  name: string;
}

interface CardProps {
  skillList: Skill[];
  imgUrl: string;
  alt: string;
}

const Card: React.FC<CardProps> = ({ skillList, imgUrl, alt }) => {
  return (
    <div>
      <img src={imgUrl} alt={alt} />
      <h3>Skills</h3>

      {skillList.length > 0 ? (
        <ul>
          {skillList.map((skill) => {
            return <li key={skill.name}>{skill.name}</li>;
          })}
        </ul>
      ) : (
        <p>No skill.</p>
      )}
    </div>
  );
};

export default Card;
