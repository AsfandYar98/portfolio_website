import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";
import { a } from "@react-spring/three";

import handScene from "../../assets/glb/damaged_hands.glb";

const Hands = (props) => {
  const handRef = useRef();
  const { nodes, materials } = useGLTF(handScene);
  return (
    <a.group ref={handRef} {...props}>
      <group rotation={[-Math.PI / 2, 0, 0]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_2.geometry}
          material={materials["Material.001"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_3.geometry}
          material={materials["Material.002"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_4.geometry}
          material={materials["Material.003"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_5.geometry}
          material={materials["defaultMat.002"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_6.geometry}
          material={materials["defaultMat.001"]}
        />
      </group>
    </a.group>
  );
};

export default Hands;
