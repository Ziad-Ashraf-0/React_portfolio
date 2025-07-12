import React from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import { BsFillPersonLinesFill } from "react-icons/bs";

const SocialLinks = ({ inline = false }) => {
  const links = [
    {
      id: 1,
      child: (
        <>
          LinkedIn <FaLinkedin size={30} />
        </>
      ),
      icon: <FaLinkedin size={22} />,
      href: "https://www.linkedin.com/in/ziad-ashraf-259064177/",
      style: "rounded-tr-md",
    },
    {
      id: 2,
      child: (
        <>
          GitHub <FaGithub size={30} />
        </>
      ),
      icon: <FaGithub size={22} />,
      href: "https://github.com/Ziad-Ashraf-0",
    },
    {
      id: 3,
      child: (
        <>
          Mail <HiOutlineMail size={30} />
        </>
      ),
      icon: <HiOutlineMail size={22} />,
      href: "mailto:zashraf011@gmail.com",
    },
    {
      id: 4,
      child: (
        <>
          Resume <BsFillPersonLinesFill size={30} />
        </>
      ),
      icon: <BsFillPersonLinesFill size={22} />,
      href: "https://drive.google.com/file/d/1GdA-BOh7CMClUAbQTj2r73SZp9FWU8TI/view?usp=sharing",
      style: "rounded-br-md",
      download: true,
    },
  ];

  if (inline) {
    return (
      <ul className="flex gap-3 items-center">
        {links.map(({ id, href, icon, download }) => (
          <li key={id}>
            <a
              href={href}
              className="text-accent hover:scale-110 duration-200"
              download={download}
              target="_blank"
              rel="noreferrer"
              aria-label="Social link"
            >
              {icon}
            </a>
          </li>
        ))}
      </ul>
    );
  }

  return (
    <div className="hidden lg:flex flex-col top-[35%] left-0 fixed z-50">
      <ul>
        {links.map(({ id, child, href, style, download }) => (
          <li
            key={id}
            className={`flex justify-between items-center w-40 h-14 px-4 ml-[-100px] hover:ml-[-10px] hover:rounded-md duration-300 bg-card-light dark:bg-card-dark border-l-4 border-accent ${style}`}
          >
            <a
              href={href}
              className="flex justify-between items-center w-full text-accent font-mono"
              download={download}
              target="_blank"
              rel="noreferrer"
            >
              {child}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SocialLinks;
