import { useEffect, useRef } from "react";
import "./slide-in.css";

const Skills = () => {
  const skillsRef = useRef(null);

  useEffect(() => {
    const skills = skillsRef.current.childNodes;

    for (let i = 0; i < skills.length; i++) {
      const skill = skills[i];
      if (skill.nodeType === 1) {
        skill.style.animationDelay = `${i * 0.2}s`;
      }
    }
  }, []);

  return (
    <div className="lg:w-screen mb-20">
      <div className="ml-auto mr-auto min-content lg:w-9/12 justify-center p-10">
        <div className="text-4xl font-bold text-black text-center mb-20">
          SKILLS
        </div>
        <div
          ref={skillsRef}
          className="text-black text-center place-items-center justify-center grid grid-rows-auto font-semibold grid-cols-3 lg:grid-cols-5 min-content gap-5 slide-in-skills"
          style={{
            gridTemplateColumns: "repeat(auto-fit, minmax(10rem, 1fr))",
          }}
        >
          <p>ANSYS</p>
          <p>AutoCAD</p>
          <p>PTC Creo</p>
          <p>CATIA</p>
          <p>Hypermesh</p>
          <p>SolidWorks</p>
          <p>Python</p>
          <p>Matlab</p>
          <p>Machine Learning </p>
          <p>Deep Learning</p>
          <p>Additive Manufacturing</p>
          <p>Fatigue and Fracture</p>
        </div>
      </div>
    </div>
  );
};

export default Skills;
