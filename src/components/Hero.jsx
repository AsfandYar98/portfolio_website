import { React, Suspense, useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

import { styles } from "../styles";
import { TicofabCanvas } from "./canvas";
import { Cursor, useTypewriter } from "react-simple-typewriter";
import * as THREE from "three";
import { Canvas } from "@react-three/fiber";
import { useGLTF, OrbitControls } from "@react-three/drei";

import {
  BsTwitter,
  BsGithub,
  BsDiscord,
  BsInstagram,
  BsLinkedin,
  BsFacebook,
} from "react-icons/bs";
import Astronaut from "./canvas/Astronaut";
import CanvasLoader from "./Loader";

const Hero = () => {
  const [text, count] = useTypewriter({
    words: [
      "<AI Engineer />",
      "Data Scientist & ML Engineer",
      "MLOps Specialist",
      "Cloud Native Developer",
      "Time Series Forecasting Expert",
      "Building Intelligent Systems",
      "From Data to Insights",
      "Scaling ML Models",
      "Kubernetes & Docker Expert",
      "Python & Java Developer",
      "Research & Innovation",
    ],
    loop: true,
    delaySpeed: 1000,
  });

  const adjustAstronautForScreenSize = (screenWidth) => {
    let screenScale, screenPosition;
    let rotation = new THREE.Euler();

    rotation.x = Math.PI / 2; // x = 90 degrees
    rotation.y = Math.PI; // y = 180 degrees
    rotation.z = -Math.PI / 2; // z = 90 degrees
    screenPosition = [0, -5, -10];
    screenScale = [1, 1, 1];
    return [screenScale, screenPosition, rotation];
  };

  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const [astronautScale, astronautPosition, astronautRotation] =
    adjustAstronautForScreenSize(windowWidth);

  return (
    <section className="relative w-full h-screen mx-auto">
      <div
        className={`${styles.paddingX} absolute inset-0 top-[120px] max-w-7xl mx-auto flex flex-row items-start gap-5`}
      >
        <div className="flex flex-col justify-center items-center mt-5">
          <div className="w-5 h-5 rounded-full animate-text bg-gradient-to-r from-teal-500 via-purple-500 to-orange-500"></div>
          <div className="w-1 sm:h-80 h-40 animate-text bg-gradient-to-r from-teal-500 via-purple-500 to-orange-500"></div>
        </div>

        <div>
          <h1 className={`${styles.heroHeadText} text-white`}>
            Hi, I'm{" "}
            <span className="animate-text bg-gradient-to-r from-teal-500 via-purple-500 to-orange-500 bg-clip-text text-transparent font-black">
              Asfand
            </span>
          </h1>

          <p
            className={`${styles.heroSubText} mt-2 sm:-mb-10 text-white-100 max-w-lg`}
          >
            {text}
            <Cursor cursorColor="#915eff" />
          </p>
        </div>
      </div>
      {/* <TicofabCanvas /> */}
      <section className="w-full h-screen">
        <Canvas className="w-full h-screen" camera={{ near: 0.1, far: 1000 }}>
          <Suspense fallback={<CanvasLoader />}>
            <directionalLight position={[1, 1, 1]} intensity={2} />
            <ambientLight intensity={0} />
            {/* <pointLight /> */}
            {/* <spotLight /> */}
            <hemisphereLight
              skyColor="#b1e1ff"
              groundColor="#000000"
              intensity={1}
            />
            {/* <Space /> */}
            <Astronaut
              position={astronautPosition}
              scale={astronautScale}
              rotation={astronautRotation}
            />
          </Suspense>
        </Canvas>
      </section>

      <div className="absolute xs:bottom-10 bottom-32 w-full flex justify-center items-center">
        <a href="#about">
          <div className="w-[35px] h-[64px] rounded-3xl border-4 border-secondary flex justify-center items-start p-2">
            <motion.div
              animate={{ y: [0, 24, 0] }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatType: "loop",
              }}
              className="w-3 h-3 rounded-full bg-secondary mb-1"
            />
          </div>
        </a>
      </div>

      <div className="absolute right-5 top-1/2 -translate-y-1/2 flex flex-col gap-5 items-center md:mt-10 mt-5 md:gap-12">
        <Link
          target="_blank"
          to="https://www.linkedin.com/in/asfand-yar-ahmad-khan/"
        >
          <BsLinkedin
            size={30}
            className="icon hover:text-[#0e76a8] hover:translate-y-[-2px] hover:cursor-pointer transition-all ease-in duration-100"
          />
        </Link>

        <Link target="_blank" to="https://github.com/AsfandYar98">
          <BsGithub
            size={30}
            className="icon hover:text-[#494646] hover:translate-y-[-2px] hover:cursor-pointer transition-all ease-in duration-100"
          />
        </Link>

        <Link target="_blank" to="https://twitter.com/Asfand_YarKhan">
          <BsTwitter
            size={30}
            className="icon hover:text-[#1DA1F2] hover:translate-y-[-2px] hover:cursor-pointer transition-all ease-in duration-100"
          />
        </Link>

        <Link target="_blank" to="https://discord.com/channels/@noob_master007">
          <BsDiscord
            size={30}
            className="icon hover:text-[#5865F2] hover:translate-y-[-2px] hover:cursor-pointer transition-all ease-in duration-100"
          />
        </Link>

        <Link target="_blank" to="https://www.instagram.com/asfand_yar1/">
          <BsInstagram
            size={30}
            className="icon hover:text-[#E1306C] hover:translate-y-[-2px] hover:cursor-pointer transition-all ease-in duration-100"
          />
        </Link>
        <Link target="_blank" to="https://www.facebook.com/asfandyar.AK98">
          <BsFacebook
            size={30}
            className="icon hover:text-[#1877F2] hover:translate-y-[-2px] hover:cursor-pointer transition-all ease-in duration-100"
          />
        </Link>
      </div>
    </section>
  );
};

export default Hero;
