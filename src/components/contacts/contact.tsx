import "./contact.css";
import { MdEmail } from "react-icons/md";
import { FaLinkedin, FaGithub, FaWhatsapp } from "react-icons/fa";
import { RiSendPlaneFill } from "react-icons/ri";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

const Contact = () => {
  useGSAP(() => {
    const mm = gsap.matchMedia();

    mm.add("(min-width: 769px)", () => {
      // Headings
      gsap.from(".contact-title , .contact-subtitle", {
        y: 80,
        opacity: 0,
        duration: 0.6,
        ease: "power4.out",
        scrollTrigger: {
          trigger: ".contact_headings",
          start: "top 85%",
          end: "top 40%",
          scrub: 0.5,
        },
      });

      // Contact links - left side
      gsap.from(".contact__content", {
        y: 100,
        opacity: 0,
        stagger: 0.2,
        duration: 1,
        ease: "back.out(1.7)",
        scrollTrigger: {
          trigger: ".contact__content",
          start: "top 85%",
          end: "top 50%",
          scrub: 0.4,
        },
      });

      // Contact form - right side
      gsap.from(
        ".contact__form input, .contact__form textarea, .contact__form button",
        {
          y: 100,
          opacity: 0,
          stagger: 0.2,
          duration: 0.6,
          ease: "power3.out",
          scrollTrigger: {
            trigger: ".contact__form",
            start: "top 90%",
            end: "top 40%",
            scrub: 0.4,
          },
        }
      );
    });

    mm.add("(max-width: 768px)", () => {
      // Headings
      gsap.from(".contact-title , .contact-subtitle", {
        y: 60,
        opacity: 0,
        duration: 0.5,
        ease: "power4.out",
        scrollTrigger: {
          trigger: ".contact_headings",
          start: "top 90%",
          toggleActions: "play none none reverse",
        },
      });

      // Links
      gsap.from(".contact__content", {
        x: -100,
        opacity: 0,
        stagger: 0.2,
        duration: 1,
        ease: "power4.out",
        scrollTrigger: {
          trigger: ".contact__content",
          start: "top 75%",
          end: "top 40%",
          scrub: true,
          // markers: true,
        },
      });

      // Form
      gsap.from(
        ".contact__form input, .contact__form textarea, .contact__form button",
        {
          y: 60,
          opacity: 0,
          stagger: 0.2,
          duration: 0.5,
          ease: "power3.out",
          scrollTrigger: {
            trigger: ".contact__form",
            start: "top 90%",
            toggleActions: "play none none reverse",
          },
        }
      );
    });
  });

  return (
    <section className="contact section" id="contact-me">
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
              href="mailto:yourgmail@gmail.com?subject=Let's Connect&body=Hi! Chetan, I saw your portfolio!"
              target="_blank"
              rel="noreferrer"
              className="contact__link"
            >
              <MdEmail size={20} />
              <p>chetansh...@gmail.com</p>
            </a>
            <a
              href="https://www.linkedin.com/in/chetansharma2003"
              target="_blank"
              rel="noreferrer"
              className="contact__link"
            >
              <FaLinkedin size={20} />
              <p>LinkedIn</p>
            </a>
            <a
              href="https://wa.me/919870740311?text=Hi! Chetan, I saw your portfolio!"
              target="_blank"
              rel="noreferrer"
              className="contact__link"
            >
              <FaWhatsapp size={20} />
              <p>WhatsApp</p>
            </a>
            <a
              href="https://github.com/chetansharma0706"
              target="_blank"
              rel="noreferrer"
              className="contact__link"
            >
              <FaGithub size={20} />
              <p>Github</p>
            </a>
          </div>

          {/* Right: Contact Form */}
          <form className="contact__form" action="https://formsubmit.co/chetansharma222555@gmail.com" method="POST">
            <input
              type="text"
              placeholder="Your Name"
              className="contact__input"
              required
            />
            <input
              type="email"
              placeholder="Your Email"
              className="contact__input"
              required
            />
            <textarea
              placeholder="Your Message"
              className="contact__input contact__textarea"
              required
            ></textarea>
              <input type="hidden" name="_next" value="https://chetan-sharma.netlify.app" />
  <input type="hidden" name="_captcha" value="false" />

            <button type="submit" className="button">
              Send Message <RiSendPlaneFill className="button__icon" />
            </button>
          </form>
        </div>

        {/* Optional Nav Items (keep if needed) */}
        <div className="nav__items">
          <ul className="nav__list">
            <li className="nav__item">
              <a href="#about" className="nav__link">
                About
              </a>
            </li>
            <li className="nav__item">
              <a href="#skills" className="nav__link">
                Skills
              </a>
            </li>
            <li className="nav__item">
              <a href="#contact-me" className="nav__link">
                Contact
              </a>
            </li>
            <li className="nav__item">
              <a href="#projects" className="nav__link">
                Portfolio
              </a>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Contact;
