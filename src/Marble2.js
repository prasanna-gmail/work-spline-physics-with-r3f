/*
  Auto-generated by Spline
*/

import useSpline from "@splinetool/r3f-spline";
import { Canvas, useFrame } from "@react-three/fiber";
import { Physics, useBox, usePlane, useSphere } from "@react-three/cannon";

export default function Marble({ ...props }) {
    console.log("pkp:  ~ file: Marble.js:10 ~ Marble ~ props", props)
    const [ref, api] = useSphere(() => ({
        mass: 1,
        // friction: 0,
        position: [0, 200, 0]
    }));

    useFrame((state, delta, xrFrame) => {
        // console.log("pkp:  ~ file: Marble.js:17 ~ useFrame ~ state", state)
        // This function runs at the native refresh rate inside of a shared render-loop

        // ref.current.rotation.x += 0.01
        // // ref.current.position.y
        // api.position
        console.log("pkp:  ~ file: Marble.js:24 ~ useFrame ~ api.position", api.position)
        // console.log("pkp:  ~ file: Marble.js:70 ~ Marble ~ ref.current.position.y", ref.current.position)

    })

    const { nodes, materials } = useSpline(
        "https://prod.spline.design/OXhxWphgbNEQxnUZ/scene.splinecode"
    );

    function handleClick(e) {
        // console.log("pkp:  ~ file: Marble.js:21 ~ handleClick ~ e", e)
        // console.log("pkp:  ~ file: Marble.js:23 ~ handleClick ~ api.rotation", api.rotation)
        api.rotation.set(0, 0.90, 0)

        // console.log("pkp:  ~ file: Marble.js:23 ~ handleClick ~ api.rotation.y", ref.current.rotation.y)
        // e.preventDefault();
        // console.log('You clicked submit.');
        api.position.set(0, 200, 0)
        api.mass.set(2000)
        console.log("pkp:  ~ file: Marble.js:40 ~ handleClick ~ api", api)
    }

    return (
        // <group {...props} ref={ref} dispose={null}>
        //   <mesh
        //     name="Sphere123"
        //     geometry={nodes.Sphere123.geometry}
        //     material={materials.Sphere123}
        //     castShadow
        //     receiveShadow
        //     position={[0, 100, 0]}
        //   />
        // </group>


        <mesh ref={ref}>

            <mesh
                onClick={handleClick}
                name="Sphere123"
                geometry={nodes.Sphere123.geometry}
                material={materials.Sphere123}
                castShadow
                receiveShadow
                position={[0, 100, 0]}
                onUpdate={(self) => console.log("props have been updated")}
            />
            {/*  <meshPhysicalMaterial
        roughness={0.8}
        metalness={0.9}
        clearcoat={1}
        clearcoatRoughness={0.35}
      /> */}
        </mesh>

    );
}
