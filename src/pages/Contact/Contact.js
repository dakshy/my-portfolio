import React, { useEffect, useRef, useState } from "react";
import "./Contact.css";
import "../../components/PrimaryBtn.css";
import "../shared/Shared.css";
import { motion, useAnimation } from "framer-motion";
import {
  FaUserAlt,
  FaCalendarAlt,
  FaLocationArrow,
  FaLinkedin,
  FaGithubSquare,
  FaTelegramPlane,
  FaCode,
} from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import emailjs from "@emailjs/browser";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";
import { useInView } from "react-intersection-observer";
import {
  headingAnimation,
  contactAnimation,
} from "../../hooks/useAnimation";
import BottomLine from "../../components/BottomLine";

const Contact = () => {
  const navigate = useNavigate();
  const form = useRef();
  const [ref, inView] = useInView({ threshold: 0.3, triggerOnce: true });
  const [viewDiv, setViewDiv] = useState(false);
  const animation = useAnimation();

  useEffect(() => {
    if (inView) {
      setViewDiv(true);
    } else {
      setViewDiv(false);
    }
  }, [inView, animation]);

  const handleSend = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(
        "daksh_2006officialmail",
        "template_59pk12i",
        form.current,
        "OqgYdp-QPOr4OkyWJ"
      )
      .then(
        (result) => {
          console.log(result.text);
          Swal.fire({
            position: "top-end",
            icon: "success",
            title: "Your Message has been sent",
            showConfirmButton: false,
            timer: 1500,
          });
          navigate("/");
        },
        (error) => {
          console.log(error.text);
        }
      );
    e.target.reset();
  };
  return (
    <div className="parent py-20">
      <motion.div
        initial="hidden"
        animate={viewDiv && "visible"}
        variants={headingAnimation}
      >
        <h3 className="text-gray-400 text-center">Feel Free To Contact Me</h3>
        <h1 className="text-4xl font-semibold drop-shadow-md text-center">
          Get In <span className="text-primary">Touch</span>
        </h1>
        <BottomLine />
      </motion.div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8">
        <motion.div
          className=""
          ref={ref}
          initial="hidden"
          animate={viewDiv && "visible"}
          variants={contactAnimation}
        >
          <h2 className="text-2xl font-medium">Contact Me</h2>
          <form ref={form} onSubmit={handleSend}>
            <div className="grid grid-cols-1 lg:grid-cols-2 lg:gap-6">
              <input
                className="input-field"
                type="text"
                name="name"
                id="name"
                placeholder="Name"
                required
              />
              <input
                className="input-field"
                type="email"
                name="email"
                id="email"
                placeholder="Email"
                required
              />
            </div>
            <input
              className="input-field"
              type="text"
              name="subject"
              id="subject"
              placeholder="Subject"
              required
            />
            <textarea
              className="input-field"
              name="message"
              id="message"
              cols="30"
              rows="5"
              placeholder="Message"
              required
            ></textarea>
            <button
              type="submit"
              value="Send Message"
              className="primary-button"
            >
              <span>Send Message</span>
            </button>
          </form>
        </motion.div>
        <motion.div
          className=""
          initial={{ y: 50, opacity: 0 }}
          animate={viewDiv && "visible"}
          variants={contactAnimation}
        >
          <h2 className="text-2xl font-medium">Contact Info</h2>
          <div className="flex items-center my-6">
            <FaUserAlt className="text-2xl mr-8 hover:text-primary cursor-pointer duration-300"></FaUserAlt>
            <h3 className="font-medium text-primary">Daksh Yadav</h3>
          </div>
          <div className="flex items-center my-6">
            <FaCalendarAlt className="text-2xl mr-8 hover:text-primary cursor-pointer duration-300"></FaCalendarAlt>
            <h3 className="font-medium text-primary">27/04/2006</h3>
          </div>
          <div className="flex items-center my-6">
            <MdEmail className="text-3xl mr-8 hover:text-primary cursor-pointer duration-300"></MdEmail>
            <h3 className="font-medium text-primary">admin@daksh.gq</h3>
          </div>
          <div className="flex items-center my-6">
            <FaLocationArrow className="text-2xl mr-8 hover:text-primary cursor-pointer duration-300"></FaLocationArrow>

            <h3 className="font-medium text-primary">
              India, Earth
            </h3>
          </div>
          <div className="mt-8 flex items-center">
            <h3 className="text-xl text-gray-400">Social</h3>
            <div className="bg-gray-400 w-10 h-[2px] mx-4"></div>
            <a
              href="https://www.linkedin.com/in/itsproali"
              target="blank"
              className="text-3xl text-gray-400 hover:text-primary hover:-translate-y-1.5 shadow-lg mx-1 duration-300"
            >
              <FaLinkedin></FaLinkedin>
            </a>
            <a
              href="https://www.github.com/dakshy"
              target="blank"
              className="text-3xl text-gray-400 hover:text-primary hover:-translate-y-1.5 shadow-lg mx-1 duration-300"
            >
              <FaGithubSquare></FaGithubSquare>
            </a>
            <a
              href="https://t.me/toonshub2006"
              target="blank"
              className="text-3xl text-gray-400 hover:text-primary hover:-translate-y-1.5 shadow-lg mx-1 duration-300"
            >
              <FaTelegramPlane></FaTelegramPlane>
            </a>
            <a
              href="https://code.daksh.gq"
              target="blank"
              className="text-3xl text-gray-400 hover:text-primary hover:-translate-y-1.5 shadow-lg mx-1 duration-300"
            >
              <FaCode></FaCode>
            </a>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Contact;
