import { React, Suspense, useState, useEffect } from "react";
import Hands from "./canvas/Hands";
import * as THREE from "three";
import { Canvas } from "@react-three/fiber";
import CanvasLoader from "./Loader";
import styles from "../pillstyle.module.css";

const Option = () => {
  const adjustAstronautForScreenSize = (width) => {
    let screenScale, screenPosition;
    let rotation = new THREE.Euler();

    rotation.x = Math.PI / 2 + 0.1;
    rotation.y = 0;
    rotation.z = 0;
    screenPosition = [0, 0, 3.7];
    screenScale = [1, 1, 1];

    if (width < 768) {
      rotation.x = Math.PI / 2 + 0.1;
      rotation.y = 0;
      rotation.z = 0;
      screenPosition = [0, 0, 3.4];
      screenScale = [1, 1, 1];
    }
    return [screenScale, screenPosition, rotation];
  };

  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const [astronautScale, astronautPosition, astronautRotation] =
    adjustAstronautForScreenSize(windowWidth);

  useEffect(() => {
    function handleResize() {
      setWindowWidth(window.innerWidth);
    }

    window.addEventListener("resize", handleResize);

    // Clean up the event listener on component unmount
    return () => window.removeEventListener("resize", handleResize);
  }, []); // Empty dependency array means this effect runs only once on mount

  return (
    <section className="relative w-full h-screen mx-auto bg-black">
      {/* <TicofabCanvas /> */}
      <section className="w-full h-screen">
        <div className="flex z-10 absolute items-center justify-center w-full h-full">
          <button
            className={`${styles.pillButton} ${styles.red} ${styles.rotate15}`}
          >
            <span>Data Scientist</span>
          </button>
          <span className={styles.pad2}></span>
          <button
            className={`${styles.pillButton} ${styles.blue} ${styles.negRotate15}`}
          >
            <span>Software Engineer</span>
          </button>
        </div>

        <Canvas
          className="w-full h-screen z-0"
          camera={{ near: 0.1, far: 1000 }}
        >
          <Suspense fallback={<CanvasLoader />}>
            <directionalLight position={[1, 1, 1]} intensity={0} />
            <ambientLight intensity={0} />
            {/* <pointLight /> */}
            {/* <spotLight /> */}
            <hemisphereLight
              skyColor="#b1e1ff"
              groundColor="#000000"
              intensity={1}
            />
            {/* <Space /> */}
            <Hands
              position={astronautPosition}
              scale={astronautScale}
              rotation={astronautRotation}
            />
          </Suspense>
        </Canvas>
      </section>
    </section>
  );
};

export default Option;
