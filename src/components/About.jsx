import React from "react";

const About = () => {
  return (
    <div
      name="about"
      className="w-full h-screen bg-background-light dark:bg-background-dark text-text-light dark:text-text-dark flex items-center justify-center"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-accent text-accent font-mono">
            About
          </p>
        </div>
        <div className="bg-card-light dark:bg-card-dark rounded-lg shadow border border-accent p-8">
          <p className="text-xl mt-4 font-mono">
            Expirenced software engineer with a passion for developing
            innovative applications that expedite the efficiency and
            effectiveness of organizational success.Well-versed in technology
            and writting code to create applications that are reliable and
            user-friendly.
          </p>
          <br />
          <p className="text-xl font-mono">
            Confidenet communicator, strategic thinker, and innovative creator
            to develop software that is customized to meet a company's
            organizational needs, highlight its core competencies, and further
            its success.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
