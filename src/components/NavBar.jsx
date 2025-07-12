import React, { useState, useRef } from "react";
import { FaBars, FaTimes, FaSun, FaMoon } from "react-icons/fa";
import { Link } from "react-scroll";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

gsap.registerPlugin(useGSAP);

const NavBar = () => {
  const [nav, setNav] = useState(false);
  const [darkMode, setDarkMode] = useState(() => {
    if (typeof window !== "undefined") {
      return localStorage.getItem("theme") === "light" ? false : true;
    }
    return true;
  });
  const barRef = useRef();
  const toggleRef = useRef();

  React.useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [darkMode]);

  // Close mobile menu on resize to desktop
  React.useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setNav(false);
      }
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Animate NavBar on scroll: shrink, add shadow, round corners
  useGSAP(() => {
    if (barRef.current) {
      gsap.set(barRef.current, {
        height: "5rem",
        boxShadow: "0 4px 24px 0 rgba(0,0,0,0.10)",
        borderRadius: "0 0 2rem 2rem",
      });
    }
    const handleScroll = () => {
      if (window.scrollY > 40 && barRef.current) {
        gsap.to(barRef.current, {
          height: "3.5rem",
          boxShadow: "0 8px 32px 0 rgba(0,0,0,0.18)",
          borderRadius: "0 0 1.2rem 1.2rem",
          duration: 0.5,
          ease: "power3.out",
        });
      } else if (barRef.current) {
        gsap.to(barRef.current, {
          height: "5rem",
          boxShadow: "0 4px 24px 0 rgba(0,0,0,0.10)",
          borderRadius: "0 0 2rem 2rem",
          // backgroundColor: "", // Remove this
          duration: 0.5,
          ease: "power3.inOut",
        });
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const links = [
    { id: 1, link: "home" },
    { id: 2, link: "about" },
    { id: 3, link: "portfolio" },
    { id: 4, link: "experience" },
    { id: 5, link: "contact" },
  ];

  // Custom theme toggle switch
  const handleToggle = () => setDarkMode((prev) => !prev);

  return (
    <>
      {/* Desktop & Mobile Top Bar */}
      <div
        ref={barRef}
        className="flex fixed top-0 z-50 h-20 bg-background-light dark:bg-background-dark text-text-light dark:text-text-dark shadow-lg px-4 md:px-8 py-4 rounded-b-2xl items-center transition-colors duration-300 w-full max-w-none md:left-1/2 md:-translate-x-1/2 lg:w-[65vw] lg:max-w-4xl justify-between"
        style={{ opacity: 1 }}
      >
        {/* Logo/Profile */}
        <div className="flex items-center flex-shrink-0">
          <h1 className="text-3xl font-signature text-accent font-mono">
            Ziad
          </h1>
        </div>
        {/* Nav Links (hidden on mobile) */}
        <nav className="flex-1 justify-center hidden md:flex">
          <ul className="flex gap-8">
            {links.map(({ id, link }) => (
              <li
                key={id}
                className="cursor-pointer capitalize font-bold text-lg text-text-light dark:text-text-dark hover:text-accent font-mono transition-colors duration-200"
              >
                <Link
                  to={link}
                  smooth
                  duration={500}
                  spy
                  offset={-70}
                  activeClass="text-accent"
                >
                  {link}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
        {/* Theme Toggle Switch (center on mobile, right on desktop) */}
        <div className="hidden md:flex items-center flex-shrink-0 mx-2 md:mx-4 md:ml-auto">
          <button
            ref={toggleRef}
            aria-label="Toggle dark mode"
            onClick={handleToggle}
            className="relative w-16 h-8 flex items-center bg-background-dark dark:bg-background-light border-2 border-accent rounded-full px-1 transition-colors duration-300 focus:outline-none"
          >
            <span className="absolute left-2 text-accent text-lg">
              <FaSun />
            </span>
            <span className="absolute right-2 text-accent text-lg">
              <FaMoon />
            </span>
            <span
              className={`absolute top-1/2 left-0 -translate-y-1/2 w-6 h-6 rounded-full bg-accent shadow-md transition-transform duration-300 ${
                darkMode ? "translate-x-8" : "translate-x-0.5"
              }`}
            ></span>
          </button>
        </div>
        {/* Hamburger menu (mobile only) */}
        <div
          onClick={() => setNav(!nav)}
          className="cursor-pointer z-10 text-accent flex md:hidden ml-2 flex-shrink-0"
        >
          {nav ? <FaTimes size={30} /> : <FaBars size={30} />}
        </div>
      </div>

      {/* Mobile Nav Overlay */}
      {nav && (
        <ul className="flex flex-col justify-center items-center fixed top-0 left-0 w-full h-screen bg-background-light dark:bg-background-dark text-text-light dark:text-text-dark z-40">
          {links.map(({ id, link }) => (
            <li
              key={id}
              className="px-4 cursor-pointer capitalize py-6 text-4xl font-mono hover:text-accent"
            >
              <Link
                onClick={() => setNav(false)}
                to={link}
                smooth
                duration={500}
              >
                {link}
              </Link>
            </li>
          ))}
          <li className="mt-8">
            <button
              aria-label="Toggle dark mode"
              onClick={handleToggle}
              className="relative w-16 h-8 flex items-center bg-background-dark dark:bg-background-light border-2 border-accent rounded-full px-1 transition-colors duration-300 focus:outline-none"
            >
              <span className="absolute left-2 text-accent text-lg">
                <FaSun />
              </span>
              <span className="absolute right-2 text-accent text-lg">
                <FaMoon />
              </span>
              <span
                className={`absolute top-1/2 left-0 -translate-y-1/2 w-6 h-6 rounded-full bg-accent shadow-md transition-transform duration-300 ${
                  darkMode ? "translate-x-8" : "translate-x-0.5"
                }`}
              ></span>
            </button>
          </li>
        </ul>
      )}
    </>
  );
};

export default NavBar;
