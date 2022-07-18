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
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem, fugiat
          modi, autem obcaecati quisquam distinctio, aliquam impedit blanditiis
          eveniet debitis quae dolores officiis vitae quasi suscipit nulla in
          reiciendis quaerat praesentium. Alias repellendus facere voluptatem
          aspernatur sunt. Non quisquam laboriosam recusandae eum, suscipit
          culpa exercitationem minima? Et quaerat repudiandae odio.
        </p>
        <br />
        <p className="text-xl ">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem, fugiat
          modi, autem obcaecati quisquam distinctio, aliquam impedit blanditiis
          eveniet debitis quae dolores officiis vitae quasi suscipit nulla in
          reiciendis quaerat praesentium. Alias repellendus facere voluptatem
          aspernatur sunt. Non quisquam laboriosam recusandae eum, suscipit
          culpa exercitationem minima? Et quaerat repudiandae odio.
        </p>
      </div>
    </div>
  );
};

export default About;
