import React from "react";
import github from "../assets/github.png";
import live from "../assets/live.png";

const ProjectCard = ({
  index,
  name,
  description,
  tags,
  image,
  source_code_link,
  live_link,
}) => {
  return (
    <div className="flex flex-col shadow border border-accent bg-card-light dark:bg-card-dark rounded-lg mb-14 mx-1 transition-colors duration-300">
      <div className="w-full h-[200px]">
        <img
          src={image}
          alt="project_image"
          className="w-full h-full object-cover rounded-t-lg"
        />
      </div>

      <div className="p-5">
        <div className="flow-root">
          <h3 className="text-accent font-bold text-[24px] float-left font-mono">
            {name}
          </h3>
          <div className="flex float-right">
            <div
              onClick={() => window.open(live_link, "_blank")}
              className="bg-background-light dark:bg-background-dark w-10 h-10 rounded-full flex justify-center items-center cursor-pointer border border-accent"
            >
              <img
                src={live}
                alt="live link"
                className="object-contain hover:scale-110"
              />
            </div>
            <div
              onClick={() => window.open(source_code_link, "_blank")}
              className="bg-background-light dark:bg-background-dark w-10 h-10 rounded-full flex justify-center items-center cursor-pointer border border-accent ml-2"
            >
              <img
                src={github}
                alt="source code"
                className="w-1/2 h-1/2 object-contain hover:scale-110"
              />
            </div>
          </div>
          <div></div>
        </div>
        <p className="mt-2 text-text-light dark:text-text-dark text-[14px] font-mono">
          {description}
        </p>
      </div>

      <div className="mt-auto m-4 flex flex-wrap gap-2">
        {tags.map((tag) => (
          <p
            key={`${name}-${tag.name}`}
            className={`text-[14px] font-mono ${tag.color}`}
          >
            #{tag.name}
          </p>
        ))}
      </div>
    </div>
  );
};

export default ProjectCard;
