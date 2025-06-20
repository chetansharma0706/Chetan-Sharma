import ThemeToggle from "../ThemeToggler/themetoggler";
import "./header.css";
import { useState } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

const Header = () => {
  const [toggleMenu, setToggleMenu] = useState(false);

  useGSAP(() => {
    // Common animation
    gsap.from(".nav__menu , .nav__btns", {
      y: 50,
      duration: 0.6,
      ease: "power4.out",
      delay: 1,
    });
  });

  return (
    <header className="header">
      <nav className="nav container">
        <div
          className={
            toggleMenu ? "nav__menu grid show__menu" : "nav__menu grid"
          }
        >
          <ul className="nav__list">
            <li className="nav__item">
              <a href="#projects" className="nav__link">
                <i className="ri-briefcase-line nav__icon"></i>Projects
              </a>
            </li>
            <li className="nav__item">
              <a href="#contact" className="nav__link">
                <i className="ri-mail-send-line nav__icon"></i> Contact
              </a>
            </li>
            <li className="nav__item hideOnlargeWindow">
              <a href="#about" className="nav__link">
                <i className="ri-user-line nav__icon"></i> About
              </a>
            </li>
            <li className="nav__item hideOnlargeWindow">
              <a href="#skills" className="nav__link">
                <i className="ri-tools-line nav__icon"></i> Skills
              </a>
            </li>
          </ul>
          <div
            className="nav__close"
            onClick={() => setToggleMenu(!toggleMenu)}
            id="nav-close"
          >
            <i className="ri-close-line"></i>
          </div>
        </div>

        <div className="nav__logo">
          {/* <h1 className="code-text">Hello there! I am</h1> */}
          <a href="index.html">Chetan Sharma</a>
        </div>

        <div className="nav__btns">
          <div className="theme-btn">
            <ThemeToggle />
          </div>

          <div
            className="nav__toggle"
            onClick={() => setToggleMenu(!toggleMenu)}
          >
            <i className="ri-function-line"></i>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
