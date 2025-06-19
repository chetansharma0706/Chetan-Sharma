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
    const mm = gsap.matchMedia();

    mm.add(
      {
        isXL: "(min-width: 1200px)",
        isDesktop: "(min-width: 1025px) and (max-width: 1199px)",
        isLaptop: "(min-width: 769px) and (max-width: 1024px)",
        isMediumMobile: "(min-width: 426px) and (max-width: 768px)",
        isSmallMobile: "(min-width: 376px) and (max-width: 425px)",
        isMoreSmall: "(min-width: 321px) and (max-width: 375px)",
        isExtraSmall: "(max-width: 320px)",
      },
      (context: gsap.Context) => {
        const {
          isXL,
          isDesktop,
          isLaptop,
          isMediumMobile,
          isSmallMobile,
          isMoreSmall,
          isExtraSmall,
        } = context.conditions as {
          isXL?: boolean;
          isDesktop?: boolean;
          isLaptop?: boolean;
          isMediumMobile?: boolean;
          isSmallMobile?: boolean;
          isMoreSmall?: boolean;
          isExtraSmall?: boolean;
        };

        let animationProps: gsap.TweenVars = {};

        // if (isXL) {
        //   animationProps = { x: -310, y: -120, scale: 4 };
        // } else if (isDesktop) {
        //   animationProps = { x:-270, y: -100, scale: 3 };
        // } else if (isLaptop) {
        //   animationProps = { x: -220, y: -100, scale: 3 };
        // } else if (isMediumMobile) {
        //   animationProps = { x: 120, y: -90, scale: 3 };
        // } else if (isSmallMobile) {
        //   animationProps = { x: 50, y: -70, scale: 2 };
        // } else if (isMoreSmall) {
        //   animationProps = { x: 50, y: -70, scale: 2 };
        // } else if (isExtraSmall) {
        //   animationProps = { x: 50, y: -70, scale: 2 };
        // }

        if (isXL) {
          animationProps = { xPercent: "0", y: "-40vh", scale: 4 };
        } else if (isDesktop) {
          animationProps = { xPercent: "0", y: "-40vh", scale: 3 };
        } else if (isLaptop) {
          animationProps = { xPercent: "0", y: "-40vh", scale: 3 };
        } else if (isMediumMobile) {
          animationProps = { x: "0", y: "-40vh", scale: 3 };
        } else if (isSmallMobile) {
          animationProps = { x: "0", y: "-40vh", scale: 2 };
        } else if (isMoreSmall) {
          animationProps = { x: "0", y: "-40vh", scale: 2 };
        } else if (isExtraSmall) {
          animationProps = { x: "0", y: "-40vh", scale: 2 };
        }

        // Animation for nav__logo
        gsap.from(".nav__log", {
          ...animationProps,
          ease: "power4.out",
          scrollTrigger: {
            trigger: ".nav__logo",
            start: "top 0",
            scrub: 2,
            // markers: true, // enable for debugging
          },
        });

        // Common animation
        gsap.from(".nav__menu , .nav__btns", {
          y: 50,
          duration: 0.6,
          ease: "power4.out",
          delay: 1,
        });
      }
    );
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
