import { useState } from "react";
import Image from "next/legacy/image";

interface Props {
  image?: any;
  title: string;
  para1: string;
  para2: string;
  skills: string[];
  repoLink?: string;
  paperLink?: string; // Add optional paper link
  isPortrait?: boolean;
  isLive?: boolean;
  repoPresent?: boolean;
  isPoster?: boolean;
}

const ProjectCard = ({
  image,
  title,
  para1,
  para2,
  skills,
  repoLink,
  paperLink, // Add optional paper link
  isPortrait = false,
  isLive = true,
  repoPresent = true,
  isPoster = false,
}: Props) => {
  const [showModal, setShowModal] = useState(false);

  const handleCardClick = () => {
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  // For poster aspect ratio (3:2 height to width ratio)
  const posterWidth = 24 * 96; // converting inches to pixels (96 dpi)
  const posterHeight = 3 * 12 * 96; // converting feet to pixels (96 dpi)

  return (
    <>
      <div
        className="group relative h-full w-full cursor-pointer hover:scale-110 hover:z-20 lg:group-hover:ease-in lg:ease-out lg:duration-150 hover:shadow-2xl hover:shadow-black lg:transition-all"
        onClick={handleCardClick}
      >
        <div className="relative">
          {/* Conditionally render the image based on whether it's a poster or regular image */}
          {isPoster ? (
            <Image
              src={image}
              alt={title}
              layout="responsive"
              width={posterWidth} // Use poster dimensions
              height={posterHeight} // Use poster dimensions
              objectFit="cover"
              className="rounded-lg"
            />
          ) : (
            <Image
              src={image}
              alt={title}
              layout="responsive"
              objectFit="cover"
              className="rounded-lg"
            />
          )}
        </div>
        <div className="text-white font-bold absolute h-16 z-10 bottom-0 p-3 bg-gradient-to-t from-black w-full opacity-100 lg:opacity-0 lg:group-hover:opacity-100 lg:transition-all lg:group-hover:ease-in lg:ease-out lg:duration-150 rounded-lg">
          {title}
        </div>
      </div>

      {showModal && (
        <div className="fixed top-0 left-0 w-full h-full z-50 overflow-auto bg-better-black bg-opacity-90">
          <div className="mx-auto max-w-screen-2xl">
            {/* Modal content with similar condition */}
            {isPoster ? (
              <Image
                src={image}
                alt={title}
                layout="responsive"
                width={posterWidth} // Use poster dimensions
                height={posterHeight} // Use poster dimensions
                className="rounded-lg"
              />
            ) : (
              <Image
                src={image}
                alt={title}
                layout="responsive"
                width={isPortrait ? 300 : 400} // Regular image dimensions
                height={isPortrait ? 400 : 300} // Regular image dimensions
                className="rounded-lg"
              />
            )}
            <div className="p-4">
              <div className="flex justify-between text-white text-3xl font-bold mb-2">
                <h2 className="pt-3">{title}</h2>
                <button
                  className="text-5xl text-rose-300 absolute top-0 right-4 focus:outline-none"
                  onClick={handleCloseModal}
                >
                  &times;
                </button>
              </div>
              <div className="text-white mb-4">
                <p className="mb-2 max-h-[10rem] overflow-auto">{para1}</p>
                <p className="mb-2 max-h-[10rem] overflow-auto">{para2}</p>
              </div>
              <div className="text-white mb-4 text-lg">
                Skills:
                <ul className="inline-block">
                  {skills.map((skill, i) => (
                    <li key={i} className="inline-block m-2">
                      {skill}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="flex justify-end gap-10">
                {/* Conditionally render repo link */}
                {repoPresent && repoLink && (
                  <a
                    href={repoLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-white underline"
                  >
                    GitHub Repo
                  </a>
                )}
                {/* Conditionally render paper link */}
                {paperLink && (
                  <a
                    href={paperLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-white underline"
                  >
                    Read Paper
                  </a>
                )}
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default ProjectCard;
