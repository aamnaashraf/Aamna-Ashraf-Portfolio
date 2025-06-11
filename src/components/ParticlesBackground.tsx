'use client';
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";

export default function ParticlesBackground() {
  const particlesInit = async (engine: any) => {
    // this should load all tsparticles features
    await loadFull(engine);
  };

  return (
    <Particles
      id="tsparticles"
      init={particlesInit}
      className="fixed top-0 left-0 w-full h-full -z-10"
      options={{
        fullScreen: { enable: false },
        background: { color: "#000" },
        particles: {
          number: { value: 250 },
          color: { value: "#ffffff" },
          size: { value: 2 },
          opacity: { value: 0.5 },
          move: { enable: true, speed: 0.7},
        },
      }}
    />
  );
}
