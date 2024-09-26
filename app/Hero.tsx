
import { useEffect, useState, useRef } from "react";
import Image from "next/image";
import me from "../public/hero.jpg";
import "./styles.css";



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
  }, [salutation]);

  const hackerEffect = () => {
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
  };

  return (
    <div className="h-screen w-screen ">
      <div
        className="text-black text-center place-items-center justify-center grid grid-rows-auto grid-cols-1 md:grid-rows-1 md:grid-cols-2 ml-auto mr-auto min-content md:w-9/12"
        id="hero"
      >
      <div className="image-container ">
        <Image
          priority
          src={me}
          className="rounded-3xl md:w-[30rem] w-3/5 aspect"
          alt="Rakesh Balamurugan"
        />
      </div>
        <div className="mt-0 ml-0 justify-center md:text-left">
          <div>
            <div className="md:text-lg text-sm pl-0 mt-5 md:mt-5 md:pl-7 md:mb-0 md:pb-0">
              {salutation}
            </div>
            <div
              className="md:text-[8rem] text-5xl font-bold mt-0 pt-0 font-mono"
              onMouseEnter={hackerEffect}
            >
              {name}
            </div>
          </div>
          <p className="text-sm md:text-lg text-justify md:p-0 pr-10 pl-10 mb-4 mt-4">
              As a <strong>Mechanical Engineer</strong>, I am deeply passionate about tackling complex <strong>multi-scale</strong> and <strong>multi-physics</strong> problems through a combination of advanced <strong>computational</strong> and <strong>experimental methods</strong>. 
              My expertise spans a wide array of advanced numerical techniques, including <strong>Finite Element Analysis (FEA)</strong>, <strong>Computational Fluid Dynamics (CFD)</strong>, <strong>Thermal Analysis</strong>, and <strong>Fluid-Structure Interaction (FSI)</strong>. 
              Additionally, my skills in <strong>Machine Learning</strong>, <strong>Deep Learning</strong>, and <strong>Computer Vision</strong> enable me to develop state-of-the-art solutions for challenging engineering issues.
          </p>

          <p className="text-sm md:text-lg text-justify md:p-0 pr-10 pl-10 mb-4 mt-4">
              My research interests are diverse and encompass <strong>computational geometry</strong>, <strong>optimization</strong>, and <strong>data-driven models</strong>, including <strong>Physics-Informed Neural Networks (PINNs)</strong>, 
              <strong>neural operators</strong>, and <strong>Bayesian neural networks</strong>. I am also deeply engaged in <strong>parallel computing</strong> with <strong>GPU technology</strong> and sophisticated <strong>randomized algorithms</strong>. 
              My focus is on enhancing <strong>design processes</strong>, optimizing <strong>manufacturing techniques</strong>, and improving <strong>failure prediction</strong> through these advanced computational methods. 
              Additionally, I explore <strong>probabilistic computational mechanics</strong> and <strong>multi-scale uncertainty quantification</strong> to address the complexities of modern engineering challenges. 
              As a dedicated <strong>problem solver</strong>, I am committed to collaborating with diverse teams to deliver impactful results and push the boundaries of engineering forward.
          </p>

          <div className="flex gap-4 mt-1 justify-center md:justify-start ">
            <button
              className="rounded-full min-w-[10em] h-20 min-h-[4em] relative flex flex-wrap justify-around items-center transition-all bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 bg-size-200 bg-pos-0 hover:bg-pos-100 md:text-xl font-bold"
              onClick={() => scrollToSection()}
            >
              Get In Touch
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
