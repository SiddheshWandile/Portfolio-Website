import Sidebar from "../sidebar/Sidebar";
import "./navbar.scss";
import { motion } from "framer-motion";

const Navbar = () => {
  return (
    <div className="navbar">
      {/* Sidebar */}
      <Sidebar/>
      <div className="wrapper">
        <motion.span
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
        >
          Portfolio
        </motion.span>
        <div className="social">
          <a href="https://www.linkedin.com/in/siddheshwandile/">
            <img src="/public/Linkedin.png" alt="" />
          </a>
          <a href="https://github.com/SiddheshWandile">
            <img src="public/github.png" alt="" />
          </a>
          <a href="https://leetcode.com/siddheshwandile/">
            <img src="public/leetCode.png" alt="" />
          </a>
          <a href="https://www.instagram.com/s_i_d_d_h_e_s_h_313/">
            <img src="public/instagram.png" alt="" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
