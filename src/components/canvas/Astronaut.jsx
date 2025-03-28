import React, { useRef, useEffect, useState } from "react";
import { useGLTF, useAnimations, OrbitControls } from "@react-three/drei";
import { useFrame, useThree } from "@react-three/fiber";
import { a } from "@react-spring/three";
import * as THREE from "three";

import astronautScene from "../../assets/glb/tenhun_falling_spaceman_fanart.glb";

const Astronaut = (props) => {
  const astroRef = useRef();
  const innerObjRef = useRef();
  const { nodes, materials, scene, animations } = useGLTF(astronautScene);
  const { actions } = useAnimations(animations, astroRef);
  const { rotation, ...restProps } = props;

  useEffect(() => {
    if (actions["Idle"]) {
      actions["Idle"].play();
      actions["Idle"].clampWhenFinished = true;
      actions["Idle"].setLoop(THREE.LoopRepeat);
    }

    if (innerObjRef.current) {
      innerObjRef.current.rotation.copy(rotation);
    }
  }, [actions]);

  useFrame(() => {
    if (innerObjRef.current) {
      innerObjRef.current.rotation.z += 0.001; // Spin around Z-axis (adjust speed)
      // Or use other axes:
      // group.current.rotation.x += 0.01;
      // group.current.rotation.z += 0.01;
    }
  });

  return (
    <a.group ref={astroRef} {...restProps}>
      <group name="Sketchfab_Scene">
        <group name="Sketchfab_model" ref={innerObjRef}>
          <group name="Root">
            <group name="metarig">
              <primitive object={nodes.metarig_rootJoint} />
              <skinnedMesh
                name="Cube001_0"
                geometry={nodes.Cube001_0.geometry}
                material={materials["AstronautFallingTexture.png"]}
                skeleton={nodes.Cube001_0.skeleton}
              />
              <skinnedMesh
                name="Cube005_0"
                geometry={nodes.Cube005_0.geometry}
                material={materials["AstronautFallingTexture.png"]}
                skeleton={nodes.Cube005_0.skeleton}
              />
              <skinnedMesh
                name="Cube002_0"
                geometry={nodes.Cube002_0.geometry}
                material={materials["AstronautFallingTexture.png"]}
                skeleton={nodes.Cube002_0.skeleton}
              />
              <skinnedMesh
                name="Plane_0"
                geometry={nodes.Plane_0.geometry}
                material={materials["AstronautFallingTexture.png"]}
                skeleton={nodes.Plane_0.skeleton}
              />
              <skinnedMesh
                name="Cube008_0"
                geometry={nodes.Cube008_0.geometry}
                material={materials["AstronautFallingTexture.png"]}
                skeleton={nodes.Cube008_0.skeleton}
              />
              <skinnedMesh
                name="Cube004_0"
                geometry={nodes.Cube004_0.geometry}
                material={materials["AstronautFallingTexture.png"]}
                skeleton={nodes.Cube004_0.skeleton}
              />
              <skinnedMesh
                name="Cube003_0"
                geometry={nodes.Cube003_0.geometry}
                material={materials["AstronautFallingTexture.png"]}
                skeleton={nodes.Cube003_0.skeleton}
              />
              <skinnedMesh
                name="Cube_0"
                geometry={nodes.Cube_0.geometry}
                material={materials["AstronautFallingTexture.png"]}
                skeleton={nodes.Cube_0.skeleton}
              />
              <skinnedMesh
                name="Cube009_0"
                geometry={nodes.Cube009_0.geometry}
                material={materials["AstronautFallingTexture.png"]}
                skeleton={nodes.Cube009_0.skeleton}
              />
              <skinnedMesh
                name="Cube011_0"
                geometry={nodes.Cube011_0.geometry}
                material={materials["AstronautFallingTexture.png"]}
                skeleton={nodes.Cube011_0.skeleton}
              />
              <group name="Cube001" />
              <group name="Cube005" />
              <group name="Cube002" />
              <group name="Plane" />
              <group name="Cube008" />
              <group name="Cube004" />
              <group name="Cube003" />
              <group name="Cube" />
              <group
                name="Cube009"
                rotation={[-2.708, 0.013, -1.447]}
                scale={1.307}
              />
              <group name="Cube011" />
            </group>
          </group>
        </group>
      </group>
      {/* <OrbitControls
        enablePan={false}
        enableZoom={false}
        enableDamping={false}
        dampingFactor={0.1}
        autoRotate={false}
        minPolarAngle={Math.PI / 2}
        maxPolarAngle={Math.PI / 2}
        minAzimuthAngle={-1}
        maxAzimuthAngle={1}
      /> */}
    </a.group>
  );
};

export default Astronaut;
