import React from 'react';
import { useCallback } from "react";
import Particles from "react-tsparticles";
//import { loadFull } from "tsparticles"; // if you are going to use `loadFull`, install the "tsparticles" package too.
import { loadSlim } from "tsparticles-slim"; // if you are going to use `loadSlim`, install the "tsparticles-slim" package too.
import HalloweenDoor from '../Photos/halloweenDoor.png';

const BackgroundParticles = ({ particles }) => {

    const particlesInit = useCallback(async engine => {
        console.log(engine);
        // you can initiate the tsParticles instance (engine) here, adding custom shapes or presets
        // this loads the tsparticles package bundle, it's the easiest method for getting everything ready
        // starting from v2 you can add only the features you need reducing the bundle size
        //await loadFull(engine);
        await loadSlim(engine);
    }, []);

    const particlesLoaded = useCallback(async container => {
        console.log(container);
    }, []);

    return (
        <div>
            {/* SNOW */}
            <Particles
            id="tsparticles"
            init={particlesInit}
            loaded={particlesLoaded}
            options={particles}
        />
        </div>
    )
}

export default BackgroundParticles

