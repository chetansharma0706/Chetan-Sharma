import "./home.css";
import { RiSendPlaneFill } from "react-icons/ri";
import { MdEmail } from "react-icons/md";
import {  FaWhatsapp } from "react-icons/fa";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

const Home = () => {
  useGSAP(() => {
  const mm = gsap.matchMedia();

  mm.add("(min-width: 769px)", () => {
    // Title and subtitle on scroll
    gsap.fromTo(
      ".home__title, .home__subtitle",
      { y: 60, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        ease: "power4.out",
        scrollTrigger: {
          trigger: ".home__title",
          start: "top 80%",
          end: "top 30%",
          scrub: 2,
        },
      }
    );

    // Name, description, button
    gsap.fromTo(
      ".home__name, .home__description, .hero-btn",
      { y: 80, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        ease: "power4.out",
        scrollTrigger: {
          trigger: ".home__name",
          start: "top 85%",
          end: "top 40%",
          scrub: 2,
        },
      }
    );

    // Social icons
    gsap.fromTo(
      ".home__social",
      { x: -100, opacity: 0 },
      {
        x: 0,
        opacity: 1,
        ease: "power4.out",
        scrollTrigger: {
          trigger: ".home__social",
          start: "top 90%",
          end: "top 50%",
          scrub: 2,
        },
      }
    );

    // Image
    gsap.fromTo(
      ".home__img",
      { x: 120, opacity: 0 },
      {
        x: 0,
        opacity: 1,
        ease: "power4.out",
        scrollTrigger: {
          trigger: ".home__img",
          start: "top 85%",
          end: "top 30%",
          scrub: 2,
        },
      }
    );
  });

  // Mobile view
  mm.add("(max-width: 768px)", () => {
    gsap.fromTo(
      ".home__title, .home__subtitle",
      { y: 40, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        ease: "power4.out",
        scrollTrigger: {
          trigger: ".home__title",
          start: "top 85%",
          end: "top 40%",
          scrub: 2,
        },
      }
    );

    gsap.fromTo(
      ".home__name, .home__description",
      { y: 50, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        ease: "power4.out",
        scrollTrigger: {
          trigger: ".home__name",
          start: "top 85%",
          end: "top 40%",
          scrub: 2,
        },
      }
    );

    gsap.fromTo(
      ".hero-btn",
      { x: -30, opacity: 0 },
      {
        x: 0,
        opacity: 1,
        ease: "power4.out",
        scrollTrigger: {
          trigger: ".hero-btn",
          start: "top 90%",
          end: "top 50%",
          scrub: 2,
        },
      }
    );

    gsap.fromTo(
      ".home__img",
      { x: 100, opacity: 0 },
      {
        x: 0,
        opacity: 1,
        ease: "power4.out",
        scrollTrigger: {
          trigger: ".home__img",
          start: "top 85%",
          end: "top 30%",
          scrub: 2,
        },
      }
    );

    gsap.fromTo(
      ".home__social",
      { x: -80, opacity: 0 },
      {
        x: 0,
        opacity: 1,
        ease: "power4.out",
        scrollTrigger: {
          trigger: ".home__social",
          start: "top 90%",
          end: "top 50%",
          scrub: 2,
        },
      }
    );
  });
});

  return (
    <section className="home section" id="home">
      <div className="home__container container grid">
        <div className="home__content grid">
          {/* Home Social Links */}
          <div className="home__social">
            <a href="https://www.linkedin.com/in/chetansharma2003" className="home__social-icon" target="_blank">
              <i className="ri-linkedin-box-fill"></i>
            </a>
            <a href="https://github.com/chetansharma0706" className="home__social-icon" target="_blank">
              <i className="ri-github-fill"></i>
            </a>
            <a href="https://wa.me/919870740311?text=Hi! Chetan, I saw your portfolio!" className="home__social-icon" target="_blank">
              <FaWhatsapp size={20} />
            </a>
            <a href="mailto:yourgmail@gmail.com?subject=Let's Connect&body=Hi! Chetan, I saw your portfolio!" className="home__social-icon" target="_blank">
              <MdEmail size={20} />
            </a>
          </div>

          <div className="home__data">
            <div className="home__headings">
              <div className="slide">
                <h4 className="home__title">Hi!👋</h4>
              </div>
              <div className="slide">
              <h1 className="home__name">I'm Chetan Sharma</h1>
              </div>
              <div className="slide">
              <h3 className="home__subtitle">🖥️ Full Stack Developer 🟠🔵</h3>
              </div>
            </div>

            <p className="home__description">
              I am a Full Stack Developer with a passion for
              turning ideas into real, usable digital products. From frontend
              interfaces to backend logic — I build end-to-end applications
              using JavaScript, React, Node.js, MongoDB, and modern tools like
              GSAP, Tailwind.
            </p>
            <div className="hero-btn">
            <a href="#contact" className="button button--flex" id="contact">
              Say Hello
              <RiSendPlaneFill className="button__icon" />
            </a>
            </div>
          </div>
          <div className="home__img">
          <img src="/myphoto.jpeg" alt="my-image" className="home-img" loading="lazy"/>
          </div>

          <a href="#about" className="scroll__down">
            <i className="ri-scroll-to-bottom-line scroll__down-icon"></i>
            <p className="scroll__down-name">Scrolldown</p>
            <i className="ri-arrow-down-s-line"></i>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Home;
