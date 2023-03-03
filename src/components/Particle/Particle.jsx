import { useCallback } from 'react';
import Particles from 'react-tsparticles';
import { loadFull } from 'tsparticles';

import { ParticlesConfig } from './config';

export const ParticleConfetti = () => {
  const particlesInit = useCallback(async engine => {
    await loadFull(engine);
  }, []);

  return <Particles options={ParticlesConfig} init={particlesInit} />;
};
