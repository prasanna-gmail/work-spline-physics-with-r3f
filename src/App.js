import { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import Scene from "./Scene";
import Marble from "./Marble";
import Plane from "./Plane";
import { useControls } from 'leva'
import { Physics, useBox, usePlane, useSphere } from "@react-three/cannon";

export default function App() {

  const gravity = useControls('Gravity', {
    x: { value: 0, min: -10, max: 10, step: 0.1 },
    y: { value: -9.8, min: -10, max: 10, step: 0.1 },
    z: { value: 0, min: -10, max: 10, step: 0.1 }
  })

  function MarbleX() {
    const [ref] = useSphere(() => ({
      mass: 10,
      position: [2, 415, 0]
    }));

    return (
      <mesh ref={ref} castShadow>
        <sphereBufferGeometry
          attach="geometry"
          args={[200, 1720, 1320]}
        ></sphereBufferGeometry>
        <meshStandardMaterial color="white" />
      </mesh>
    );
  }

  return (
    <Suspense fallback={null}>
      <Canvas shadows flat linear>
        <Physics gravity={[gravity.x, gravity.y, gravity.z]}>

          <Marble
            position={[-1, 14, -1]}
          />
          <Plane

            // scale={0.02}
            // rotation={[-1, 4, -1]}
            position={[-1, 4, -1]}
          />
        </Physics>
        <Scene />
        <OrbitControls />
      </Canvas>
    </Suspense>
  );
}
