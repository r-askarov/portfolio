import { useState } from "react";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

const projects = [
  {
    title: "iOS Interactive Map App",
    description:
      "An interactive map app for iOS, including some of the world's most popular monuments, showcasing my skills in SwiftUI and the MVVM development architecture.",
    link: "https://github.com/r-askarov/ios-map-app",
    icons: [
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/swift/swift-original.svg",
    ],
  },
  {
    title: "3D Drone Delivery Simulator",
    description:
      "My university capstone project simulating 3D drone deliveries around the UMN campus.",
    link: "https://github.com/r-askarov/capstone-project",
    icons: [
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cplusplus/cplusplus-original.svg",
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg",
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg",
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
    ],
  },
  {
    title: "Wordle Clone",
    description:
      "A React-based clone of the popular online game Wordle with feedback logic and keyboard input.",
    link: "https://github.com/r-askarov/wordle-clone",
    icons: [
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg"
    ],
  },
  {
    title: "Portfolio Site",
    description: "This website, showcasing my resume, projects and more - serving as a dynamic portfolio that reflects my skills, experience, and passion for software development.",
    link: "https://github.com/r-askarov/portfolio",
    icons: [
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
      "https://www.svgrepo.com/show/374118/tailwind.svg",
    ],
  },
];

const ProjectCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const goPrev = () => {
    setCurrentIndex((prev) => (prev === 0 ? projects.length - 1 : prev - 1));
  };

  const goNext = () => {
    setCurrentIndex((prev) => (prev === projects.length - 1 ? 0 : prev + 1));
  };

  return (
    <div className="relative flex flex-row items-center space-x-8 w-full px-4">
      {/* Left Arrow */}
      <button onClick={goPrev} aria-label="Previous project">
        <FaArrowLeft className="text-2xl text-lightBg hover:text-lightBg/50 dark:text-gray-300 dark:hover:text-white/50" />
      </button>

      {/* Project Card */}
      <ProjectCard project={projects[currentIndex]} />

      {/* Right Arrow */}
      <button onClick={goNext} aria-label="Next project">
        <FaArrowRight className="text-2xl text-lightBg dark:text-gray-300 dark:hover:text-white/50 hover:text-lightBg/50" />
      </button>

    </div>
  );
};

export default ProjectCarousel;

const ProjectCard = ({ project }) => (
  <div id="project-card" className="w-full max-w-lg min-h-[240px] bg-lightBg dark:bg-blue-950 p-6 rounded-xl shadow-md text-left mt-10">
    <h2 className="text-xl text-white font-bold mb-2">{project.title}</h2>
    <p className="text-white mb-2">{project.description}</p>
    <div className="flex space-x-3 mt-4 mb-2">
      {project.icons.map((icon, idx) => (
        <img
          key={idx}
          src={icon}
          alt="tech-icon"
          className="w-7 h-7 rounded p-1"
        />
      ))}
    </div>
    <a
      href={project.link}
      target="_blank"
      rel="noopener noreferrer"
      className="text-white font-semibold hover:underline"
    >
      View on GitHub
    </a>
  </div>
);
