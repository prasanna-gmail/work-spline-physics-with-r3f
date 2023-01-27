import { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";

import Scene from "./Scene";
// import Marble from "./Marble";
import Ball from "./Ball";
import Plane from "./Plane";
import { useControls } from 'leva'
import { Physics, useBox, usePlane, useSphere } from "@react-three/cannon";

export default function App() {

  const gravity = useControls('Gravity', {
    x: { value: 0, min: -10, max: 10, step: 0.1 },
    y: { value: -9.8, min: -10, max: 10, step: 0.1 },
    z: { value: 0, min: -10, max: 10, step: 0.1 }
  })
  const positions = useControls('Position', {
    y: { value: 10, min: 0, max: 200, step: 1 },
  })


  return (
    <Suspense fallback={null}>
      <Canvas shadows flat linear>
        <Physics gravity={[gravity.x, gravity.y, gravity.z]}>

          <Ball
            scale={1}
            position={[0, positions.y, -1]} color={"blue"} />
          <Plane

            scale={0.0002}
            rotation={[-1, 4, -1]}
            position={[-1, 4, -1]}
          />
        </Physics>

        <Scene />
        <OrbitControls />
      </Canvas>
    </Suspense>
  );
}
