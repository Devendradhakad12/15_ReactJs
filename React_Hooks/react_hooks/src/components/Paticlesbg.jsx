import React,{useCallback} from 'react'
import particlesconfig from './config/particlesconfig';
import Particles from 'react-tsparticles';
import { loadSlim } from 'tsparticles-slim';
 
function Paticlesbg() {
    const particlesInit = useCallback(async engine => {
      //  console.log(engine);
        // you can initiate the tsParticles instance (engine) here, adding custom shapes or presets
        // this loads the tsparticles package bundle, it's the easiest method for getting everything ready
        // starting from v2 you can add only the features you need reducing the bundle size
        //await loadFull(engine);
        await loadSlim(engine);
    }, []);

    const particlesLoaded = useCallback(async container => {
       // await console.log(container);
    }, []);
  return (
    <Particles id="tsparticles" options={particlesconfig} init={particlesInit} loaded={particlesLoaded} />
      
  
  )
}

export default Paticlesbg
