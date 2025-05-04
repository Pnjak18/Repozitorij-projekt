import React from "react";
import { motion } from "framer-motion";
import pressReleases from "../../../data/pressReleases.json";
import WhereToFindUs from "./WhereToFindUs";

import "./About.css";

const About = () => {
  return (
    <div className="about-page">
      {/* Hero Section */}
      <section className="about-hero">
        <div className="about-hero-wrapper">
          <motion.div
            className="about-hero-content"
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h1>
              Welcome to <span className="highlight-green">YourBank</span>!
            </h1>
            <p>
              At YourBank, we believe that banking should be more than just
              transactions. It should be an experience that empowers individuals
              and businesses to reach their financial goals. As a trusted
              financial institution, we are committed to delivering exceptional
              banking services that go beyond expectations.
            </p>
          </motion.div>

          <motion.img
            src="img/abouthero.png"
            alt="About Hero"
            className="about-hero-image"
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          />
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="mission-vision-section">
        <motion.div
          className="mv-header"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <h2 className="mv-heading">
            <span className="highlight">Mission</span> &{" "}
            <span className="highlight">Vision</span>
          </h2>
          <p className="mv-intro">
            We envision being a leading force in the industry, driven by
            innovation, integrity, and inclusivity, creating a brighter
            financial future for individuals and businesses.
          </p>
        </motion.div>

        <div className="mv-block">
          <motion.img
            src="img/misionsection1.png"
            alt="Mission"
            className="mv-img"
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          />
          <motion.div
            className="mv-text right"
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h3>Mission</h3>
            <p>
              Our mission is to empower customers to achieve financial success
              through personalized service, expert guidance, and innovative
              banking technology.
            </p>
          </motion.div>
        </div>

        <div className="mv-block">
          <motion.div
            className="mv-text left"
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h3>Vision</h3>
            <p>
              We aim to redefine banking by creating a seamless, personalized,
              and inclusive financial experience through innovation and
              excellence.
            </p>
          </motion.div>
          <motion.img
            src="img/misionsection2.png"
            alt="Vision"
            className="mv-img"
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          />
        </div>
      </section>

      {/* Press Releases */}
      <section className="press-releases-section">
        <motion.div
          className="press-header"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <h2 className="press-heading">
            Latest <span className="highlight">Press Releases</span>
          </h2>
          <p className="press-subtitle">
            Stay up to date with the latest news, announcements, and updates.
          </p>
        </motion.div>

        <div className="press-grid">
          {pressReleases.map((item, index) => (
            <motion.div
              className="press-card"
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              viewport={{ once: true }}
            >
              <img src={item.image} alt={item.title} className="press-img" />
              <span className="press-date">{item.date}</span>
              <h3 className="press-title">{item.title}</h3>
              <p className="press-summary">{item.summary}</p>
              <button className="press-button">Read More</button>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Where to Find Us */}
      <WhereToFindUs />
    </div>
  );
};

export default About;
