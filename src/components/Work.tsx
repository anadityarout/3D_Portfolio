import "./styles/Work.css";
import WorkImage from "./WorkImage";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(useGSAP);

// Project data array
const projects = [
  {
    id: 1,
    title: "Portfolio",
    category: "Web Design",
    tools: "Javascript, TypeScript, React, Threejs",
    image: "/images/placeholder.webp",
    alt: "Portfolio Project"
  },
  {
    id: 2,
    title: "E-commerce",
    category: "Web Development",
    tools: "React, Node.js, MongoDB",
    image: "/images/placeholder.webp",
    alt: "E-commerce Project"
  },
  {
    id: 3,
    title: "Mobile App",
    category: "App Development",
    tools: "React Native, Firebase",
    image: "/images/placeholder.webp",
    alt: "Mobile App Project"
  },
  // Add as many projects as you want
  {
    id: 4,
    title: "Dashboard UI",
    category: "UI/UX Design",
    tools: "Figma, Adobe XD",
    image: "/images/placeholder.webp",
    alt: "Dashboard Project"
  },
  {
    id: 5,
    title: "Game Development",
    category: "Game Design",
    tools: "Unity, C#",
    image: "/images/placeholder.webp",
    alt: "Game Project"
  }
];

const Work = () => {
  useGSAP(() => {
    let translateX: number = 0;
    function setTranslateX() {
      const box = document.getElementsByClassName("work-box");
      const rectLeft = document
        .querySelector(".work-container")!
        .getBoundingClientRect().left;
      const rect = box[0].getBoundingClientRect();
      const parentWidth = box[0].parentElement!.getBoundingClientRect().width;
      let padding: number =
        parseInt(window.getComputedStyle(box[0]).padding) / 2;
      translateX = rect.width * box.length - (rectLeft + parentWidth) + padding;
    }

    setTranslateX();

    let timeline = gsap.timeline({
      scrollTrigger: {
        trigger: ".work-section",
        start: "top top",
        end: "bottom top",
        scrub: true,
        pin: true,
        pinType: !ScrollTrigger.isTouch ? "transform" : "fixed",
        id: "work",
      },
    });

    timeline.to(".work-flex", {
      x: -translateX,
      duration: 40,
      delay: 0.2,
    });
  }, []);

  return (
    <div className="work-section" id="work">
      <div className="work-container section-container">
        <h2>
          My <span>Work</span>
        </h2>
        <div className="work-flex">
          {projects.map((project) => (
            <div className="work-box" key={project.id}>
              <div className="work-info">
                <div className="work-title">
                  <h3>0{project.id}</h3>
                  <div>
                    <h4>{project.title}</h4>
                    <p>{project.category}</p>
                  </div>
                </div>
                <h4>Tools and features</h4>
                <p>{project.tools}</p>
              </div>
              <WorkImage image={project.image} alt={project.alt} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Work;