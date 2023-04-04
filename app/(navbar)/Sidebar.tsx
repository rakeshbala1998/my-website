interface Props {
  isOpen: boolean;
  setIsOpen: any;
}

const SideBar = ({ isOpen, setIsOpen }: Props) => {
  const isBrowser = () => typeof window !== "undefined";

  const scrollToSection = (id: string) => {
    if (!isBrowser()) return;
    let ele = document.getElementById(id);
    if (ele) {
      document.body.scrollTo({ top: ele.offsetTop, behavior: "smooth" });
    }
  };

  const items = [
    { name: "Home", id: "hero" },
    { name: "Skills", id: "skills" },
    { name: "Projects", id: "projects" },
    { name: "Work Experience", id: "work" },
    { name: "Contact", id: "contact" },
  ];
  return (
    <div
      className={`w-screen h-screen transition-all absolute ${
        isOpen ? "bg-black/60 z-50" : "-z-10"
      }`}
    >
      <div
        className={`pt-24 pl-5 gap-4 text-2xl text-black bg-white h-full w-10/12 right-0 mt-0 transition-all ${
          isOpen
            ? "translate-x-1/3 lg:translate-x-full"
            : "invisible translate-x-[200%]"
        }`}
      >
        <ul className=" h-2/6 flex flex-col justify-between">
          {items.map((item, i) => (
            <li key={i} className="lg:hover:scale-110 lg:hover:translate-x-20">
              <button onClick={() => scrollToSection(item.id)}>
                {item.name}
              </button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default SideBar;
