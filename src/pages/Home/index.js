import React from "react";
import HomeContent from "../../content/HomeContent.json";
import ContactFrom from "../../components/ContactForm";
import Courses from "../../components/Courses";
import hero from "../../assest/assets/img/hero/hero-img.png";
import dots from "../../assest/assets/img/hero/dots.shape.svg";
import Header from "../../components/Header";
import Footer from "../../components/Footer"

const Home = () => {
  const { title, text, about } = HomeContent;
  return (
    <>
      <Header />
      <section id="home" className="hero-section">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-xl-5 col-lg-6">
              <div className="hero-content-wrapper">
                <h1 className="mb-25 wow fadeInDown" data-wow-delay=".2s">
                  {title}
                </h1>
                <p className="mb-35 wow fadeInLeft" data-wow-delay=".4s">
                  {text}
                </p>
              </div>
            </div>
            <div className="col-xl-7 col-lg-6">
              <div className="hero-img">
                <div className="d-inline-block hero-img-right">
                  <img
                    src={hero}
                    alt="image"
                    className="image wow fadeInRight"
                    data-wow-delay=".5s"
               
                  />
                  <img src={dots} alt="" className="dot-shape" />
                  <div className="video-btn">
                    <a href="" className="glightbox">
                      <i className="lni lni-play"></i>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section id="about" className="pt-100">
        <div className="about-section">
          <div className="container">
            <div className="row">
              <div className="col-xl-6 col-lg-6">
                <div className="about-img-wrapper">
                  <div
                    className="about-img position-relative d-inline-block wow fadeInLeft"
                    data-wow-delay=".3s"
                  >
                    <img
                      src="https://firebasestorage.googleapis.com/v0/b/cyber-threat-solutions.appspot.com/o/logo.png?alt=media&token=e846ec3a-6137-4498-89dc-b3dbc204d83c"
                      alt=""
                    />
                  </div>
                </div>
              </div>
              <div className="col-xl-6 col-lg-6">
                <div className="about-content-wrapper">
                  <div className="section-title">
                    <span className="wow fadeInUp" data-wow-delay=".2s">
                      About Us
                    </span>
                    <h2 className="mb-40 wow fadeInRight" data-wow-delay=".4s">
                      {about.title}
                    </h2>
                  </div>
                  <div className="about-content">
                    <p className="mb-45 wow fadeInUp" data-wow-delay=".6s">
                      {about.content}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Courses />
      <ContactFrom id="contact" />
      <Footer/>
    </>
  );
};

export default Home;
