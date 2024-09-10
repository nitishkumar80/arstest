import React from "react";
import "./Signup.css";
import { FaGoogle } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const Signup = () => {
  return (
    <>
      <div className="signup-container">
        <div className="signup-inner-container">
          <div className="left-side">
            <motion.h1
              initial={{ x: -100, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
            >
              Join Us Today!
            </motion.h1>
            <motion.p
              initial={{ x: -100, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1, transition: { delay: 0.2 } }}
              className="signup-subheading"
            >
              Create Your Account and Get Started
            </motion.p>
          </div>

          <div className="right-side">
            <motion.h1
              initial={{ y: -100, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1, transition: { delay: 0.2 } }}
              className="signup-heading"
            >
              Signup to <span style={{ color: "#ffbe33" }}>Ars Kreedashala</span>
            </motion.h1>

            {/* Third Party Signup */}
            <div className="third-party-signup">
              <motion.div
                initial={{ x: 100, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
              >
                {" "}
                <FaGoogle className="signup-icon" />
              </motion.div>
              <motion.div
                initial={{ x: 100, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1, transition: { delay: 0.2 } }}
              >
                {" "}
                <FaFacebookF className="signup-icon" />
              </motion.div>
              <motion.div
                initial={{ x: 100, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1, transition: { delay: 0.4 } }}
              >
                <FaGithub className="signup-icon" />
              </motion.div>
            </div>

            <motion.p
              initial={{ y: 100, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1, transition: { delay: 0.6 } }}
              className="or"
            >
              or use your email to register
            </motion.p>

            <motion.input
              initial={{ opacity: 0, x: 100 }}
              whileInView={{ opacity: 1, x: 0, transition: { delay: 0.8 } }}
              className="username"
              type="text"
              placeholder="Username"
            />
            <motion.input
              initial={{ opacity: 0, x: 100 }}
              whileInView={{ opacity: 1, x: 0, transition: { delay: 1 } }}
              className="email"
              type="text"
              placeholder="Email"
            />
            <motion.input
              initial={{ opacity: 0, y: 100 }}
              whileInView={{ opacity: 1, y: 0, transition: { delay: 1.2 } }}
              className="password"
              type="password"
              placeholder="Password"
            />
            <motion.input
              initial={{ opacity: 0, y: 100 }}
              whileInView={{ opacity: 1, y: 0, transition: { delay: 1.4 } }}
              className="password"
              type="password"
              placeholder="Confirm Password"
            />

            <motion.button
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1, transition: { delay: 1.6 } }}
              className="signup-btn"
            >
              Signup
            </motion.button>

            <motion.p
              initial={{ opacity: 0, y: 100 }}
              whileInView={{ opacity: 1, y: 0, transition: { delay: 1.8 } }}
              className="login-link"
            >
              Already have an account?{" "}
              <Link to={"/login"} className="login">
                Login
              </Link>
            </motion.p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Signup;
