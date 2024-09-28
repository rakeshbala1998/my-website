import { useEffect, useRef, useState } from "react";
import "./slide-in.css"; // Ensure the CSS is properly linked
import Image from "next/legacy/image"; // Make sure this import is correct
import python from "public/skills/python.png"; // Correct path with leading slash
import c from "public/skills/c.png"; // Correct path with leading slash
import c_plus from "public/skills/c_plus.png";
import matlab from "public/skills/matlab.png";
import cython from "public/skills/cython.png";
import torch from "public/skills/pytorch.png";
import tf from "public/skills/tf.png";
import opencv from "public/skills/opencv.png";
import cuda from "public/skills/cuda.png";
import openmp from "public/skills/openmp.png";
import ansys from "public/skills/ansys.png";
import creo from "public/skills/creo.png";
import catia from "public/skills/catia.png";
import autocad from "public/skills/autocad.png";
import linux from "public/skills/linux.png";

const Skills = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const skills = [
    { src: python, alt: "Python Logo", width: 1000, height: 1000 },
    { src: c, alt: "C Logo", width: 500, height: 300 },
    { src: c_plus, alt: "C++ Logo", width: 500, height: 300 },
    { src: cython, alt: "Cython Logo", width: 750, height: 300 },
    { src: matlab, alt: "MATLAB Logo", width: 1000, height: 500 },
    { src: torch, alt: "PyTorch Logo", width: 750, height: 250 },
    { src: tf, alt: "TensorFlow Logo", width: 500, height: 450 },
    { src: opencv, alt: "OpenCV Logo", width: 500, height: 250 },
    { src: cuda, alt: "CUDA Logo", width: 1000, height: 1000 },
    { src: openmp, alt: "OpenMP Logo", width: 1000, height: 1000 },
    { src: ansys, alt: "ANSYS Logo", width: 1000, height: 1000 },
    { src: creo, alt: "Creo Logo", width: 1000, height: 1000 },
    { src: catia, alt: "CATIA Logo", width: 1000, height: 1000 },
    { src: autocad, alt: "AutoCAD Logo", width: 1000, height: 1000 },
    { src: linux, alt: "Linux Logo", width: 1000, height: 1000 },
  ];

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? skills.length - 1 : prevIndex - 1
    );
  };

  const nextSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === skills.length - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <div className="lg:w-screen mb-20">
      <div className="ml-auto mr-auto min-content lg:w-9/12 justify-center p-10">
        <div className="text-4xl font-bold text-black text-center mb-20">
          SKILLS
        </div>

        {/* Carousel container */}
        <div id="carousel-container">
          <div
            id="carousel-track"
            style={{
              transform: `translateX(-${currentIndex * 200}px)`,
            }}
          >
            {skills.map((skill, index) => (
              <div key={index} className="carousel-item">
                <Image
                  src={skill.src}
                  alt={skill.alt}
                  width={skill.width}
                  height={skill.height}
                />
              </div>
            ))}
          </div>

          {/* Navigation buttons */}
          <button
            id="carousel-prev"
            className="carousel-button"
            onClick={prevSlide}
          >
            Prev
          </button>
          <button
            id="carousel-next"
            className="carousel-button"
            onClick={nextSlide}
          >
            Next
          </button>
        </div>
      </div>
    </div>
  );
};

export default Skills;
