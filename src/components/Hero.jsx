import React, { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { TypeAnimation } from 'react-type-animation';
import { styles } from "../styles";
import { IoMdDownload } from "react-icons/io";
import ResumePdf from '../assets/hajar_midany_IT.pdf';
import lottie from 'lottie-web';
import computerAnimationData from '../assets/computer.json';

// Hero
const Hero = () => {

  const downloadResume = () => {
    fetch(ResumePdf)
      .then((response) => response.blob())
      .then((blob) => {
        const url = URL.createObjectURL(blob);
        const link = document.createElement('a');
        link.href = url;
        link.download = 'Hajar_MIDANY.pdf';
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
        URL.revokeObjectURL(url);
      });
      
  };

  const container = useRef(null)

  useEffect(() => {
  const animation = lottie.loadAnimation({
    container: container.current,
    renderer: 'svg',
    animationData: computerAnimationData,
    autoplay:true,
    loop: true
  });

  return () => {
    animation.destroy();
  };
}, [computerAnimationData]);


  return (
    <section className="relative w-full h-screen mx-auto">
      <div
        className={`${styles.paddingX} absolute inset-0 top-[230px] max-w-7xl mx-auto flex flex-row items-start gap-5`}
      >

        {/* Title */}
        <div className="flex flex-col justify-center items-center mt-5">
          <div className="w-5 h-5 rounded-full bg-[#915eff]" />
          <div className="w-1 sm:h-80 h-40 violet-gradient" />
        </div>

        {/* About Me */}
        <div >
          <h1 className={`${styles.heroHeadText} text-white`}>
            Hi, I'm <span className="text-[#915eff]">Hajar</span>
          </h1>
          <TypeAnimation
            sequence={['Full Stack Devloper', 1000, ' Full Stack Devloper', () => console.log("done")]}
            wrapper="span"
            speed={5}
            style={{ fontSize: '4em', display: 'inline-block' }}
            repeat={Infinity}
          />
          <div className="flex flex-col w-40">
            <button onClick={downloadResume} className="bg-[#915eff] text-white p-2 rounded-md my-7 font-bold flex items-center justify-around hover:scale-110"> <IoMdDownload />Download CV</button>
          </div>
        </div>

      </div>
      {/* Lottie Animation */}
      <div className="hidden lg:block lg:absolute top-10 right-0 w-4/12 xl:w-4/9 h-full  " ref={container}></div>



      {/* Scroll to about section */}
      <div className="absolute xs:bottom-10 bottom-32 w-full flex justify-center items-center">
        <a href="#about">
          <div className="w-[35px] h-[64px] rounded-3xl border-4 border-secondary flex justify-center items-start p-2">
            <motion.div
              animate={{
                y: [0, 24, 0],
              }}
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
    </section>
  );
};

export default Hero;
