import { useRef } from "react";
import "./services.scss";
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

const Services = () => {
  const ref = useRef();

  const isInView = useInView(ref, { margin: "-100px" });

  return (
    <motion.div
      className="services"
      variants={variants}
      initial="initial"
      ref={ref}
      animate={"animate"}
    >
      {/* <motion.div className="textContainer" variants={variants}>
        <p>
          I focus on learn New Skills
          <br />and Expand my Knowledge
        </p>
        <hr />
      </motion.div> */}
      <motion.div className="titleContainer" variants={variants}>
        <div className="title">
          <h1>
            <motion.b whileHover={{color:"orange"}}>Education</motion.b> 
          </h1>
        </div>
      </motion.div>
      <motion.div className="listContainer" variants={variants}>
        <motion.div
          className="box"
          whileHover={{ background: "lightgray", color: "black" }}
        >
          <h2 className="Heading">Undergraduate</h2>
          <p></p>
          <p>
            College: Shri Sant Gajanan Maharaj College of Engineering Shegaon
          </p>
          <p>
            Specialization: B.E. (Mechanical Engineering)
          </p>
          
          <p>
            CGPA: 7.95
          </p>
          <span>
            Year of Passing: 2024
          </span>
          <span>
          Mechanical Engineering student proficient in SolidWorks, CAD, CATIA, and Fusion 360. Diversifying into software development with expertise in core Java, web development, DevOps, AWS, and Cloud Computing. Seamlessly merging traditional engineering with tech advancements, I aspire to innovate and contribute at the intersection of mechanical engineering and software development.
          </span>
          <button>Go</button>
        </motion.div>
        <motion.div
          className="box"
          whileHover={{ background: "lightgray", color: "black" }}
        >
          <h2>HSC (12th)</h2>
          <p>
            College: Deepchand Chaudhary Jr. College, Seloo
          </p>
          <p>
          Specialization: Science
          </p>
          <p>
            Percentage: 67.08%
          </p>
          <span>
            Year of Passing: 2020
          </span>
          <span>
          In my HSC, I honed vital life skills like problem-solving, time management, presentation, teamwork, and adaptability. Additionally, I ventured into technology, mastering Photoshop, Basic Computer Commands, and Windows navigation. This diverse skill set not only enhanced my academic journey but also prepared me for versatile challenges beyond the classroom.
          </span>
          <button>Go</button>
        </motion.div>
        <motion.div
          className="box"
          whileHover={{ background: "lightgray", color: "black" }}
        >
          <h2>SSC (10th)</h2>
          <p>
            College: Deepchand Chaudhary Vidyalaya, Seloo 
          </p>
          <span>
            Board: Maharashatra State Board
          </span>
          <p>
            Percentage: 76.80%
          </p>
          <p>
            Year of Passing: 2018
          </p>
          <span>
          In my SSC journey, I proudly secured the second rank in the Science Exhibition, showcasing my passion for innovation. As a standout hockey player, I excelled in sports, demonstrating my commitment to excellence. Additionally, my academic achievements were notable, earning me the second rank in mathematics within my School during the SSC exams.  
          </span>
          <button>Go</button>
        </motion.div>
        {/* <motion.div
          className="box"
          whileHover={{ background: "lightgray", color: "black" }}
        >
          <h2>Branding</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum
            libero enim nisi aliquam consectetur expedita magni eius ex corrupti
            animi! Ad nam pariatur assumenda quae mollitia libero repellat
            explicabo maiores?
          </p>
          <button>Go</button>
        </motion.div> */}
      </motion.div>
    </motion.div>
  );
};

export default Services;
