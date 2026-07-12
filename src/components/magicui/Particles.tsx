import { useCallback } from "react";
import Particles from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim";
import type { Engine } from "@tsparticles/engine";

interface ParticlesBgProps {
  className?: string;
  quantity?: number;
}

export function ParticlesBg({ className = "", quantity = 80 }: ParticlesBgProps) {
  const particlesInit = useCallback(async (engine: Engine) => {
    await loadSlim(engine);
  }, []);

  return (
    <Particles
      id="tsparticles"
      className={`absolute inset-0 ${className}`}
      init={particlesInit}
      options={{
        fullScreen: { enable: false },
        background: { color: { value: "transparent" } },
        fpsLimit: 60,
        particles: {
          number: { value: quantity, density: { enable: true, area: 900 } },
          color: { value: ["#8b5cf6", "#06b6d4", "#a78bfa", "#38bdf8"] },
          shape: { type: "circle" },
          opacity: {
            value: { min: 0.1, max: 0.5 },
            animation: { enable: true, speed: 0.5, sync: false },
          },
          size: {
            value: { min: 0.5, max: 2.5 },
            animation: { enable: true, speed: 1.5, sync: false },
          },
          links: {
            enable: true,
            color: "#8b5cf6",
            opacity: 0.08,
            distance: 130,
            width: 0.8,
          },
          move: {
            enable: true,
            speed: 0.4,
            direction: "none",
            random: true,
            straight: false,
            outModes: { default: "out" },
          },
        },
        interactivity: {
          events: {
            onHover: { enable: true, mode: "grab" },
            onClick: { enable: true, mode: "push" },
          },
          modes: {
            grab: { distance: 160, links: { opacity: 0.25, color: "#8b5cf6" } },
            push: { quantity: 2 },
          },
        },
        detectRetina: true,
      }}
    />
  );
}
