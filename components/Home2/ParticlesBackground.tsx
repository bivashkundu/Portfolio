import { loadAll } from "@tsparticles/all";
import type { Engine } from "@tsparticles/engine";
import { initParticlesEngine, Particles } from "@tsparticles/react";
import React, { useEffect, useState } from "react";

const ParticlesBackground: React.FC = () => {
  const [engineInitialized, setEngineInitialized] = useState(false);

  useEffect(() => {
    initParticlesEngine(async (engine: Engine) => {
      await loadAll(engine);
      setEngineInitialized(true);
    });
  }, []);

  if (!engineInitialized) return null;

  return (
    <Particles
      id="tsparticles"
      options={{
        particles: {
          number: {
            value: 60
          },
          size: {
            value: 2
          },
          move: {
            enable: true,
            speed: 2
          },
          links: {
            enable: true,
            color: "#41b362",
            distance: 250
          }
        },
        interactivity: {
          events: {
            onHover: {
              enable: true,
              mode: "repulse"
            }
          }
        }
      }}
    />
  );
};

export default ParticlesBackground;
