import React from "react";


const Footer = () => {
  return (
    <React.Fragment>
      <footer className="footer pt-100">
        <div className="container">
          <div className="copyright-area">
            <div className="row align-items-center">
              <div className="col-md-6">
                <div className="footer-social-links">
                  <ul className="d-flex">
                    <li>
                      <a href="">
                        <i className="lni lni-facebook-filled"></i>
                      </a>
                    </li>
                    <li>
                      <a href="">
                        <i className="lni lni-linkedin-original"></i>
                      </a>
                    </li>
                    <li>
                      <a href="">
                        <i className="lni lni-instagram-filled"></i>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-md-6">
                <p className="wow fadeInUp" data-wow-delay=".3s">
                  Made by{" "}
                  <a href="https://growpos.in/media" rel="nofollow">
                    growpos@media
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </footer>
      <a href="#" className="scroll-top">
        <i className="lni lni-arrow-up"></i>
      </a>
    </React.Fragment>
  );
};

export default Footer
