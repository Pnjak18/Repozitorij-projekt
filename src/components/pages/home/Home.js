import React from "react";
import { Link } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import { motion } from "framer-motion";
import { Navigation, Pagination } from "swiper/modules";
import { Autoplay } from "swiper/modules";
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import './Home.css';


const Home = () => {
	const testimonials = [
		{
		  name: "Jane Doe",
		  role: "Small Business Owner",
		  text: "YourBank made it incredibly easy to get a loan and scale my business. I can't thank them enough!",
		},
		{
		  name: "John Smith",
		  role: "Freelancer",
		  text: "Managing my finances is now stress-free thanks to YourBank’s smart tools and great support.",
		},
		{
		  name: "Maria Lopez",
		  role: "Student",
		  text: "Saving for school has never been this simple. Great rates and amazing service!",
		},
	  ];
	








    return ( 
        <>
       <section id="hero" className="hero-section d-flex align-items-center">

  <div className="container">
    <div className="row align-items-center">

      {/* Left Column */}
      <motion.div
        className="col-md-6"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
      >
        <h1>
          Welcome to <span className="highlight">YourBank</span>
        </h1>
        <h2>Empowering your Financial Journey</h2>
        <p>
          At YourBank, our mission is to provide comprehensive banking solutions
          that empower individuals and businesses to achieve their financial goals.
        </p>
        <Link to="/careers" className="btn btn-outline-theme mt-3">Open Account</Link>
      </motion.div>

      {/* Currency Exchange Calculator */}
      <motion.div
        className="col-md-3"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3, duration: 0.8, ease: 'easeOut' }}
      >
        <div className="currency-calculator p-3 rounded shadow ">
          <h5 className="mb-3">Currency Exchange</h5>
          <input type="number" className="form-control mb-2" placeholder="Amount" />
          <select className="form-select mb-2">
            <option>USD</option>
            <option>EUR</option>
            <option>GBP</option>
          </select>
          <select className="form-select mb-2">
            <option>EUR</option>
            <option>USD</option>
            <option>GBP</option>
          </select>
          <button className="btn btn-success w-100">Convert</button>
        </div>
      </motion.div>

      {/* Blended Image */}
      <motion.div
        className="col-md-3 text-center"
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.6, duration: 0.8, ease: 'easeOut' }}
      >
        <motion.img
  src="/img/Heroimg.png"
  alt="Growth Arrows"
  className="img-fluid blended-image"
  whileHover={{ scale: 1.05 }}
  transition={{ type: 'spring', stiffness: 200, damping: 10 }}
/>
      </motion.div>

    </div>
  </div>
</section>


 	
 		
 	

 	<section className="our-products-section py-5">
  <div className="container">
    {/* Heading */}
    <div className="row mb-4">
      <div className="col text-center">
        <h1>
          Our <span className="highlight">Products</span>
        </h1>
      </div>
    </div>

    {/* Description and Buttons */}
    <div className="row align-items-center mb-5">
      <div className="col-md-6">
        <h5 className="lead mb-0">
          Discover a range of comprehensive and customizable banking products at YourBank,
          designed to suit your unique financial needs and aspirations.
        </h5>
      </div>
      <div className="col-md-6 text-md-end mt-3 mt-md-0">
        <button className="btn btn-outline-theme me-2">For Individuals</button>
        <button className="btn btn-outline-theme">For Businesses</button>
      </div>
    </div>

    {/* Product Cards */}
    <div className="row text-center">
      <div className="col-md-4 mb-4">
        <i className="fas fa-briefcase product-icon"></i>
        <h5>Checking Accounts</h5>
        <p>Manage your daily transactions with ease using our flexible checking accounts.</p>
      </div>
      <div className="col-md-4 mb-4">
        <i className="fas fa-search product-icon"></i>
        <h5>Savings Accounts</h5>
        <p>Grow your wealth with competitive interest rates and secure savings options.</p>
      </div>
      <div className="col-md-4 mb-4">
        <i className="fas fa-money-bill-wave product-icon"></i>
        <h5>Loans & Mortgages</h5>
        <p>Access affordable loans and personalized mortgage solutions to reach your goals.</p>
      </div>
    </div>
  </div>
</section>

