import React from "react";

const About = () => {
  return (
    <div
      name="about"
      className="w-full h-screen bg-gradient-to-b from-gray-800 to-black text-white "
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            About
          </p>
        </div>
        <p className="text-xl mt-20">
          Expirenced software engineer with a passion for developing innovative
          applications that expedite the efficiency and effectiveness of
          organizational success.Well-versed in technology and writting code to
          create applications that are reliable and user-friendly.
        </p>
        <br />
        <p className="text-xl ">
          Confidenet communicator, strategic thinker, and innovative creator to
          develop software that is customized to meet a company's organizational
          needs, highlight its core competencies, and further its success.
        </p>
      </div>
    </div>
  );
};

export default About;
