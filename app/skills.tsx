import { useEffect, useRef } from "react";
import "./slide-in.css";

const Skills = () => {

  return (
    <div className="lg:w-screen mb-20">
      <div className="ml-auto mr-auto min-content lg:w-9/12 justify-center p-10">
        <div className="text-4xl font-bold text-black text-center mb-20">
          SKILLS
        </div>
        <div
        id="scroll-container"
        className="text-black text-center place-items-center  grid grid-rows-1 font-semibold grid-cols-auto min-content gap-5 slide-in-skills"
        style={{
            gridTemplateColumns: "repeat(auto-fit, minmax(10rem, 1fr))",
            overflow: "hidden",
          }}
        > 
        <div id="scroll-text" className="gap-4">
          <p>ANSYS</p>
          <p>AutoCAD</p>
          <p>PTC Creo</p>
          <p>CATIA</p>
          <p>Hypermesh</p>
          <p>SolidWorks</p>
          <p>ABAQUS</p>
          <p>Finite Element Analysis</p>
          <p>Computational Fluid Dynamics</p>
          <p>Fluid Structural Interaction</p>
          <p>Turbulence Modeling</p>
          <p>Uncertainty Quantification</p>
          <p>Uncertainty Propogation</p>
          <p>Probabilistic Computational Mechanics</p>
          <p>Python</p>
          <p>Matlab</p>
          <p>Machine Learning </p>
          <p>Deep Learning</p>
          <p>Additive Manufacturing</p>
          <p>Fatigue and Fracture</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
