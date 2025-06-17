import ThemeToggle from "../ThemeToggler/themetoggler";
import "./header.css";
import { useState } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Header = () => {
  const [toggleMenu, setToggleMenu] = useState(false);

  useGSAP(() => {
    const mm = gsap.matchMedia(); 

    mm.add("(min-width: 769px)", () => {
    gsap.fromTo(
      ".nav__logo",
      {
        y: -180,
        scale: 5,
        color: "#fff",
        textShadow: "2px 2px 4px rgba(0, 0, 0, 0.6)",
      },
      {
        y: 0,
        scale: 1,
        duration:1,
        color:"var(--text-color)",
        textShadow: "none",
        ease: "power4.out",
        scrollTrigger: {
          trigger: ".nav__logo",
          start: "top bottom",
          end: "bottom top",
          scrub: -1,
        },
      }
    );
  })

    mm.add("(max-width: 768px)", () => {
      gsap.fromTo(
      ".nav__logo",
      {
        y: -120,
        x:50,
        scale: 2,
        color: "#fff",
        textShadow: "2px 2px 4px rgba(0, 0, 0, 0.6)",
      },
      {
        y: 0,
        x:0,
        scale: 1,
        duration:1,
        color:"var(--text-color)",
        textShadow: "none",
        ease: "power4.out",
        scrollTrigger: {
          trigger: ".nav__logo",
          start: "top bottom",
          end: "bottom top+=250", // bigger distance
          scrub: -1,
        },
      }
    );



   
  })
  })


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
              <a href="#services" className="nav__link">
                <i className="ri-briefcase-line nav__icon"></i>Projects
              </a>
            </li>
            <li className="nav__item">
              <a href="#contact" className="nav__link">
                <i className="ri-mail-send-line nav__icon"></i> Contact
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

        <a href="index.html" className="nav__logo">
          Chetan Sharma
        </a>

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
  
}

export default Header;
