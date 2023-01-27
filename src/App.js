import { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import Scene from "./Scene";
import Marble from "./Marble";
import Plane from "./Plane";
import { Physics, useBox, usePlane, useSphere } from "@react-three/cannon";

export default function App() {
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
        <Physics>
          <Marble
            position={[-1, 11114, -1]}
          />
          <Plane
            position={[-1, 4, -1]}
          />
        </Physics>
        <Scene />
        <OrbitControls />
      </Canvas>
    </Suspense>
  );
}
