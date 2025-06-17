import "./contact.css";
import { MdEmail } from "react-icons/md";
import { FaLinkedin , FaGithub, FaWhatsapp } from "react-icons/fa";
import { RiSendPlaneFill } from 'react-icons/ri';
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);


const Contact = () => {

  useGSAP(() => {
          const mm = gsap.matchMedia();
          mm.add("(min-width: 769px)", () => {
            gsap.from(".contact-title , .contact-subtitle", {
              y: 70,
              duration: 0.5,
              ease: "power4.out",
              scrollTrigger: {
                trigger: ".contact_headings",
                start: "top 75%",
                scrub: 1,
                // markers: true,
              },
            });
      
            gsap.from(".contact__content", {
              x: 100,
              opacity: 0,
              duration: 0.5,
              ease: "power3.out",
              scrollTrigger: {
                trigger: ".projects__content",
                start: "top 75%",
                scrub: 1,
                // markers: true,
              },
            });

            gsap.from(".contact__form", {
              y: 100,
              rotate: 20,
              opacity: 0,
              duration: 0.5,
              ease: "power3.out",
              scrollTrigger: {
                trigger: ".projects__content",
                start: "top 75%",
                scrub: 1,
                // markers: true,
              },
            });
          }
          );
      
          mm.add("(max-width: 768px)", () => {
            gsap.from(".project-title , .project-subtitle", {
              y: 50,
              duration: 0.5,
              ease: "power4.out",
              scrollTrigger: {
                trigger: ".projects__content",
                start: "top 90%",
                scrub: 1,
                // markers: true,
              },
            });
      
            gsap.from(".projects__card", {
              rotate: 20,
              x: 100,
              opacity: 0,
              duration: 0.5,
              ease: "power3.out",
              scrollTrigger: {
                trigger: ".skills__content",
                start: "top center",
                scrub: 1,
                // markers: true,
              },
            });
    
          });
        });
  return (
    <section className="contact section" id="contact">
      <div className="contact__container container grid">

        {/* Heading */}
        <div className="contact_headings titles">
          <span className="section__subtitle contact-title">Get in touch</span>
          <h1 className="section__title contact-subtitle">Contact Me</h1>
        </div>

        {/* Grid Layout: Left = Links, Right = Form */}
        <div className="contact__content-wrapper grid">

          {/* Left: Contact Links */}
          <div className="contact__content">
            <a
              href="mailto:Example@email.com"
              target="_blank"
              rel="noreferrer"
              className="contact__link"
            >
              <MdEmail size={20} />
              <p>Example@email.com</p>
            </a>
            <a
              href="https://www.linkedin.com/in/yourprofile"
              target="_blank"
              rel="noreferrer"
              className="contact__link"
            >
              <FaLinkedin size={20} />
              <p>LinkedIn</p>
            </a>
            <a
              href="https://www.linkedin.com/in/yourprofile"
              target="_blank"
              rel="noreferrer"
              className="contact__link"
            >
              <FaWhatsapp size={20} />
              <p>WhatsApp</p>
            </a>
            <a
              href="https://www.linkedin.com/in/yourprofile"
              target="_blank"
              rel="noreferrer"
              className="contact__link"
            >
              <FaGithub size={20} />
              <p>Github</p>
            </a>
          </div>

          {/* Right: Contact Form */}
          <form className="contact__form">
            <input type="text" placeholder="Your Name" className="contact__input" required />
            <input type="email" placeholder="Your Email" className="contact__input" required />
            <textarea
              placeholder="Your Message"
              className="contact__input contact__textarea"
              required
            ></textarea>
            <button type="submit" className="button">Send Message               <RiSendPlaneFill className="button__icon" />
            </button>
          </form>
        </div>

        {/* Optional Nav Items (keep if needed) */}
        <div className="nav__items">
          <ul className="nav__list">
            <li className="nav__item"><a href="#about" className="nav__link">About</a></li>
            <li className="nav__item"><a href="#skills" className="nav__link">Skills</a></li>
            <li className="nav__item"><a href="#services" className="nav__link">Services</a></li>
            <li className="nav__item"><a href="#portfolio" className="nav__link">Portfolio</a></li>
          </ul>
        </div>
        
      </div>
    </section>
  );
};

export default Contact;
