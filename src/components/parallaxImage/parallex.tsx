import { useGSAP } from "@gsap/react";
import "./parallex.css";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import TextPlugin from "gsap/TextPlugin";
import { useRef } from "react";

gsap.registerPlugin(ScrollTrigger);
gsap.registerPlugin(TextPlugin);
const Parallex = () => {
  const texts = ["Hello there 👋 I'm", "Namaste 🙏 I'm"];
  let current = 0;
  const textRef = useRef<HTMLHeadingElement>(null);

  useGSAP(() => {
    gsap.to(".introName , .scroll-down", {
      y: 500,
      ease: "power4",
      scrollTrigger: {
        trigger: "intro-heading",
        start: "top 0",
        scrub: 1,
      },
    });

    gsap.to(".intro-title", {
      y: 500,
      ease: "power4",
      scrollTrigger: {
        trigger: "intro-heading",
        start: "top 0",
        scrub: 1,
      },
    });


    const el = textRef.current;
    const typeText = () => {
      gsap.to(el, {
        text: texts[current],
        direction: "ltr",
        duration: 0.5,
        ease: "none",
        onComplete: () => {
          gsap.delayedCall(2, () => {
            gsap.to(el, {
              text: "|",
              duration: 0.5,
              direction: "rtl",
              ease: "none",
              onComplete: () => {
                current = current === 0 ? 1 : 0;
                gsap.delayedCall(0.5, () => {
                  typeText();
                });
              },
            });
          });
        },
      });
    };

    typeText();
  });

  return (
    <>
      <div className="cover-image">
        <div className="intro-heading">
            <div className="introTitle"> <h1 ref={textRef} className="intro-title">
            Hello there! I am
          </h1></div>
         
          <div className="introName">
            {" "}
            <h1 className="intro-name">Chetan Sharma</h1>
          </div>
        </div>
        <div className="scroll-container">
        <div className="scroll-down">
          <a href="#home"><i className="ri-arrow-down-double-line"></i></a>
        </div>
        </div>
      </div>
    </>
  );
};

export default Parallex;
