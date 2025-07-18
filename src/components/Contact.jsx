import React from "react";

const Contact = () => {
  return (
    <div
      name="contact"
      className="w-full h-full bg-background-light dark:bg-background-dark p-4 text-text-light dark:text-text-dark pt-20"
    >
      <div className="flex flex-col p-4 justify-center max-w-screen-lg mx-auto h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-accent text-accent font-mono">
            Contact
          </p>
          <p className="py-6 font-mono">
            Submit the form below to get in touch with me
          </p>
        </div>

        <div className="flex justify-center items-center">
          <form
            action="https://getform.io/f/68a201aa-348f-49ce-8297-d468f256cb74"
            method="POST"
            className="flex flex-col w-full md:w-1/2 bg-card-light dark:bg-card-dark rounded-lg shadow border border-accent p-8"
          >
            <input
              type="text"
              name="name"
              placeholder="Enter your name"
              className="p-2 bg-background-light dark:bg-background-dark border-2 rounded-md text-text-light dark:text-text-dark focus:outline-accent font-mono mb-2"
            />
            <input
              type="text"
              name="email"
              placeholder="Enter your email"
              className="my-4 p-2 bg-background-light dark:bg-background-dark border-2 rounded-md text-text-light dark:text-text-dark focus:outline-accent font-mono mb-2"
            />
            <textarea
              name="message"
              placeholder="Enter your message"
              rows="10"
              className="p-2 bg-background-light dark:bg-background-dark border-2 rounded-md text-text-light dark:text-text-dark focus:outline-accent font-mono mb-2"
            ></textarea>

            <button className="text-background-dark dark:text-background-light bg-accent px-6 py-3 my-8 mx-auto flex items-center rounded-md hover:scale-110 duration-300 font-mono border border-accent">
              Let's talk
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
