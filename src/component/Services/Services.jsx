import React from "react";
import "./Services.css";
import Card from "../Card/Card";
import HeartEmozi from "../../img/heartemoji.png";
import Glasses from "../../img/glasses.png";
import Humble from "../../img/humble.png";
import Resume from "./resume_removed.pdf";
import { themeContext } from "../../Context";
import { useContext } from "react";
import { motion } from "framer-motion";
const Services = () => {
  const transition = { duration: 2, type: "spring" };
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;
  return (
    <div className="services" id="Services">
      <div className="awesome">
        <span style={{ color: darkMode ? "white" : "" }}>My Awesome</span>
        <span>Services</span>
        <span>
          I am a competitive programmer with a strong interest in web development.
          <br />
          and machine learning. My skills span across these areas, and I enjoy exploring
          <br />
           new techniques and technologies within each field.
        </span>
        <a href={Resume} download>
          <button className="button s-button">Download CV</button>
        </a>
        <div className="blur s-blur1" style={{ background: "#abf1ff94" }}></div>
      </div>
      <div className="cards">
        <motion.div
          initial={{ left: "25rem" }}
          whileInView={{ left: "23rem" }}
          transition={transition}
          style={{ left: "14rem" }}
        >
          <Card
            emozi={HeartEmozi}
            heading={"Frontend"}
            detail={"HTML, CSS, Javascript, Bootstrap, Tailwind CSS"}
          />
        </motion.div>
        <motion.div
          initial={{ top: "12rem", left: "-10rem" }}
          whileInView={{ left: "5rem" }}
          transition={transition}
          style={{ left: "-4rem", top: "12rem" }}
        >
          <Card
            emozi={Glasses}
            heading={"Backend"}
            detail={`Node JS, Express, python, Django, Flask`}
          />
        </motion.div>
        <motion.div
          initial={{ left: "20rem" }}
          whileInView={{ left: "30rem" }}
          transition={transition}
          style={{ left: "12rem", top: "18rem" }}
        >
          <Card emozi={Humble} heading={"Database"} detail={` My-SQL , MongoDB , SQLite , PostgreSQL , Oracle`} />

        </motion.div>
        <div
          className="blur s-blur2"
          style={{ background: "var(--purple)" }}
        ></div>
      </div>
    </div>
  );
};

export default Services;
