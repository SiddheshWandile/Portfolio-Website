import "./hero.scss";
import { motion } from "framer-motion";

const textVariants = {
  initial: {
    x: -500,
    opacity: 0,
  },
  animate: {
    x: 0,
    opacity: 1,
    transition: {
      duration: 1,
      staggerChildren: 0.1,
    },
  },
  scrollButton: {
    opacity: 0,
    y: 10,
    transition: {
      duration: 2,
      repeat: Infinity,
    },
  },
  hover: {
    scale: 1.1,
    transition: { duration: 0.5 },
  },
};
const sliderVariants = {
  initial: {
    x: 0,
  },
  animate: {
    x: "-220%",
    transition: {
      repeat: Infinity,
      repeatType:"mirror",
      duration: 20,
    },
  },
};

const downloadLink = 'https://drive.google.com/file/d/1Ui3wxAqKTAhhrbTDBBKxzxuO0ZCjJPZk/view?usp=drivesdk';

const handleButtonClick = () => {
  window.location.href = downloadLink;
};

const handleContactButtonClick = () => {
  // Scroll to the contact section
  const contactSection = document.getElementById('Contact');
  if (contactSection) {
    contactSection.scrollIntoView({ behavior: 'smooth' });
  }
}

const Hero = () => {
  return (
    <div className="hero">
      <div className="wrapper">
        <motion.div
          className="textContainer"
          variants={textVariants}
          initial="initial"
          animate="animate"
        >
          <motion.h2 variants={textVariants}>Siddhesh Wandile</motion.h2>
          <motion.h1 variants={textVariants}>
            Software Developer and DevOps Engineer
          </motion.h1>
          <motion.div variants={textVariants} className="buttons">
            <motion.button
            variants={textVariants}
            whileHover="hover"
            onClick={handleButtonClick}
            >
              Resume Download
            </motion.button>
            <motion.button variants={textVariants} whileHover="hover" onClick={handleContactButtonClick}>
              Contact Me
            </motion.button>
          </motion.div>
          <motion.img
            variants={textVariants}
            animate="scrollButton"
            src="/scroll.png"
            alt=""
          />
        </motion.div>
      </div>
      <motion.div
        className="slidingTextContainer"
        variants={sliderVariants}
        initial="initial"
        animate="animate"
      >
        Software Developer and DevOps Engineer
      </motion.div>
      <div className="imageContainer">
        <img src="/hero.jpg" alt="" />
      </div>
    </div>
  );
};

export default Hero;
