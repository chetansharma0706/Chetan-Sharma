import "./skills.css";
import { 
  SiHtml5, 
  SiCss3, 
  SiJavascript, 
  SiReact, 
  SiNodedotjs, 
  SiGit, 
  SiMongodb, 
  SiExpress, 
  SiPython 
} from "react-icons/si";

import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

const Skills = () => {

  useGSAP(() => {
      const mm = gsap.matchMedia();
      mm.add("(min-width: 769px)", () => {
        gsap.from(".skill-title , .skill-subtitle", {
          y: 70,
          duration: 0.5,
          ease: "power4.out",
          scrollTrigger: {
            trigger: ".skills_headings",
            start: "top 75%",
            scrub: 1,
            // markers: true,
          },
        });
  
        gsap.from(".card1", {
          y: 100,
          rotate: -20,
          opacity: 0,
          duration: 0.5,
          ease: "power3.out",
          scrollTrigger: {
            trigger: ".skills__content",
            start: "top 75%",
            scrub: 1,
            // markers: true,
          },
        });


        gsap.from(".card2", {
          y: 100,
          rotate: 20,
          opacity: 0,
          duration: 0.5,
          ease: "power3.out",
          scrollTrigger: {
            trigger: ".skills__content",
            start: "top 75%",
            scrub: 1,
            // markers: true,
          },
        });
      }
      );
  
      mm.add("(max-width: 768px)", () => {
        gsap.from(".skill-title , .skill-subtitle", {
          y: 50,
          duration: 0.5,
          ease: "power4.out",
          scrollTrigger: {
            trigger: ".skills_headings",
            start: "top bottom",
            scrub: 1,
            // markers: true,
          },
        });
  
        gsap.from(".skill__card", {
          x: 100,
          opacity: 0,
          duration: 0.5,
          ease: "power3.out",
          scrollTrigger: {
            trigger: ".skills__content",
            start: "top bottom",
            scrub: 1,
            // markers: true,
          },
        });

      });
    });
  return (
    <section className="skills section" id="skills">
      <div className="skills__container container grid">
        <div className="skills_headings">
          <h2 className="section__title skill-title">Skills</h2>
          <span className="section__subtitle skill-subtitle">My Technical Level</span>
        </div>

        <div className="skills__content grid">
          <div className="skill__card card1">
            <h3 className="skill__title">Frontend Developer</h3>
            <div className="skill__card-grid grid">
              <div className="skill__data">
                <SiHtml5 className="skill__icon" />
                <div  className="skills-info">
                  <h3 className="skill__name">HTML</h3>
                  <span className="skill__level">Intermediate</span>
                </div>
              </div>

              <div className="skill__data">
                <SiCss3 className="skill__icon" />
                <div className="skills-info">
                  <h3 className="skill__name">CSS</h3>
                  <span className="skill__level">Intermediate</span>
                </div>
              </div>

              <div className="skill__data">
                <SiJavascript className="skill__icon" />
                <div className="skills-info">
                  <h3 className="skill__name">JavaScript</h3>
                  <span className="skill__level">Intermediate</span>
                </div>
              </div>

              <div className="skill__data">
                <SiReact className="skill__icon" />
                <div className="skills-info">
                  <h3 className="skill__name">React</h3>
                  <span className="skill__level">Intermediate</span>
                </div>
              </div>

              <div className="skill__data">
                <SiNodedotjs className="skill__icon" />
                <div className="skills-info">
                  <h3 className="skill__name">Node.js</h3>
                  <span className="skill__level">Intermediate</span>
                </div>
              </div>

              <div className="skill__data">
                <SiGit className="skill__icon" />
                <div className="skills-info">
                  <h3 className="skill__name">Git</h3>
                  <span className="skill__level">Intermediate</span>
                </div>
              </div>
            </div>
          </div>

          <div className="skill__card card2">
            <h3 className="skill__title">Backend Developer</h3>
            <div className="skill__card-grid grid">
              <div className="skill__data">
                <SiMongodb className="skill__icon" />
                <div className="skills-info">
                  <h3 className="skill__name">MongoDB</h3>
                  <span className="skill__level">Intermediate</span>
                </div>
              </div>

              <div className="skill__data">
                <SiExpress className="skill__icon" />
                <div className="skills-info">
                  <h3 className="skill__name">Express.js</h3>
                  <span className="skill__level">Intermediate</span>
                </div>
              </div>

              <div className="skill__data">
                <SiPython className="skill__icon" />
                <div className="skills-info">
                  <h3 className="skill__name">Python</h3>
                  <span className="skill__level">Intermediate</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
