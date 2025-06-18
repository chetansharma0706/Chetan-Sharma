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
              <img src="https://plus.unsplash.com/premium_photo-1720715202866-c3f23c60a165?q=80&w=1412&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="project1" loading="lazy"/>
            </div>
            <div className="project-info">
              <h3 className="projects__title">Web Development</h3>
              <p className="projects__description">
                I create responsive and user-friendly websites using the latest
                technologies.
              </p>
            </div>
            <div className="project__card-button">
              <a href="#" className="link">
                Github
                <FiArrowRight size={15} />
              </a>
              <a href="#" className="link">
                Live Demo
                <FiArrowRight size={15} />
              </a>
            </div>
          </div>
          <div className="projects__card">
            <div className="card__image">
              <img src="https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="project2" loading="lazy"/>
            </div>
            <div className="project-info">
              <h3 className="projects__title">App Development</h3>
              <p className="projects__description">
                I develop mobile applications for both iOS and Android platforms
                using React Native.
              </p>
            </div>
            <div className="project__card-button">
              <a href="#" className="link">
                Github
                <FiArrowRight size={15} />
              </a>
              <a href="#" className="link">
                Live Demo
                <FiArrowRight size={15} />
              </a>
            </div>
          </div>
          <div className="projects__card">
            <div className="card__image">
              <img src="https://plus.unsplash.com/premium_photo-1720715202740-b6401efc72c2?q=80&w=1412&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="project3" loading="lazy"/>
            </div>
            <div className="project-info">
              <h3 className="projects__title">SEO Optimization</h3>
              <p className="projects__description">
                I optimize websites to rank higher in search engine results,
                increasing visibility and traffic.
              </p>
            </div>
            <div className="project__card-button">
              <a href="#" className="link">
                Github
                <FiArrowRight size={15} />
              </a>
              <a href="#" className="link">
                Live Demo
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
