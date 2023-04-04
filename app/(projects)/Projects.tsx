import ProjectCard from "./ProjectCard";
import Image from "next/image";
import image1 from "../../public/turbulence_project_presentation.png"
import image2 from "../../public/ppt_stent.png"
import image3 from "../../public/STP proj.png"
import image4 from "../../public/Poster_PRCI2022_V1[1].png"

const Projects = () => {
  return (
    <div className="lg:w-screen mb-20">
      <div className="ml-auto mr-auto min-content lg:w-8/12 justify-center text-Black p-10">
        <div className="text-4xl font-bold text-center mb-20">RESEARCH & PROJECTS</div>
        <div className="grid grid-cols-3 gap-5">
              <div className="col-span-1 row-span-2">
                <ProjectCard
                  title="Turbulence Model for Backward-stepping face"
                  para1="This is a simple chatroom where the users can login using their GMAIL ID. After logging in the users can either opt to send text messages or send images to other users in the room."
                  para2="I am currently working on it add private and group chats and to also improve the UI/UX"
                  skills={["ANSYS FLUENT,", "MATLAB"]}
                  repoLink="https://github.com/aritC/MSGR"
                  isPortrait
                  image={image1}
                />
              </div>
              <div className="col-span-2">
                <div className="row-span-1">
                  <ProjectCard
                    title="Title of Second Project"
                    para1="Description of the second project."
                    para2="Additional details or notes."
                    skills={["Skill 1", "Skill 2", "Skill 3"]}
                    repoLink="https://github.com/username/repo"
                    image={image2}
                  />
                </div>
                <div className="row-span-1">
                  <ProjectCard
                    title="Title of Third Project"
                    para1="Description of the third project."
                    para2="Additional details or notes."
                    skills={["Skill 1", "Skill 2", "Skill 3"]}
                    repoLink="https://github.com/username/repo"
                    image={image3}
                  />
                </div>
              </div>
              <div className="col-span-3 row-span-1">
                <ProjectCard
                  title="Title of Fourth Project"
                  para1="Description of the fourth project."
                  para2="Additional details or notes."
                  skills={["Skill 1", "Skill 2", "Skill 3"]}
                  repoLink="https://github.com/username/repo"
                  image={image4}
                />
              </div>
            </div>

        </div>
      </div>
    
  );
};

export default Projects;





