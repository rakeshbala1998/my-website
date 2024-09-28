import { useEffect, useState, useRef } from "react";
import Image from "next/legacy/image";
import me from "../public/hero.jpg";
import "./styles.css";
import "./collapse.css";

const Hero = () => {
  const salutations = [
    "Hi!👋 My name is",
    "नमस्ते!👋 मेरा नाम है",
    "হ্যালো!👋 আমার নাম",
    "¡Hola!👋 Mi nombre es",
    "ہیلو!👋 میرا نام ہے۔",
    "Salut!👋 Je m'appelle",
    "Ciao!👋 Mi chiamo",
    "Oi!👋 Meu nome é",
    "안녕하세요!👋 내 이름은",
    "வணக்கம்!👋 என் பெயர்",
    "Olá!👋 Meu nome é",
    "你好👋 我的名字是",
    "こんにちは👋 私の名前は",
    "Hallo!👋 Mein Name ist",
    "Привет!👋 Меня зовут",
  ];

  const i = useRef(0);
  const [salutation, setSalutation] = useState(salutations[0]);
  const ogName = "RAKESH BALAMURUGAN";
  const isBrowser = () => typeof window !== "undefined";

  const scrollToSection = () => {
    if (!isBrowser()) return;
    let ele = document.getElementById("contact");
    if (ele) {
      document.body.scrollTo({ top: ele.offsetTop, behavior: "smooth" });
    }
  };

  const [name, setName] = useState(ogName);
  useEffect(() => {
    const interval = setInterval(() => {
        i.current = (i.current + 1) % salutations.length;
        setSalutation(salutations[i.current]);
    }, 2000);

    return () => clearInterval(interval);
}, [salutations]);  // Updated dependency

  const hackerEffect = () => {
      if (name === ogName) { // Prevent setting a new interval if the name is already revealed
          const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
          let i = 0;
          const interval = setInterval(() => {
              setName(
                  name
                      .split("")
                      .map((letter, idx) => {
                          if (idx <= i) return ogName[idx];
                          if (letter !== " ") return letters[Math.floor(Math.random() * 26)];
                          return " ";
                      })
                      .join("")
              );

              i += 1 / 3;
              if (i >= name.length) {
                  clearInterval(interval);
              }
          }, 30);
      }
  };

  return (
    <div className="collapsible-container">
      <div className="image-container w-full md:w-3/12 flex justify-center items-center p-4">
        <Image
          priority
          src={me}
          className="rounded-3xl w-4/12 md:w-5/12"
          alt="Rakesh Balamurugan"
        />
      </div>
      <div className="text-container w-full md:w-9/12 flex flex-col justify-center text-left px-8 md:px-10 bg-transparent">
        <div>
          <div className="md:text-lg lg:text-3xl text-sm pl-0 mt-5 md:mt-5 md:pl-1 md:mb-0 md:pb-0">
            {salutation}
          </div>
          <div
            className="text-[5vw] md:text-[5rem] lg:text-[8rem] text-5xl font-bold mt-0 pt-0 font-mono"
            onMouseEnter={hackerEffect}
          >
            {name}
          </div>
        </div>
        <p className="text-sm md:text-lg lg:text-2xl text-justify md:p-0 pr-10 pl-10 mb-4 mt-4">
          I am a <strong>Mechanical Engineer</strong>, currently pursuing <strong>Doctoral</strong> degree at University of Connecticut. I am deeply passionate about tackling complex <strong>multi-scale</strong> and <strong>multi-physics</strong> problems through a combination of advanced <strong>computational</strong> and <strong>experimental methods</strong>.
          My expertise spans a wide array of advanced numerical techniques, including <strong>Finite Element Analysis (FEA)</strong>, <strong>Computational Fluid Dynamics (CFD)</strong>, <strong>Thermal Analysis</strong>, and <strong>Fluid-Structure Interaction (FSI)</strong>.
          Additionally, my skills in <strong>Machine Learning</strong>, <strong>Deep Learning</strong>, and <strong>Computer Vision</strong> enable me to develop state-of-the-art solutions for challenging engineering problems.
        </p>
        <p className="text-sm md:text-lg lg:text-2xl text-justify md:p-0 pr-10 pl-10 mb-4 mt-4">
          My research interests are diverse and encompass <strong>computational geometry</strong>, <strong>optimization</strong>, and <strong>data-driven models</strong>, including <strong>Physics-Informed Neural Networks (PINNs)</strong>,
          <strong> Neural Operators</strong>, and <strong>Bayesian Neural Networks</strong>. I am also deeply engaged in <strong>Parallel Computing</strong> with <strong>GPU </strong>technology and sophisticated <strong>randomized algorithms</strong>.
          My focus is on optimizing <strong>design processes</strong> and <strong>manufacturing techniques</strong>, and improving <strong>failure prediction</strong> through these advanced computational methods.
          Additionally, I explore <strong>probabilistic computational mechanics</strong> and <strong>multi-scale uncertainty quantification</strong> to address the complexities of modern engineering challenges.
          As a dedicated <strong>problem solver</strong>, I am committed to collaborating with diverse teams to deliver impactful results and push the boundaries of engineering forward.
        </p>
        <div className="flex gap-4 mt-4 justify-center">
          <button
            className="rounded-full min-w-[10em] h-20 min-h-[4em] relative flex flex-wrap justify-around items-center transition-all bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 bg-size-200 bg-pos-0 hover:bg-pos-100 md:text-xl lg:text-2xl font-bold"
            onClick={() => scrollToSection()}
          >
            Get In Touch
          </button>
        </div>
      </div>
    </div>
  );
  
};

export default Hero;
