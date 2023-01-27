import * as THREE from "three";
import React, { useState, useEffect } from "react";
// import { useLoader } from "@react-three-fiber";
import { Canvas, useFrame, useLoader } from "@react-three/fiber";

import { useSphere } from "@react-three/cannon";
//https://codesandbox.io/s/github/onion2k/r3f-by-example/tree/develop/examples/physics/three-balls-physics-usecannon?file=/src/ball.js

const Ball = ({ position, color, scale }) => {
    const [ballRef, physicsApi] = useSphere(() => ({ mass: 1, position: position, type: 'Dynamic' }));

    const bw = useLoader(THREE.TextureLoader, "/bw.png");
    bw.wrapS = THREE.RepeatWrapping;
    bw.wrapT = THREE.RepeatWrapping;
    bw.repeat.set(3, 3);

    useEffect(() => {
        return physicsApi.position.subscribe((v) => {
            // console.log("pkp:  ~ file: Ball.js:19 ~ returnphysicsApi.position.subscribe ~ v", v)
            var ssss = ballRef.current.position.fromArray(v);
            console.log("pkp:  ~ file: Ball.js:21 ~ returnphysicsApi.position.subscribe ~ ssss", ssss)
        });
    }, [physicsApi, ballRef]);


    // physicsApi.velocity.subscribe(onVelocityChange)
    // console.log("pkp:  ~ file: Ball.js:17 ~ Ball ~ api", physicsApi)

    useFrame((state, delta, xrFrame) => {
        // console.log("pkp:  ~ file: Ball.js:21 ~ useFrame ~ xrFrame", xrFrame)
        // console.log("pkp:  ~ file: Ball.js:21 ~ useFrame ~ delta", delta)
        // console.log("ss::: ", ballRef.current.position)
        // This function runs at the native refresh rate inside of a shared render-loop

        // ref.current.rotation.x += 0.01
        // // ref.current.position.y
        // api.position
        // console.log("pkp:  ~ file: Marble.js:24 ~ useFrame ~ api.position", api.position)
        // console.log("pkp:  ~ file: Marble.js:70 ~ Marble ~ ref.current.position.y", ref.current.position)

    })


    //Event Listeners
    //////////////////////////////
    const onCollide = () => {
        collided.current = true
    }

    const onPositionChange = (p) => {
        const [, y] = p;
        planeYPos.current = y;
    }

    const onVelocityChange = (v) => {
        console.log("pkp:  ~ file: Ball.js:31 ~ onVelocityChange ~ v", v)
        const [, y] = v;
        planeVel.current = y;
    }

    const onClick = () => {
        if (planeYPos.current < SKY_LIMIT)
            clicked.current = true;
    }


    return (
        <mesh ref={ballRef} position={position} scale={scale} receiveShadow castShadow>
            <sphereGeometry args={[1, 136, 136]} />
            <meshPhysicalMaterial
                color={color}
                map={bw}
                roughness={0.8}
                metalness={0.2}
                clearcoat={1}
                clearcoatRoughness={0.35}
            />
        </mesh>
    );
};

export default Ball;
