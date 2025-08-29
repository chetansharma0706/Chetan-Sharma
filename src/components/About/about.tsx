import "./about.css";
import { FiDownload } from "react-icons/fi";
import { FaGraduationCap, FaRocket } from "react-icons/fa";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

const About = () => {
  useGSAP(() => {
    const mm = gsap.matchMedia();

    // 💻 For large screens
    mm.add("(min-width: 769px)", () => {
      gsap.from(".about-title, .about-subtitle", {
        y: 50,
        duration: 0.6,
        ease: "power4.out",
        scrollTrigger: {
          trigger: ".about_headings",
          start: "top 80%",
          scrub: 1,
        },
      });

      gsap.from(".about__data", {
        x: 120,
        opacity: 0,
        duration: 0.5,
        ease: "power3.out",
        scrollTrigger: {
          trigger: ".about__data",
          start: "top 80%",
          scrub: 1,
        },
      });

      gsap.from(".about__img", {
        x: -120,
        rotate: -15,
        opacity: 0,
        duration: 0.5,
        ease: "power3.out",
        scrollTrigger: {
          trigger: ".about__img",
          start: "top 85%",
          scrub: 1,
        },
      });
    });

    // 📱 For small screens
    mm.add("(max-width: 768px)", () => {
      gsap.from(".about-title, .about-subtitle", {
        y: 40,
        duration: 0.6,
        ease: "power4.out",
        scrollTrigger: {
          trigger: ".about_headings",
          start: "top 90%",
          scrub: 1,
        },
      });

      gsap.from(".about__data", {
        x: 100,
        opacity: 0,
        duration: 0.5,
        ease: "power3.out",
        scrollTrigger: {
          trigger: ".about__data",
          start: "top 95%",
          scrub: 1,
        },
      });

      gsap.from(".about__img", {
        x: -100,
        rotate: -15,
        opacity: 0,
        duration: 0.5,
        ease: "power3.out",
        scrollTrigger: {
          trigger: ".about__img",
          start: "top 95%",
          scrub: 1,
        },
      });
    });
  });

  return (
    <section className="about section" id="about">
      <div className="about__container container grid">
        <div className="about_headings titles">
          <h1 className="section__title about-title">About Me</h1>
          <span className="section__subtitle about-subtitle">
            My introduction
          </span>
        </div>
        <div className="about__content grid">
          <div className="about__img">
            <img
              src="/profilephoto.jpg"
              alt="About Image"
              className="about-img"
              loading="lazy"
            />
          </div>
          <div className="about__data">
            <div className="about__info">
              <div className="about__info-item">
                <FaGraduationCap className="text-lg text-accent" />
                <h3 className="about__title">Btech Student</h3>
                <span className="about__subtitle">building real projects</span>
              </div>

              <div className="about__info-item">
                 <FaRocket className="text-lg text-accent" />
                <h3 className="about__title">10+ Projects Built</h3>
                <span className="about__subtitle">From frontend to backend.</span>
              </div>
            </div>
            <p className="about__description">
              I’m Chetan Sharma, a Full Stack Developer with a passion for
              turning ideas into real, usable digital products. From frontend
              interfaces to backend logic — I build end-to-end applications
              using JavaScript, React, Node.js, MongoDB, and modern tools like
              GSAP, Tailwind.
            </p>
            <a href="./resume_chetan_sharma.pdf" download className="button">
              <span>Download CV</span>
              {/* <i className="ri-arrow-right-up-line button__icon"></i> */}
              <FiDownload className="button__icon" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
export default About;
