import React, { useRef, useState, useEffect } from "react";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import { Link } from "react-scroll";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(useGSAP);

const TYPED_TEXT = "I'm a Software Engineer";

const Home = () => {
  const container = useRef();
  const svgGroupRef = useRef();
  const orbitRef = useRef();
  const laptopRef = useRef();
  const codeRef = useRef();
  const descRef = useRef();

  // Typing animation state
  const [typed, setTyped] = useState("");
  const [showCursor, setShowCursor] = useState(true);
  const [typingDone, setTypingDone] = useState(false);

  // Typing effect
  useEffect(() => {
    if (!typingDone) {
      if (typed.length < TYPED_TEXT.length) {
        const timeout = setTimeout(() => {
          setTyped(TYPED_TEXT.slice(0, typed.length + 1));
        }, 100);
        return () => clearTimeout(timeout);
      } else {
        setTypingDone(true);
      }
    }
  }, [typed, typingDone]);

  // Blinking cursor
  useEffect(() => {
    if (!typingDone) {
      const blink = setInterval(() => setShowCursor((c) => !c), 400);
      return () => clearInterval(blink);
    } else {
      setShowCursor(false);
    }
  }, [typingDone]);

  // Fade in description after typing
  useGSAP(
    () => {
      if (typingDone && descRef.current) {
        gsap.fromTo(
          descRef.current,
          { opacity: 0, y: 20 },
          { opacity: 1, y: 0, duration: 1, ease: "power2.out" }
        );
      }
    },
    { dependencies: [typingDone], scope: container }
  );

  // SVG/GSAP animation (unchanged)
  useGSAP(
    () => {
      gsap.fromTo(
        ".main-svg",
        { y: 60, opacity: 0 },
        { y: 0, opacity: 1, duration: 1.2, ease: "power3.out" }
      );
      gsap.to(".main-svg", {
        y: -10,
        repeat: -1,
        yoyo: true,
        duration: 2,
        ease: "sine.inOut",
        delay: 1.2,
      });
      gsap.to(orbitRef.current, {
        rotate: 360,
        transformOrigin: "150px 150px",
        repeat: -1,
        duration: 8,
        ease: "linear",
      });
      gsap.fromTo(
        laptopRef.current,
        { scale: 0.7, opacity: 0 },
        { scale: 1, opacity: 1, duration: 1, delay: 0.7, ease: "back.out(1.7)" }
      );
      gsap.to(codeRef.current, {
        scale: 1.05,
        repeat: -1,
        yoyo: true,
        duration: 1.5,
        ease: "sine.inOut",
      });
      const handleMouseMove = (e) => {
        if (!svgGroupRef.current) return;
        const rect = container.current
          .querySelector(".main-svg")
          .getBoundingClientRect();
        const x = e.clientX - rect.left - rect.width / 2;
        const y = e.clientY - rect.top - rect.height / 2;
        gsap.to(svgGroupRef.current, {
          x: x * 0.05,
          y: y * 0.05,
          rotateY: x * 0.04,
          rotateX: -y * 0.04,
          duration: 0.5,
          ease: "power2.out",
        });
      };
      const handleMouseLeave = () => {
        if (!svgGroupRef.current) return;
        gsap.to(svgGroupRef.current, {
          x: 0,
          y: 0,
          rotateY: 0,
          rotateX: 0,
          duration: 0.7,
          ease: "power2.out",
        });
      };
      const svgNode = container.current.querySelector(".main-svg");
      if (svgNode) {
        svgNode.addEventListener("mousemove", handleMouseMove);
        svgNode.addEventListener("mouseleave", handleMouseLeave);
      }
      return () => {
        if (svgNode) {
          svgNode.removeEventListener("mousemove", handleMouseMove);
          svgNode.removeEventListener("mouseleave", handleMouseLeave);
        }
      };
    },
    { scope: container }
  );

  const handleCodeMouseEnter = () => {
    if (codeRef.current) {
      gsap.to(codeRef.current, {
        scale: 1.18,
        duration: 0.3,
        ease: "back.out(2)",
      });
    }
  };
  const handleCodeMouseLeave = () => {
    if (codeRef.current) {
      gsap.to(codeRef.current, {
        scale: 1.05,
        duration: 0.4,
        ease: "sine.inOut",
      });
    }
  };

  // Remove all DOM color reads for SVG
  // const accent = ...
  // const bg = ...
  // const laptopBase = ...
  // const laptopScreen = ...
  // const keyboardColor = ...

  return (
    <div
      name="home"
      ref={container}
      className="h-screen w-full pt-20 bg-background-light dark:bg-background-dark text-text-light dark:text-text-dark flex items-center justify-center"
    >
      <div className="max-w-screen-lg mx-auto flex flex-col md:flex-row items-center justify-between h-full px-4 w-full">
        {/* Left: Content */}
        <div className="flex flex-col justify-center h-full md:w-1/2 w-full">
          <h2 className="text-4xl sm:text-7xl font-bold text-accent font-mono min-h-[3.5rem]">
            {typed}
            <span className="inline-block w-2" style={{ color: "#00e6fb" }}>
              {showCursor ? "_" : " "}
            </span>
          </h2>
          <p
            ref={descRef}
            className="text-gray-500 py-4 max-w-xl font-mono opacity-0"
            style={{ visibility: typingDone ? "visible" : "hidden" }}
          >
            I have 2 years of experience building and designing software.
            Currently, I love to work on web application using technologies like
            React, Tailwind, Next JS and GraphQL.
          </p>

          <div>
            <Link
              to="portfolio"
              smooth
              duration={500}
              className="group text-background-dark dark:text-background-light w-fit px-6 py-3 my-2 flex items-center rounded-md bg-accent hover:scale-105 duration-200 font-mono"
            >
              Portfolio
              <span className="group-hover:rotate-90 duration-300">
                <MdOutlineKeyboardArrowRight size={25} className="ml-1" />
              </span>
            </Link>
          </div>
        </div>
        {/* Right: Creative SVG/Animation */}
        <div className="flex items-center justify-center md:w-1/2 w-full mt-10 md:mt-0">
          <svg
            width="300"
            height="300"
            viewBox="0 0 300 300"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="drop-shadow-lg cursor-pointer main-svg"
          >
            <g ref={svgGroupRef}>
              {/* Main circle */}
              <circle
                cx="150"
                cy="150"
                r="130"
                className="fill-background-light dark:fill-background-dark stroke-accent"
                strokeWidth="6"
              />
              {/* Orbiting accent circle */}
              <g ref={orbitRef}>
                <circle
                  cx="260"
                  cy="150"
                  r="14"
                  className="fill-accent"
                  opacity="0.7"
                />
              </g>
              {/* Laptop group */}
              <g ref={laptopRef}>
                {/* Laptop base with shadow */}
                <rect
                  x="100"
                  y="190"
                  width="100"
                  height="22"
                  rx="6"
                  className="fill-[#181d25] dark:fill-[#23263a] stroke-accent"
                  strokeWidth="2"
                  filter="url(#shadow)"
                />
                {/* Keyboard lines */}
                {[...Array(5)].map((_, i) => (
                  <rect
                    key={i}
                    x={110 + i * 16}
                    y="202"
                    width="12"
                    height="2"
                    rx="1"
                    className="fill-[#c7eaff] dark:fill-[#2e3247]"
                  />
                ))}
                {/* Power button */}
                <circle cx="195" cy="200" r="2.5" className="fill-accent" />
                {/* Laptop screen border */}
                <rect
                  x="110"
                  y="140"
                  width="80"
                  height="45"
                  rx="7"
                  className="fill-[#eafaff] dark:fill-[#1a1e2d] stroke-accent"
                  strokeWidth="2"
                />
                {/* Code window */}
                <g
                  ref={codeRef}
                  onMouseEnter={handleCodeMouseEnter}
                  onMouseLeave={handleCodeMouseLeave}
                  style={{ cursor: "pointer" }}
                >
                  <rect
                    x="120"
                    y="155"
                    width="60"
                    height="25"
                    rx="4"
                    className="fill-accent"
                    opacity="0.18"
                  />
                  <text
                    x="150"
                    y="172"
                    textAnchor="middle"
                    className="fill-accent"
                    fontSize="16"
                    fontFamily="Fira Mono, monospace"
                    fontWeight="bold"
                  >
                    {"<Ziad/>"}
                  </text>
                </g>
              </g>
              {/* Floating accent dots */}
              <circle
                cx="80"
                cy="80"
                r="10"
                className="fill-accent"
                opacity="0.5"
              />
              <circle
                cx="220"
                cy="230"
                r="7"
                className="fill-accent"
                opacity="0.3"
              />
              <circle
                cx="60"
                cy="230"
                r="5"
                className="fill-accent"
                opacity="0.4"
              />
              {/* SVG shadow filter */}
              <defs>
                <filter id="shadow" x="0" y="0" width="300%" height="300%">
                  <feDropShadow
                    dx="0"
                    dy="2"
                    stdDeviation="2"
                    floodColor="#000"
                    floodOpacity="0.15"
                  />
                </filter>
              </defs>
            </g>
          </svg>
        </div>
      </div>
    </div>
  );
};

export default Home;