<section className="use-cases-section py-5">
  <div className="container">
    <h2 className="section-title">
      Use <span className="highlight">Cases</span>
    </h2>
    <p className="section-subtitle mb-5">
      At YourBank, we cater to the diverse needs of individuals and businesses alike,
      offering a wide range of financial solutions.
    </p>

    {/* Individual Use Cases */}
    <div className="row align-items-center mb-5">
  <div className="col-md-6">
    <div className="d-flex flex-wrap justify-content-center">
      <div className="use-case-card text-center m-2">
        <i className="fas fa-coins icon"></i>
        <p>Managing Personal Finances</p>
      </div>
      <div className="use-case-card text-center m-2">
        <i className="fas fa-piggy-bank icon"></i>
        <p>Saving for the Future</p>
      </div>
      <div className="use-case-card text-center m-2">
        <i className="fas fa-home icon"></i>
        <p>Homeownership</p>
      </div>
      <div className="use-case-card text-center m-2">
        <i className="fas fa-graduation-cap icon"></i>
        <p>Education Funding</p>
      </div>
    </div>
  </div>


      <div className="col-md-6">
        <h4>For Individuals</h4>
        <p>
          For individuals, our mortgage services pave the way to homeownership,
          and our flexible personal loans provide vital support during various
          life milestones. We also prioritize retirement planning, ensuring a
          financially secure future for our customers.
        </p>
        <div className="row text-center my-4">
          <div className="col">
            <h5 className="stat">78%</h5>
            <p>Secure Retirement Planning</p>
          </div>
          <div className="col">
            <h5 className="stat">63%</h5>
            <p>Manageable Debt Consolidation</p>
          </div>
          <div className="col">
            <h5 className="stat">91%</h5>
            <p>Reducing Financial Burdens</p>
          </div>
        </div>
        <Link to="#" className="btn btn-outline-theme">Learn More</Link>
      </div>
    </div>

    {/* Business Use Cases */}
    <div className="row align-items-center">
      <div className="col-md-6">
        <h4>For Business</h4>
        <p>
          For businesses, we empower growth with working capital solutions that
          optimize cash flow, and our tailored financing options fuel business
          expansion. Whatever your financial aspirations, YourBank is committed
          to providing the right tools and support to achieve them.
        </p>
        <div className="row text-center my-4">
          <div className="col">
            <h5 className="stat">65%</h5>
            <p>Cash Flow Management</p>
          </div>
          <div className="col">
            <h5 className="stat">70%</h5>
            <p>Drive Business Expansion</p>
          </div>
          <div className="col">
            <h5 className="stat">45%</h5>
            <p>Streamline Payroll Processing</p>
          </div>
        </div>
        <Link to="#" className="btn btn-outline-theme">Learn More</Link>
      </div>

      <div className="col-md-6 d-flex flex-wrap gap-3 justify-content-center">
        <div className="use-case-card text-center">
          <i className="fas fa-lightbulb icon"></i>
          <p>Startups and Entrepreneurs</p>
        </div>
        <div className="use-case-card text-center">
          <i className="fas fa-money-check icon"></i>
          <p>Cash Flow Management</p>
        </div>
        <div className="use-case-card text-center">
          <i className="fas fa-chart-line icon"></i>
          <p>Business Expansion</p>
        </div>
        <div className="use-case-card text-center">
          <i className="fas fa-dollar-sign icon"></i>
          <p>Payment Solutions</p>
        </div>
      </div>
    </div>
  </div>
</section>

<section className="testimonials-section py-5">
        <div className="container-fluid px-5 text-center">
          <h1 className="mb-4">
            What Our <span className="highlight">Clients Say</span>
          </h1>

          <div className="w-100 my-5">
		  <Swiper
  modules={[Autoplay]}
  slidesPerView={3}
  centeredSlides={true}
  loop={true}
  spaceBetween={30}
  autoplay={{
    delay: 5000,
    disableOnInteraction: false,
    pauseOnMouseEnter: true,
  }}
  speed={800}
  className="testimonial-swiper"
  breakpoints={{
    0: {
      slidesPerView: 1,
    },
    768: {
      slidesPerView: 1.5,
    },
    1024: {
      slidesPerView: 3,
    },
  }}
>
  {testimonials.map((t, index) => (
    <SwiperSlide key={index}>
      <div className="testimonial-card">
        <i className="fas fa-quote-left quote-icon"></i>
        <p className="testimonial-text">{t.text}</p>
        <h5 className="testimonial-name">{t.name}</h5>
        <p className="testimonial-role">{t.role}</p>
      </div>
    </SwiperSlide>
  ))}
</Swiper>

</div>

        </div>
      </section>









        </>

    );
};
export default Home;