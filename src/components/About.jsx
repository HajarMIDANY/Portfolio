import React from "react";
import {Tilt} from "react-tilt";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { services } from "../constants";
import { fadeIn, textVariant } from "../utils/motion";
import { SectionWrapper } from "../hoc";

// Service Card
const ServiceCard = ({ index, title, icon }) => {
  return (
    <Tilt className="xs:w-[250px] w-full">
      <motion.div
        variants={fadeIn("right", "spring", 0.5 * index, 0.75)}
        className="w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card"
      >
        <div
          options={{
            max: 45,
            scale: 1,
            speed: 450,
          }}
          className="bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col"
        >
          <img src={icon} alt={title} className="w-16 h-16 object-contain" />
          <h3 className="text-white text-[20px] font-bold text-center">
            {title}
          </h3>
        </div>
      </motion.div>
    </Tilt>
  );
};

// About
const About = () => {
  return (
    <>
      {/* Title */}
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>Introduction</p>
        <h2 className={styles.sectionHeadText}>Overview</h2>
      </motion.div>
      {/* Body */}
      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className="empty-4 text-secondary text-[17px] max-w-3xl leading-[30px]"
      > <p className="font-bold">🚀 Aspiring MERN Developer with a Financial Twist</p>
        Greetings! I'm <span className="text-[]">Hajar</span>, a recent graduate in finance on an exciting journey into web development, diving deep into the MERN stack. 
        Although I'm a junior, my passion for coding is matched only by my eagerness to learn.I'm gaining proficiency in MongoDB, Express.js, React.js, and Node.js to craft simple and effective solutions. 
        With a collaborative spirit and a commitment to continuous growth, I'm ready to contribute and learn alongside a supportive team.
         Let's embark on this coding adventure together! 💻✨
      </motion.p>

      {/* Service Card */}
      <div className="mt-20 flex flex-wrap gap-10">
        {services.map((service, i) => (
          <ServiceCard key={service.title} index={i} {...service} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(About, "about");
