import React from "react";
import TypeAnimation from "react-type-animation";
import { motion } from "framer-motion";
import "../../shared/Shared.css";

const Banner = () => {
  return (
    <div className="parent min-h-[90vh] flex flex-col-reverse lg:flex-row items-center justify-between">
      <motion.div
        initial={{ x: "-100vw" }}
        animate={{ x: 0 }}
        transition={{ duration: 2 }}
      >
        <h2 className="text-gray-400 text-xl font-medium">Hello, I'm</h2>
        <h1 className="text-4xl font-semibold mb-0">Mohammad Ali</h1>
        <div className="my-4">
          <TypeAnimation
            className="text-2xl text-primary font-bold"
            cursor={true}
            sequence={[
              "A Front-end Developer",
              2000,
              "A React JS Developer",
              2000,
              "A Jr. Web Developer",
              2000,
            ]}
            wrapper="div"
            repeat={Infinity}
          />
        </div>
        <p className="text-gray-400 max-w-md mb-6 font-medium">
          I am Jr. Front-end Developer. I am very passionate to my work and
          dedicated to explore New Tools And Technologies.
        </p>

        <a
          href="https://drive.google.com/file/d/1qVQ1OLO-5RxHy1rwbe5Ib9igCTfeO99f/view?usp=sharing"
          target="blank"
        >
          <button className="primary-button">My Resume</button>
        </a>
      </motion.div>
      <motion.div
        className="w-full md:w-1/2"
        initial={{ x: "100vw" }}
        animate={{ x: 0 }}
        transition={{ duration: 2 }}
      >
        <img
          src="https://cdn.dribbble.com/users/330915/screenshots/3587000/10_coding_dribbble.gif"
          alt="Mohammad Ali"
        />
      </motion.div>
    </div>
  );
};

export default Banner;