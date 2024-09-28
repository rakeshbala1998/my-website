import Image from "next/legacy/image";
import image1 from "../../public/spi2.png"; 
import image2 from "../../public/spatialpartition.png";
import image3 from "../../public/attentionNN.png";
import image4 from "../../public/parallel computing.png";

const CurrentProjects = () => {
  return (
    <div className="w-screen mb-20 bg-transparent text-black">
      <div className="container mx-auto px-20"> {/* Added horizontal padding */}
        <div className="text-center text-5xl font-bold mb-5 pb-10"> {/* Increased font size */}
          CURRENT PROJECTS
        </div>

        {/* Responsive Grid Layout */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-10"> {/* 1 column on small screens, 2 columns on medium screens */}
          {/* Project 1 */}
          <div className="bg-opaque p-6 rounded-md shadow-md transition-transform transform hover:scale-105"> 
            <div className="relative h-60 mb-5 overflow-hidden rounded-md"> 
              <Image
                src={image1}
                alt="Project Image 1"
                layout="fill"
                objectFit="contain"
                className="rounded-md"
              />
            </div>
            <h3 className="text-3xl font-bold mb-3">
              Optimization of Complex Systems
            </h3>
            <p className="text-base text-justify">
              Simultaneous Packaging and Routing of Complex Interconnected Systems. Independently, each problem is known to be NP-hard. Solving the combined problem is a particularly interesting and challenging task.
            </p>
          </div>

          {/* Project 2 */}
          <div className="bg-opaque p-6 rounded-md shadow-md transition-transform transform hover:scale-105">
            <div className="relative h-60 mb-5 overflow-hidden rounded-md">
              <Image
                src={image2}
                alt="Project Image 2"
                layout="fill"
                objectFit="contain"
                className="rounded-md"
              />
            </div>
            <h3 className="text-3xl font-bold mb-3">
              Spatial Partitioning Data Structures
            </h3>
            <p className="text-base text-justify">
              Proximity queries in dynamic environments are difficult due to constant changes in spatial data. We exploring the possibilities of novel data structure enhances efficiency in managing these queries, enabling better real-time decision-making.
            </p>
          </div>

          {/* Project 3 */}
          <div className="bg-opaque p-6 rounded-md shadow-md transition-transform transform hover:scale-105">
            <div className="relative h-60 mb-5 overflow-hidden rounded-md">
              <Image
                src={image3}
                alt="Project Image 3"
                layout="fill"
                objectFit="contain"
                className="rounded-md"
              />
            </div>
            <h3 className="text-3xl font-bold mb-3">
              Attention Aware Physics Guided Neural Network
            </h3>
            <p className="text-base text-justify">
              Our research focuses on developing an attention-aware physics-guided neural network designed to predict fatigue in additively manufactured components. By integrating fundamental physical principles with advanced image modalities, we aim to significantly enhance predictive accuracy and improve interpretability of the model's predictions.
            </p>
          </div>

          {/* Project 4 */}
          <div className="bg-opaque p-6 rounded-md shadow-md transition-transform transform hover:scale-105">
            <div className="relative h-60 mb-5 overflow-hidden rounded-md">
              <Image
                src={image4}
                alt="Project Image 4"
                layout="fill"
                objectFit="contain"
                className="rounded-md"
              />
            </div>
            <h3 className="text-3xl font-bold mb-3">
              Parallel Computing in CPU and GPU
            </h3>
            <p className="text-base text-justify">
              We are investigating parallelism in both CPU and GPU architectures, focusing on hierarchical computational structures that often struggle with parallelism. This research aims to identify strategies for maximizing parallel efficiency while managing complex data relationships. By leveraging the strengths of each platform, we seek to enhance performance in intricate computations, paving the way for faster processing in dynamic environments.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CurrentProjects;
