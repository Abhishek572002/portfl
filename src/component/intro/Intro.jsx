import React from "react";
import "./Intro.css";
import Github from "../../img/github.png";
import LinkedIn from "../../img/linkedin.png";
import Instagram from "../../img/instagram.png";
import Vector1 from "../../img/Vector1.png";
import Vector2 from "../../img/Vector2.png";
import abhishek from "../../img/abhi.png";
import Thump from "../../img/thumbup.png";
import crown from "../../img/crown.png";
import glassesimoji from "../../img/glassesimoji.png";
import Flotingdiv from "../flotingdiv/Flotingdiv";
import { Link } from "react-scroll";
import { themeContext } from "../../Context";
import { useContext } from "react";
import { motion } from "framer-motion";

const Intro = () => {
  const transition = { duration: 2, type: "spring" };
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;
  return (
    <div className="intro">
      <div className="i-left">
        <div className="i-name">
          <span style={{ color: darkMode ? "#fff " : "" }}>Hy! I Am</span>
          <span>Abhishek Jaiswal</span>
          <span>
            A Competitive Programmer with interest in Web Development and Machine Learning.
          </span>
        </div>
        <Link spy={true} to="Contact" smooth={true}>
          <button className="button i-button">Hire Me</button>
        </Link>
        <div className="i-icons">
          <a
            href="https://github.com/Abhishek572002"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={Github} alt="github" />
          </a>
          <a
            href="https://www.linkedin.com/in/abhishek-jaiswal-b1622721a/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={LinkedIn} alt="linkedin" />
          </a>
          <a
            href="https://www.instagram.com/abhishekjaiswal3884/?igshid=ZDdkNTZiNTM%3D"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={Instagram} alt="instagram" />
          </a>
        </div>
      </div>
      <div className="i-right">
        <img src={Vector1} alt="Vector" />
        <img src={Vector2} alt="Vector2" />
        <img src={abhishek} alt="boy" />
        <motion.img
          initial={{ left: "-36%" }}
          whileInView={{ left: "-24%" }}
          transition={transition}
          src={glassesimoji}
          alt="glassboy"
        />
        <motion.div
          initial={{ top: "-4%", left: "74%" }}
          whileInView={{ left: "68%" }}
          transition={transition}
          className="flotingdiv"
          style={{ top: "-24%", left: "78%" }}
        >
          <Flotingdiv image={crown} text1="Web" text2="Developer" />
        </motion.div>
        <motion.div
          initial={{ top: "18rem", left: "-5rem" }}
          whileInView={{ left: "2rem" }}
          transition={transition}
          className="flotingdiv"
          style={{ top: "18rem", left: "-2rem" }}
        >
          <Flotingdiv image={Thump} text1="Competitive Programmer" text2="" />
        </motion.div>
        <div className="blur" style={{ background: "rbg(238 210 255)" }}></div>
        <div
          className="blur"
          style={{
            background: "#c1f5f5",
            top: "17rem",
            width: "21rem",
            height: "11rem",
            left: "-9rem",
          }}
        ></div>
      </div>
    </div>
  );
};

export default Intro;
