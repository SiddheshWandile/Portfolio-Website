import { useRef } from "react";
import "./portfolio.scss";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";

const items = [
  {
    id: 1,
    title: "Dynamic Train Seat Allocator and Reservation System",
    img: "https://media.biltrax.com/wp-content/uploads/2023/07/11869-scaled.jpg",
    desc: "Developed DyTSARS, a versatile train software enabling real-time seat allocation even during travel. Achieved user-friendly interfaces, QR code generation / verification, and scalability for efficient passenger management and improved travel experience. ",
  },
  {
    id: 2,
    title: "Online Code Editor (CodeMecher)",
    img: "https://www.elegantthemes.com/blog/wp-content/uploads/2020/02/000-Online-Code-Editors.png",
    desc: "Revolutionizing coding with a user-friendly online editor. Features real time collaboration, syntax highlighting, and Git integration. Developed using HTML, CSS, JavaScript, Node.js, and MongoDB. ",
  },
  {
    id: 3,
    title: "Deploying a Containerized Web Application",
    img: "https://assets.toptal.io/images?url=https%3A%2F%2Fbs-uploads.toptal.io%2Fblackfish-uploads%2Fcomponents%2Fblog_post_page%2Fcontent%2Fcover_image_file%2Fcover_image%2F1285448%2Fretina_500x200_cover-what-is-kubernetes-02516750b825c872fa32c7005355a22e.png",
    desc: "Demonstrates how to package a web application as a Docker container image and run it on a Google Kubernetes Engine (GKE) cluster. The web application is then deployed as a load-balanced collection of replicas that can scale to meet the demands of your users. ",
  },
  // {
  //   id: 4,
  //   title: "Music App",
  //   img: "https://images.pexels.com/photos/18540208/pexels-photo-18540208/free-photo-of-wood-landscape-water-hill.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
  //   desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores ab id ad nesciunt quo aut corporis modi? Voluptate, quos sunt dolorum facilis, id eum sequi placeat accusantium saepe eos laborum.",
  // },
];

const Single = ({ item }) => {
  const ref = useRef();

  const { scrollYProgress } = useScroll({
    target: ref,
  });

  const y = useTransform(scrollYProgress, [0, 1], [-300, 300]);

  return (
    <section >
      <div className="container">
        <div className="wrapper">
          <div className="imageContainer" ref={ref}>
            <img src={item.img} alt="" />
          </div>
          <motion.div className="textContainer" style={{y}}>
            <h2>{item.title}</h2>
            <p>{item.desc}</p>
            <button>See Demo</button>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const Portfolio = () => {
  const ref = useRef();

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["end end", "start start"],
  });

  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
  });

  return (
    <div className="portfolio" ref={ref}>
      <div className="progress">
        <h1>Featured Works</h1>
        <motion.div style={{ scaleX }} className="progressBar"></motion.div>
      </div>
      {items.map((item) => (
        <Single item={item} key={item.id} />
      ))}
    </div>
  );
};

export default Portfolio;
