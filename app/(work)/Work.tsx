import Link from "next/link";
import WorkCard from "./WorkCard";

export default function Work() {
  return (
    <div className="lg:w-screen mb-20">
      <div className="ml-auto mr-auto min-content lg:w-9/12 justify-center text-black p-10">
        <div className="text-4xl font-bold text-center mb-20">
          WORK EXPERIENCES
        </div>
        <div className="grid grid-rows-1 grid-cols-1 lg:grid-cols-3 gap-20">
          <WorkCard
              position="Graduate Researcher"
              company="Arizona State University"
              dates="09/2022 - 08/2023"
              companyUrl="https://www.asu.edu/"
              responsiblities={[
                "Processed micro-CT images of additively manufactured(AM) titanium alloy and acquired microscale data on surface roughness and internal defects.",
                "Proposed a machine learning model for fatigue crack initiation sites prediction and a probabilistic physics-guided neural network using extracted microscale data features for fatigue life estimation."
                ]}
            />
          <WorkCard
            position="Research Service Aide"
            company="Arizona State University"
            dates="09/2022 - 08/2023"
            companyUrl="https://www.asu.edu/"
            responsiblities={[
              "Organized and facilitated a seminar series on Advanced Air Mobility, with an average attendance of 40 per session.",
              "Maintained and updated the ASU NASA ULI and ASU CCSS websites.",
              ]}
          />
          <WorkCard
            position="Teaching Aide"
            company="Arizona State University"
            dates="09/2022 - 08/2023"
            companyUrl="https://www.asu.edu/"
            responsiblities={[
              "Taught fundamental concepts and experiments of physics to undergraduate students and graded lab reports of 100 students.",

            ]}
          />
          <WorkCard
            position="Graduate Service Assistant"
            company="Arizona State University"
            dates="08/2022 - 12/2022"
            companyUrl="https://www.asu.edu/"
            responsiblities={[
              "Graded Homework, Quizzes, and Assignments 45 of Graduate Students and maintained fairness.",
            ]}
          />
          <WorkCard
            position="Graduate Research Volunteer"
            company="PARA Lab, ASU"
            dates="09/2021 - 08/2022"
            companyUrl="https://paralab.engineering.asu.edu/"
            responsiblities={[
              "Conducted a parametric study on the X65 gas pipeline with interactive corrosion threats using elastic-plastic FEA models; produced more accurate results than ASME B31G.",
              "Estimated burst pressure of X65 pipe with actual inner circumferential surface obtained through AI-enabled multi-camera stereo vision system; predicted burst pressure has less than 3% error from experimental results.",
              "Processed micro-CT images of additively manufactured titanium alloy with filtering, segmentation, and despeckle, producing high-quality STL files with gas pores, lack of fusions, and surface roughness at the micro-scale level.",
              "Implemented a graph-based algorithm to extract the 1D surface roughness and pores from the STL files to find crack initiation sites using Physics Informed Neural Networks.",
            ]}
          />
           <WorkCard
            position="Founder"
            company="Raki Traders"
            dates="06/2020 - 08/2021"
            companyUrl=""
            responsiblities={[
              "Administrated all organization operations, such as making policies, managing inventory, and controlling prices leading to increased returns of 1.1 million per month.",
              "Hired, trained, and led a sales team of two for digital marketing and gained 300 new clients in a fiscal year.",
            ]}
          />
          
        </div>
      </div>
    </div>
  );
}
