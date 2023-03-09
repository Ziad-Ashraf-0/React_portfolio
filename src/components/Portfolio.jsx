import React from "react";
import clock from "../assets/portfolio/clock.jpg";

import space from "../assets/portfolio/space.jpg";
import weather from "../assets/portfolio/weather.jpg";
import photo from "../assets/portfolio/photo.jpg";
import drive from "../assets/portfolio/drive.jpg";
import rosa from "../assets/portfolio/the-rosa.jpg";

const Portfolio = () => {
  const portfolios = [
    {
      id: 1,
      src: clock,
      demo: "https://elegant-dasik-5688ee.netlify.app/",
      code: "https://github.com/Ziad-Ashraf-0/DigitalClock-Vanilla-JS",
    },
    {
      id: 2,
      src: weather,
      demo: "http://ziadashraf.me/weather-app/",
      code: "https://github.com/Ziad-Ashraf-0/weather-app",
    },
    {
      id: 3,
      src: space,
      demo: "https://splendorous-florentine-46dec3.netlify.app/",
      code: "https://github.com/Ziad-Ashraf-0/Space-Trvl-project",
    },
    {
      id: 4,
      src: drive,
      demo: "https://cheery-concha-6c1784.netlify.app/",
      code: "https://github.com/Ziad-Ashraf-0/drive-react",
    },
    {
      id: 5,
      src: photo,
      demo: "https://next-photo-app-weld.vercel.app/",
      code: "https://github.com/Ziad-Ashraf-0/next-photo-app",
    },
    {
      id: 6,
      src: rosa,
      demo: "https://the-rosa-psi.vercel.app/",
      code: "https://github.com/Ziad-Ashraf-0/the-rosa",
    },
  ];

  return (
    <div
      name="portfolio"
      className="bg-gradient-to-b from-black to-gray-800 w-full h-full text-white md:h-screen pt-40 "
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            Portfolio
          </p>
          <p className="py-6">Check out some of my work right here</p>
        </div>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0">
          {portfolios.map(({ id, src, demo, code }) => (
            <div key={id} className="shadow-md shadow-gray-600 rounded-lg">
              <img
                src={src}
                alt=""
                className="rounded-md duration-200 hover:scale-105 h-2/3 w-full"
              />
              <div className="flex items-center justify-center">
                <a
                  href={demo}
                  className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105 text-center"
                  target="_blank"
                  rel="noreferrer"
                >
                  Demo
                </a>
                <a
                  href={code}
                  className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105 text-center"
                  target="_blank"
                  rel="noreferrer"
                >
                  Code
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
