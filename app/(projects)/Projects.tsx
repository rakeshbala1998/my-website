import ProjectCard from "./ProjectCard";
import Image from "next/image";
import image1 from "../../public/turbulence_project_presentation.png"
import image2 from "../../public/ppt_stent.png"
import image3 from "../../public/STP proj.png"
import image4 from "../../public/Poster_PRCI2022_V1[1].png"
import image5 from "../../public/thesis.png"
import image6 from "../../public/ACFD-POSTER.png"

const Projects = () => {
  return (
    <div className="lg:w-screen mb-20">
      <div className="ml-auto mr-auto min-content  lg:w-8/12 justify-center text-Black p-10">
        <div className="text-4xl font-bold text-center mb-20">RESEARCH & PROJECTS</div>
        <div className="grid grid-cols-3 gap-5">
              <div className="col-span-1 row-span-2">
                <ProjectCard
                  title="Turbulence Model for Backward-stepping face"
                  para1="The flow is simulated as the nominally 2D flow over a backward-facing step. This simulation was only the case of a straight top wall.
                   With the above conditions, the 7 different quantities were obtained for three different meshes and 3 different turbulence models; 63 plots were plotted."

                   para2="All the statistical quantities in the recirculation area at five different points x/H=1,4,6,8 were compared against the driver and Seegmiller(1985) experimental data. "
                  skills={["ANSYS FLUENT,", "MATLAB," ,"Turbulence Modeling,", "Computational Fluid Dynamics,", "SolidWorks"]}
                  repoLink=""
                  isPortrait
                  image={image1}
                />
              </div>
              <div className="col-span-2">
                <div className="row-span-1">
                  <ProjectCard
                    title="Prognostic Analysis of Bulk Metallic Glass-based Cardiac Stent"
                    para1="This paper has determined whether a Cu47.5Zr47.5Al5 can withstand the standard stent lifetime of 10 years or 4*10^8 cycles.
                     For this purpose, a Palmgren-Miner damage accumulation model was adopted, and stresses were found through Fluid structural interation simulation."
                    para2="Both the MC and FORM models calculated zero probability of failure at the factor of safety(FS) of 1 for displacement stress. MC found that at the FS of 2, the failure probability was non-zero and equal to 0.0808%."
                    skills={["Uncertainty Quantification,", "Uncertainty Propogation,", "Sensitivity Analysis,", "Reliability Analysis,", "Monte Carlo,", "Fluid Structural Interaction(FSI),", "Fatigue Modeling"]}
                    repoLink=""
                    image={image2}
                  />
                </div>
                <div className="row-span-1">
                  <ProjectCard
                    title="ML and DL approach in low steel alloy mechanical properties estimation"
                    para1="This project estimated the Mechanical Properties of the low alloy steel dataset obtained from the Kaggle Website. We used machine 
                    learning and Deep Learning Algorithms to predict the Mechanical properties such as proof strength, tensile strength, percentage Elongation, and percentage reduction in area.
                     We trained our model using different features such as the composition (different percentages) of materials like carbon, Magnesium, Phosphorus, Sulphur, Nickel, Chromium,
                     Molybdenum, Copper, Vanadium, Aluminum, and Nitrogen. We compared the mean square value results obtained from predicted values in the dataset for different machine learning
                     models and tabulated them in the results section.
                    Linear Regression, Linear Regression with scaled Features, K-Nearest Neighbors, Random Forests, and Neural Networks models were used."
                    para2="Deep learning neural networks offered us the lowest feasible mean squared error in the above study, and we are considering this model. Furthermore, we may assert that we can more accurately forecast the mechanical
                     characteristics of different alloys with varied compositions without actually producing and testing them."
                    skills={["Python,", "TensorFlow,", "Machine Learning,", "Deep Learning"]}
                    repoLink=""
                    image={image3}
                  />
                </div>
              </div>
              <div className="col-span-3 row-span-1">
                <ProjectCard
                  title="AI-enabled Interactive Threats Detection using"
                  para1="This project was funded by U.S. DOT Pipeline and Hazardous Materials Safety Admisnistration by several ASU student. In this project, I have developed elastic - plastic FEA 
                  model with above given specification. After Validation against the experimental data, the model was used to conduct the parametric study with interactive corrosion pits. This model gave accurate 
                  prediction than the ASME B31G."
                  para2="The predicted point cloud data obtained from the neural network was used to create the pipeline model with actual surface circumference and performed FEA analysis for burst pressure prediction.
                  This is project really helped me to learn new things such as handling sparse data, data augmentation, etc"
                  skills={["Python,", "ANSYS,", "Finite Element Analysis"]}
                  repoLink="https://primis.phmsa.dot.gov/matrix/FilGet.rdm?fil=17671"
                  image={image4}
                />
              </div>
              <div className="col-span-3 row-span-1">
                <ProjectCard
                  title="Machine Learning for Predicting Crack Initiation Sites in Additively Manfactured Titanium Alloy"
                  para1="This research focuses on finding the crack initiation sites using data obtained from the CT scan images registered inbetween uniaxial fatigue loading."
                  para2="The obtained CT scan images are processed to remove the noises and high quality STL files were produced."
                  skills={["Python,", "TensorFlow,", "OpenCV,","MATLAB,","Scikit-learn,", "Finite Element Analysis," ,"Fatigue Modeling,", "Additive Manufacturing" ]}
                  repoLink=""
                  image={image5}
                />
              </div>
              <div className="col-span-3 row-span-1">
                <ProjectCard
                  title="Computational Analysis of Various Flow"
                  para1="All the above selected tasks were done to solve the various fluid problem such as Compressible flow, Incompressible flow, Internal Flow, External Flow, Multiphase Flow"
                  para2="And also, thermal problems such as heat convection, viscous heating, and steady and transient solutions are obtained."
                  skills={["ANSYS,", "Computational Fluid Dynamics(CFD)," ,"CFD Post Processing,","Turbulence Modeling"]}
                  repoLink=""
                  image={image6}
                />
              </div>
            </div>

        </div>
      </div>
    
  );
};

export default Projects;





