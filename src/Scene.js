/*
  Auto-generated by Spline
*/

import useSpline from "@splinetool/r3f-spline";
import { OrthographicCamera } from "@react-three/drei";
import { Physics, useBox, usePlane, useSphere } from "@react-three/cannon";

export default function Scene({ ...props }) {
  const { nodes, materials } = useSpline(
    "https://prod.spline.design/OXhxWphgbNEQxnUZ/scene.splinecode"
  );
  return (
    <>
      <color attach="background" args={["#5e6063"]} />
      <group {...props} dispose={null}>
        <mesh
          name="Plane123"
          geometry={nodes.Plane123.geometry}
          material={materials["Plane123 Material"]}
          castShadow
          receiveShadow
          position={[-289, 40, 300]}
          rotation={[-Math.PI / 2, 0, 0]}
        />

        <OrthographicCamera
          name="1"
          makeDefault={true}
          far={100000}
          near={-100000}
          position={[-5614.5, 1136.99, 2711.92]}
          rotation={[-0.4, -1.09, -0.36]}
          scale={1}
        />
        <hemisphereLight
          name="Default Ambient Light"
          intensity={0.75}
          color="#eaeaea"
        />
      </group>
    </>
  );
}