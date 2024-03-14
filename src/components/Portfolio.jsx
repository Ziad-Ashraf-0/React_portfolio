import React from "react";
import ProjectCard from "./ProjectCard";
import photo from "../assets/portfolio/photo.jpg";
import drive from "../assets/portfolio/drive.jpg";
import rosa from "../assets/portfolio/the-rosa.jpg";

import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/free-mode";

import { FreeMode, Pagination } from "swiper/modules";

const Portfolio = () => {
  const projects = [
    {
      name: "Car Rent",
      description:
        "A Modern Next.js 13 Application | React, Next JS 13, TypeScript, Tailwind CSS",
      tags: [
        {
          name: "nextjs",
          color: "text-white",
        },
        {
          name: "typescript",
          color: "text-blue-500",
        },
        {
          name: "tailwind",
          color: "text-sky-400",
        },
      ],
      image: drive,
      source_code_link: "https://github.com/Ziad-Ashraf-0/car-showcase",
      live_link: "https://car-showcase-p15y.vercel.app/",
    },
    {
      name: "Rosa",
      description: "Web application for a resturant to showcase its work.",
      tags: [
        {
          name: "html",
          color: "text-orange-500",
        },
        {
          name: "css",
          color: "text-blue-500",
        },
        {
          name: "css-animations",
          color: "text-pink-400",
        },
      ],
      image: rosa,
      source_code_link: "https://github.com/Ziad-Ashraf-0/the-rosa",
      live_link: "https://the-rosa-psi.vercel.app/",
    },
    {
      name: "Photo",
      description:
        "A project for photographers to show their best shots taken.",
      tags: [
        {
          name: "nextjs",
          color: "text-white",
        },
        {
          name: "tailwind",
          color: "text-sky-400",
        },
      ],
      image: photo,
      source_code_link: "https://github.com/Ziad-Ashraf-0/next-photo-app",
      live_link: "https://next-photo-app-weld.vercel.app/",
    },
    {
      name: "Photo",
      description:
        "A project for photographers to show their best shots taken.",
      tags: [
        {
          name: "nextjs",
          color: "text-white",
        },
        {
          name: "tailwind",
          color: "text-sky-400",
        },
      ],
      image: photo,
      source_code_link: "https://github.com/Ziad-Ashraf-0/next-photo-app",
      live_link: "https://next-photo-app-weld.vercel.app/",
    },
  ];

  return (
    <div
      name="portfolio"
      className="bg-gradient-to-b from-black to-gray-800 w-full h-full text-white md:h-screen pt-40 "
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8 ">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            Portfolio
          </p>
          <p className="py-6">Check out some of my work right here</p>
        </div>

        {/* <div className="flex gap-8 px-12 sm:px-0">
          {projects.map((project, index) => (
            <ProjectCard key={`project-${index}`} index={index} {...project} />
          ))}
        </div> */}

        <div className="flex items-center justify-center flex-col h-[900px]">
          <Swiper
            breakpoints={{
              500: {
                slidesPerView: 1,
                spaceBetween: 15,
              },
              700: {
                slidesPerView: 2,
                spaceBetween: 15,
              },
              1200: {
                slidesPerView: 3,
                spaceBetween: 15,
              },
            }}
            freeMode={true}
            pagination={{
              clickable: true,
            }}
            modules={[FreeMode, Pagination]}
            className="max-w-[80%] lg:max-w-[100%]"
          >
            {projects.map((project, index) => (
              <SwiperSlide key={project.name}>
                <ProjectCard
                  key={`project-${index}`}
                  index={index}
                  {...project}
                />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
