import React from 'react';
import './Careers.css';
import { useState } from 'react';
import { motion } from 'framer-motion';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBriefcase, faHeartbeat, faPiggyBank, faBalanceScale } from '@fortawesome/free-solid-svg-icons';
import jobOpenings from "../../../data/jobOpenings.json";
import jobFaqs from "../../../data/jobFaqs.json"; 

const cardVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      delay: i * 0.2,
    }
  })
};

const benefits = [
  {
    icon: faBriefcase,
    title: 'Competitive Compensation',
    description:
      'We provide a competitive salary package that recognizes the skills and expertise of our employees. YourBank believes in rewarding exceptional performance and offering opportunities for financial growth.',
  },
  {
    icon: faHeartbeat,
    title: 'Health and Wellness',
    description:
      'We prioritize the health and well-being of our employees by providing comprehensive medical, dental, and vision insurance plans. We also offer wellness programs, gym memberships, and resources to support a healthy lifestyle.',
  },
  {
    icon: faPiggyBank,
    title: 'Retirement Planning',
    description:
      'YourBank is committed to helping employees plan for their future. We offer a retirement savings plan with a generous employer match to help them build a secure financial foundation for the long term.',
  },
  {
    icon: faBalanceScale,
    title: 'Work-Life Balance',
    description:
      'We understand the importance of maintaining a healthy work-life balance. YourBank offers flexible work arrangements, paid time off, parental leave, and other programs that support employees in managing their personal and professional commitments.',
  },
];

const Careers = () => {
    const [openFaqIndex, setOpenFaqIndex] = useState(null);
  return (
    <>
      {/* HERO SECTION */}
      <section className="careers-hero">
        <motion.div 
          className="hero-content"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
        >
          <motion.div 
            className="hero-text"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.5, duration: 0.8 }}
          >
            <h1>
              Welcome to <span className="highlight">YourBank</span> Careers!
            </h1>
            <p>
              Join our team and embark on a rewarding journey in the banking industry.
              At YourBank, we are committed to fostering a culture of excellence and
              providing opportunities for professional growth. With a focus on innovation,
              customer service, and integrity, we strive to make a positive impact in the
              lives of our customers and communities. Join us today and be a part of our
              mission to shape the future of banking.
            </p>
          </motion.div>

          <motion.div 
            className="hero-image"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2, duration: 1 }}
          >
            <img src="/img/careershero.png" alt="Careers" />
          </motion.div>
        </motion.div>
      </section>

      {/* OUR VALUES SECTION */}
      <section className="values-section">
        <motion.div 
          className="values-header"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2><span className="highlight">Our</span> Values</h2>
          <p>
            At YourBank, our values form the foundation of our organization and guide our actions. 
            We believe in upholding the highest standards of integrity, delivering exceptional service, 
            and embracing innovation. These values define our culture and shape the way we work together 
            to achieve our goals.
          </p>
        </motion.div>

        <div className="values-grid">
          {["Integrity", "Customer Centricity", "Collaboration", "Innovation"].map((title, index) => (
            <motion.div
              className="value-card"
              key={title}
              custom={index}
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
            >
              <h3>{title}</h3>
              <p>{
                title === "Integrity"
                  ? "We conduct ourselves with utmost honesty, transparency, and ethical behavior. We believe in doing what is right for our customers, colleagues, and stakeholders, even when faced with difficult choices."
                  : title === "Customer Centricity"
                  ? "Our customers are at the heart of everything we do. We are dedicated to understanding their needs, providing personalized solutions, and delivering exceptional service that exceeds expectations."
                  : title === "Collaboration"
                  ? "We foster a collaborative and inclusive work environment, where teamwork and diversity are celebrated. By leveraging the unique strengths and perspectives of our employees, we drive innovation and achieve greater success together."
                  : "We embrace change and constantly seek innovative solutions to meet the evolving needs of our customers. We encourage our employees to think creatively, challenge conventions, and explore new ideas to drive the future of banking."
              }</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* OUR BENEFITS SECTION */}
      <section className="benefits-section">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <span className="section-title">Our <span className="highlight">Benefits</span></span>
        </motion.h2>
        <motion.p
          className="section-description"
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
        >
          At YourBank, we value our employees and are dedicated to their well-being and success. We offer a comprehensive range of benefits designed to support their personal and professional growth.
        </motion.p>

        <div className="benefits-grid">
          {benefits.map((benefit, index) => (
            <motion.div
              key={index}
              className="benefit-card"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              viewport={{ once: true }}
            >
              <div className="benefit-icon">
                <FontAwesomeIcon icon={benefit.icon} size="2x" />
              </div>
              <h3>{benefit.title}</h3>
              <p>{benefit.description}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Job Openings Section */}
<section className="job-openings-section">
  <motion.div
    initial={{ opacity: 0, y: 50 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.6 }}
    viewport={{ once: true }}
    className="container"
  >
    <h2 className="section-title">
      <span className="highlight">Job</span> Openings
    </h2>
    <p className="section-description">
      Explore exciting job openings at YourBank, where we value talent,
      innovation, and a passion for customer service. Join our team and be
      part of shaping a brighter future in the banking industry.
    </p>

    <div className="job-cards">
  {jobOpenings.map((job, index) => (
    <motion.div
      key={index}
      className="job-card"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.2 }}
      viewport={{ once: true }}
    >
      <div className="job-content">
        <h3 className="job-title">{job.title}</h3>
        <div className="job-meta">
          <span>Location: {job.location}</span>
          <span>Department: {job.department}</span>
        </div>
        <h4>About This Job</h4>
        <p className="job-description">{job.description}</p>
        <h4>Requirements & Qualifications</h4>
        <ul className="job-requirements">
          {job.requirements.map((req, i) => (
            <li key={i}>
              <FontAwesomeIcon icon={faBriefcase} className="icon" />
              {req}
            </li>
          ))}
        </ul>
      </div>
      <button className="apply-button">Apply Now</button>
    </motion.div>
  ))}
</div>

  </motion.div>
</section>

{/* FAQ SECTION */}
<section className="faq-section">
  <motion.div
    initial={{ opacity: 0, y: 50 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.6 }}
    viewport={{ once: true }}
    className="container"
  >
    <h2 className="section-title">
      <span className="highlight">Job</span> FAQs
    </h2>
    <div className="faq-list">
      {jobFaqs.map((faq, index) => (
        <div key={index} className="faq-item">
          <button
            className="faq-question"
            onClick={() => setOpenFaqIndex(openFaqIndex === index ? null : index)}
          >
            {faq.question}
            <span className={`arrow ${openFaqIndex === index ? "open" : ""}`}>▼</span>
          </button>
          {openFaqIndex === index && (
            <motion.p
              className="faq-answer"
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              transition={{ duration: 0.3 }}
            >
              {faq.answer}
            </motion.p>
          )}
        </div>
      ))}
    </div>
  </motion.div>
</section>

    </>
  );
};

export default Careers;


