/*
  Auto-generated by Spline
*/

import useSpline from "@splinetool/r3f-spline";
import { Physics, useBox, usePlane, useSphere } from "@react-three/cannon";

export default function Marble({ ...props }) {
  const [ref] = useSphere(() => ({
    mass: 10,
    position: [12, 205, 0]
  }));

  const { nodes, materials } = useSpline(
    "https://prod.spline.design/OXhxWphgbNEQxnUZ/scene.splinecode"
  );
  return (
    <group {...props} ref={ref} dispose={null}>
      <mesh
        name="Sphere123"
        geometry={nodes.Sphere123.geometry}
        material={materials.Sphere123}
        castShadow
        receiveShadow
        position={[0, 415.84, -1]}
      />
    </group>
  );
}
