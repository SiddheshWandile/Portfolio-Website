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
            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/ca/LinkedIn_logo_initials.png/480px-LinkedIn_logo_initials.png" alt="" />
          </a>
          <a href="https://github.com/SiddheshWandile">
            <img src="https://static-00.iconduck.com/assets.00/github-icon-2048x2048-dpporae2.png" alt="" />
          </a>
          <a href="https://leetcode.com/siddheshwandile/">
            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/ab/LeetCode_logo_white_no_text.svg/1734px-LeetCode_logo_white_no_text.svg.png" alt="" />
          </a>
          <a href="https://www.instagram.com/s_i_d_d_h_e_s_h_313/">
            <img src="https://png.pngtree.com/png-clipart/20230401/original/pngtree-three-dimensional-instagram-icon-png-image_9015419.png" alt="" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
