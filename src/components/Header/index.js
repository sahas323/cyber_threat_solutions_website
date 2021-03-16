import { useState, Fragment } from "react";
import * as S from "./styles";

const Header = ({ t }) => {
  const [visible, setVisibility] = useState(false);
  console.log(visible);
  const MenuItem = () => {
    const scrollTo = (id) => {
      const element = document.getElementById(id);
      element.scrollIntoView({
        behavior: "smooth",
      });
      setVisibility(false);
    };
    return (
      <Fragment>
        <div
          className="collapse navbar-collapse sub-menu-bar"
          id="navbarSupportedContent"
        >
          <ul id="nav" className="navbar-nav ms-auto">
            <li className="nav-item">
              <S.Label
                className="page-scroll"
                onClick={() => scrollTo("about")}
              >
                {"About"}
              </S.Label>
            </li>
            <li className="nav-item">
              <S.Label
                className="page-scroll"
                onClick={() => scrollTo("course")}
              >
                {"course"}
              </S.Label>
            </li>
            <li className="nav-item">
              <S.Label
                className="page-scroll"
                onClick={() => scrollTo("contact")}
              >
                {"contact"}
              </S.Label>
            </li>
          </ul>
        </div>
      </Fragment>
    );
  };

  return (
    <S.Header>
    <header className="header navbar-area">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-12">
            <nav className="navbar navbar-expand-lg">
              <a className="navbar-brand" href="/">
                <div className="section-title">
                  <span
                    className="wow fadeInUp"
                    data-wow-delay=".2s"
                    style={{
                      fontSize:"18px"
                    }}
         
                  >
                    CYBER THREAT SOLUTIONS
                  </span>
                </div>
              </a>
              <button
                className="navbar-toggler"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#navbarSupportedContent"
                aria-controls="navbarSupportedContent"
                aria-expanded="false"
                aria-label="Toggle navigation"
              >
                <span className="toggler-icon"></span>
                <span className="toggler-icon"></span>
                <span className="toggler-icon"></span>
              </button>
              <MenuItem />
            </nav>
          </div>
        </div>
      </div>
    </header>
    </S.Header>
  );
};

export default Header;
