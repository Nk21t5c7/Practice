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
    <div className="md:flex">
      <img
        src={imgUrl}
        alt={alt}
        className="rounded-full m-auto max-w-100% h-auto"
      />
      <div className="md:content-center">
        <h3 className="text-3xl md:basis-full md:my-4">Skills</h3>

        {skillList.length > 0 ? (
          <ul className="flex flex-wrap basis-lg md:basis-full md:items-center md:justify-center">
            {skillList.map((skill) => {
              return (
                <li
                  className=" bg-blue-900 text-white m-1 px-10 py-2 rounded-2xl "
                  key={skill.name}
                >
                  {skill.name}
                </li>
              );
            })}
          </ul>
        ) : (
          <p>No skill.</p>
        )}
      </div>
    </div>
  );
};

export default Card;
