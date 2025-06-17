import "./about.css";
import { FiDownload } from 'react-icons/fi';
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

const About = () => {
  useGSAP(() => {
    const mm = gsap.matchMedia();
    mm.add("(min-width: 769px)", () => {
      gsap.from(".about-title , .about-subtitle", {
        y: 70,
        duration: 0.5,
        ease: "power4.out",
        scrollTrigger: {
          trigger: ".about_headings",
          start: "top 75%",
          scrub: 1,
          // markers: true,
        },
      });

      gsap.from(".about__data", {
        x: 150,
        opacity: 0,
        duration: 0.5,
        ease: "power3.out",
        scrollTrigger: {
          trigger: ".about__data",
          start: "top 75%",
          scrub: 1,
          // markers: true,
        },
      });

      gsap.from(".about__img", {
        x: -150,
        rotate:-20,
        opacity: 0,
        duration: 0.5,
        ease: "power3.out",
        scrollTrigger: {
          trigger: ".about__data",
          start: "top 75%",
          scrub: 1,
          // markers: true,
        },
      });
    }
    );

    mm.add("(max-width: 768px)", () => {
      gsap.from(".about-title , .about-subtitle", {
        y: 50,
        duration: 0.5,
        ease: "power4.out",
        scrollTrigger: {
          trigger: ".about_headings",
          start: "top 75%",
          scrub: 1,
          // markers: true,
        },
      });

      gsap.from(".about__data", {
        x: 100,
        opacity: 0,
        duration: 0.5,
        ease: "power3.out",
        scrollTrigger: {
          trigger: ".about__data",
          start: "top bottom",
          scrub: 1,
          // markers: true,
        },
      });

      gsap.from(".about__img", {
        x: -100,
        rotate:-20,
        opacity: 0,
        duration: 0.5,
        ease: "power3.out",
        scrollTrigger: {
          trigger: ".about__data",
          start: "top bottom",
          scrub: 1,
          // markers: true,
        },
      });
    });
  });
  return (
    <section className="about section" id="about">
      

      <div className="about__container container grid">
        <div className="about_headings titles">
        <h1 className="section__title about-title">About Me</h1>
        <span className="section__subtitle about-subtitle">My introduction</span>
      </div>
        <div className="about__content grid">
        <div className="about__img"></div>
        <div className="about__data">
            <div className="about__info">
                <div className="about__info-item">
                    <i className="ri-award-line about__icon"></i>
                    <h3 className="about__title">Experience</h3>
                    <span className="about__subtitle">1 Year Working</span>
                </div>

                <div className="about__info-item">
                    <i className="ri-award-line about__icon"></i>
                    <h3 className="about__title">Experience</h3>
                    <span className="about__subtitle">1 Year Working</span>
                </div>

            </div>
          <p className="about__description">
            I'm a Frontend Developer with a passion for creating beautiful and
            functional web applications. I have experience in HTML, CSS, JavaScript, and React.
            I love learning new technologies and improving my skills.
          </p>
          <a href="./about.css" download className="button">
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
