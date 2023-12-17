import { useRef } from "react";
import "./servicesIntern.scss";
import { motion, useInView } from "framer-motion";

const variants = {
  initial: {
    x: -500,
    y: 100,
    opacity: 0,
  },
  animate: {
    x: 0,
    opacity: 1,
    y: 0,
    transition: {
      duration: 1,
      staggerChildren: 0.1,
    },
  },
};

const ServicesIntern = () => {
  const ref = useRef();

  const isInView = useInView(ref, { margin: "-100px" });

  return (
    <motion.div
      className="services"
      variants={variants}
      initial="initial"
      // animate="animate"
      // whileInView="animate"
      ref={ref}
      animate={"animate"}
    >
      
      <motion.div className="titleContainer" variants={variants}>
        <div className="title">
          <h1>
            <motion.b whileHover={{color:"orange"}}>Internships</motion.b> 
          </h1>
        </div>
      </motion.div>
      <motion.div className="listContainer" variants={variants}>
        <motion.div
          className="box"
          whileHover={{ background: "lightgray", color: "black" }}
        >
          <h2 className="Heading">Full Stack Developement Intern</h2>
          <p>
            Company: Capabl AICTE Program
          </p>
          
          <p>
            Starting Date: 25 June 2023
          </p>
          <p>
            End Date: 25 July 2023
          </p>
          <p>
           <ul>
            <li>
              Capable AICTE Approved Full Stack Development internship offering comprehensive training for engineering and technical students in India.
            </li>
            <li>
              Successfully crafted a fully operational book store website utilizing HTML, CSS, and JavaScript, showcasing proficiency in front-end web development.
            </li>
            <li>
              Innovatively designed and implemented an engaging Hangman game using Python.
            </li>
           </ul>
          </p>
          <button><a href="https://www.linkedin.com/posts/siddheshwandile_capabl-intern-fullstackdeveloper-activity-7092026812762894336-beXw?utm_source=share&utm_medium=member_desktop">Certificate</a>
          </button>
        </motion.div>
        <motion.div
          className="box"
          whileHover={{ background: "lightgray", color: "black" }}
        >
          <h2>Java Programer Intern</h2>
          <p>
            Company: Internpe
          </p>
          
          <p>
            Starting Date: 5 June 2023
          </p>
          <p>
            End Date: 2 July 2023
          </p>
          <p>
           <ul>
            <li>
              Internpe program,a specialized internship catering to engineering and technical students in India
            </li>
            <li>
              Spearheaded the development of a robust supply chain management system using Java, emphasizing practical application and hands-on project experience.
            </li>
            <li>
              Played a vital role in the development and ongoing maintenance of diverse Java projects, demonstrating commitment to software development excellence.
            </li>
           </ul>
          </p>
          <button><a href="https://www.linkedin.com/posts/siddheshwandile_internpe-activity-7081100720262828032-mGNT?utm_source=share&utm_medium=member_desktop">Certificate</a></button>
        </motion.div>
        <motion.div
          className="box"
          whileHover={{ background: "lightgray", color: "black" }}
        >
          <h2>Front-End Web Development Intern</h2>
          <p>
            Company: IBM SkillBuild AICTE Program
          </p>
          <p>
            Starting Date: 25 Dec 2022
          </p>
          <p>
            End Date: 15 Feb 2023
          </p>
          <p>
           <ul>
            <li>
              Participated in the IBM Skillbuild internship under the AICTE umbrella, a dynamic training initiative tailored for engineering and technical students in India.
            </li>
            <li>
              Conceptualized and executed a personalized portfolio website, serving as a showcase for my proficiency as a UI designer, highlighting skills and professional experiences.
            </li>
            <li>
              Developed a personal portfolio website to showcase my skills and experience as a UI designer
            </li>
           </ul>
          </p>
          <button><a href="https://drive.google.com/file/d/1qeixQSF5sRxo8EGUGV3EiJXQ5TwS2SIo/view?usp=sharing">Certificate</a></button>
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default ServicesIntern;
