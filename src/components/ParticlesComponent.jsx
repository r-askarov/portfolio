import Particles, { initParticlesEngine } from "@tsparticles/react";
import { useEffect, useMemo } from "react";
import { loadSlim } from "@tsparticles/slim";
import { useDarkMode } from "../App";

const ParticlesComponent = () => {

  const { darkMode } = useDarkMode();

  useEffect(() => {
    initParticlesEngine(async (engine) => {
      await loadSlim(engine);
    }).then(() => {});
  }, []);

  const particlesLoaded = (container) => {
    console.log(container);
  };

  const computedColor = darkMode ? "#FFFFFF" : "#9D174D";

  const options = useMemo(
    () => ({
      background: {
        color: undefined,
      },
      fpsLimit: 120,
      interactivity: {
        events: {
          onClick: {
            enable: true,
            mode: "repulse",
          },
          onHover: {
            enable: true,
            mode: "grab",
          },
        },
        modes: {
          push: {
            distance: 300,
            duration: 10,
          },
          grab: {
            distance: 150,
          },
        },
      },
      particles: {
        color: {
          value: computedColor,
        },
        links: {
          color: computedColor,
          distance: 150,
          enable: true,
          opacity: 0.2,
          width: 1,
        },
        move: {
          direction: "none",
          enable: true,
          outModes: {
            default: "bounce",
          },
          random: true,
          speed: 4,
          straight: false,
        },
        number: {
          density: {
            enable: true,
          },
          value: 600,
        },
        opacity: {
          value: 0.25,
        },
        shape: {
          type: "diamond",
        },
        size: {
          value: { min: 1, max: 5 },
        },
      },
      detectRetina: true,
    }),
    [computedColor]
  );

  return (
    <Particles
      init={particlesLoaded}
      options={options}
      className="absolute inset-0 -z-10 w-full h-full"
    />
  );
};

export default ParticlesComponent;
