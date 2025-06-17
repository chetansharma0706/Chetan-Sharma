import "./home.css";
import { RiSendPlaneFill } from "react-icons/ri";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

const Home = () => {
  useGSAP(()=>{
    const mm = gsap.matchMedia();
    mm.add("(min-width: 769px)", () => {
      gsap.from(".home__title , .home__subtitle", {
      y: 30,
      duration: 0.5,
      ease: "power4.out",
      scrollTrigger: {
        trigger: ".slide",
        start: "top 75%",
        scrub: 1,
        // markers: true,
      },
    })

    gsap.from(".home__name , .home__description", {
      y: 50,
      duration: 0.5,
      ease: "power3.out",
      scrollTrigger: {
        trigger: ".slide",
        start: "top 75%",
        scrub: 1,
        // markers: true,
      },
    })

     gsap.from("#contact , .home__social", {
      x: -30,
      opacity: 0,
      ease:"power4.out",
      duration: 0.5,
      scrollTrigger: {
        trigger: ".slide",
        start: "top center",
        scrub: -1,
        // markers: true,
      },
    })

    gsap.from(".home__img", {
      x: 150,
      opacity: 0,
      ease:"power4.out",
      duration: 1,
      scrollTrigger: {
        trigger: ".slide",
        start: "top center",
        scrub: -1,
        // markers: true,
      },
    })

    })

    // For smaller screens
    mm.add("(max-width: 768px)", () => {
      gsap.from(".home__title , .home__subtitle", {
      y: 30,
      duration: 0.5,
      ease: "power4.out",
      scrollTrigger: {
        trigger: ".slide",
        start: "top 75%",
        scrub: 1,
        // markers: true,
      },
    })

    gsap.from(".home__name , .home__description", {
      y: 50,
      duration: 0.5,
      ease: "power3.out",
      scrollTrigger: {
        trigger: ".slide",
        start: "top 75%",
        scrub: 1,
        // markers: true,
      },
    })

     gsap.from("#contact", {
      x: -30,
      opacity: 0,
      ease:"power4.out",
      duration: 0.5,
      scrollTrigger: {
        trigger: ".slide",
        start: "top center",
        scrub: -1,
        // markers: true,
      },
    })

    gsap.from(".home__img", {
      x: 150,
      opacity: 0,
      ease:"power4.out",
      duration: 1,
      scrollTrigger: {
        trigger: ".slide",
        start: "top bottom",
        scrub: -1,
        // markers: true,
      },
    })


    gsap.from(".home__social", {
      x: -150,
      opacity: 0,
      ease:"power4.out",
      duration: 1,
      scrollTrigger: {
        trigger: ".slide",
        start: "top bottom",
        scrub: -1,
        // markers: true,
      },
    })
    })

    
   

  })
  return (
    <section className="home section" id="home">
      <div className="home__container container grid">
        <div className="home__content grid">
          {/* Home Social Links */}
          <div className="home__social">
            <a href="#" className="home__social-icon" target="_blank">
              <i className="ri-linkedin-box-fill"></i>
            </a>
            <a href="#" className="home__social-icon" target="_blank">
              <i className="ri-github-fill"></i>
            </a>
            <a href="#" className="home__social-icon" target="_blank">
              <i className="ri-dribbble-fill"></i>
            </a>
            <a href="#" className="home__social-icon" target="_blank">
              <i className="ri-behance-fill"></i>
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
              <h3 className="home__subtitle">🖥️ 🎨 Frontend Developer 🟠🔵</h3>
              </div>
            </div>

            <p className="home__description">
              I am a frontend developer with experience in building web
              applications using React, JavaScript, and CSS. I am passionate
              about creating user-friendly interfaces and optimizing
              performance.
            </p>
            <a href="#contact" className="button button--flex" id="contact">
              Say Hello
              <RiSendPlaneFill className="button__icon" />
            </a>
          </div>
          <div className="home__img"></div>

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
