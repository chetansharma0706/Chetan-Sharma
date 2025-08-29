import "./projects.css";
import { FiArrowRight } from "react-icons/fi";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

const Projects = () => {

  useGSAP(() => {
  const mm = gsap.matchMedia();

  // 💻 Desktop
  mm.add("(min-width: 769px)", () => {
    // Headings
    gsap.from(".project-title", {
      y: 60,
      duration: 0.6,
      ease: "power4.out",
      scrollTrigger: {
        trigger: ".projects_headings",
        start: "top 85%",
        scrub: 1,
      },
    });

    // Cards
      gsap.from(".projects__card", {
  y: 80,
  opacity: 0,
  rotate: 8,
  duration: 0.5,
  ease: "power3.out",
  stagger: 0.15,
  scrollTrigger: {
    trigger: ".projects__content",
    start: "top 90%",
    end: "top top", // <- important: define when animation should complete
    scrub: 0.3,
  },
});
  });

  // 📱 Mobile
  mm.add("(max-width: 768px)", () => {
    // Headings
    gsap.from(".project-title", {
      y: 40,
      duration: 0.6,
      ease: "power4.out",
      scrollTrigger: {
        trigger: ".projects_headings",
        start: "top 90%",
        scrub: 1,
      },
    });

    // Cards
    gsap.from(".projects__card", {
      x: 80,
      opacity: 0,
      rotate: 5,
      duration: 0.6,
      ease: "power3.out",
      stagger: 0.2,
      scrollTrigger: {
        trigger: ".projects__content",
        start: "top 95%",
        scrub: 1,
      },
    });
  });
});

  return (
    <section className="projects section" id="projects">
      <div className="projects__container container grid">
        <div className="projects_headings">
          <h2 className="section__title project-title">Projects</h2>
          <span className="section__subtitle project-subtitle">What I build</span>
        </div>
        <div className="projects__content grid">
          <div className="projects__card">
            <div className="card__image">
              <img src="./snaptesthomepage.png" alt="project1" loading="lazy"/>
            </div>
            <div className="project-info">
              <h3 className="projects__title">SnapTest- AI-powered Online Test Platform</h3>
              <p className="projects__description">
                SnapTest is an AI-powered platform that helps teachers create and share online tests in minutes.
              </p>
            </div>
            <div className="project__card-button">
              <a href="https://github.com/chetansharma0706/Snaptest" className="link" target="_blank">
                Github
                <FiArrowRight size={15} />
              </a>
              <a href="https://snaptest-9kz5.vercel.app/" className="link" target="_blank">
                Live Demo
                <FiArrowRight size={15} />
              </a>
            </div>
          </div>
          <div className="projects__card">
            <div className="card__image">
              <img src="https://github.com/chetansharma0706/Todo-List-React-App/blob/main/src/assets/TodoApp1.png?raw=true" alt="project3" loading="lazy"/>
            </div>
            <div className="project-info">
              <h3 className="projects__title">Easydone-Task Management App</h3>
              <p className="projects__description">
                A task management application for helping users stay organized and productive.
              </p>
            </div>
            <div className="project__card-button">
              <a href="https://github.com/chetansharma0706/Todo-List-React-App" className="link" target="_blank">
                Github
                <FiArrowRight size={15} />
              </a>
              <a href="https://easydone.netlify.app/" className="link" target="_blank">
                Live Demo
                <FiArrowRight size={15} />
              </a>
            </div>
          </div>
          <div className="projects__card">
            <div className="card__image">
              <img src="https://i.pinimg.com/1200x/63/c5/96/63c59653aae2a957b87face70346b4a6.jpg" alt="project2" loading="lazy"/>
            </div>
            <div className="project-info">
              <h3 className="projects__title">HouseHelper - Marketplace for Local Home Services</h3>
              <p className="projects__description">
               full-stack web applications 
              </p>
            </div>
            <div className="project__card-button">
              <a href="https://github.com/chetansharma0706/HomeHelper---MarketPlace-for-Local-Services" className="link" target="_blank">
                Github
                <FiArrowRight size={15} />
              </a>
              
            </div>
          </div>
          
        </div>
      </div>
    </section>
  );
};

export default Projects;
