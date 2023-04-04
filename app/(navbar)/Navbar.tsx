import Link from "next/link";
import LOGO from "../../public/rb1.svg";
import MenuToggle from "./MenuToggle";

interface Props {
  isOpen: boolean;
  setIsOpen: any;
}
const NavBar = ({ isOpen, setIsOpen }: Props) => {
  const resumeUrl =
    "https://drive.google.com/file/d/1Q6ZGNJ3zFbXhn7C56fdrLeT9XKtoxO8q/view?usp=sharing";

  const isBrowser = () => typeof window !== "undefined";
  const scrollToTop = () => {
    if (!isBrowser()) return;
    document.body.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <nav
      className={`text-black  m-auto sticky top-0 z-50 ${
        isOpen ? "" : "backdrop-blur-lg"
      } w-full flex flex-wrap flex-row items-center justify-between pl-5 lg:pl-10 pr-5 lg:pr-10 h-20`}
    >
      <LOGO
        className="h-20 aspect-auto w-auto lg:hover:scale-110"
        onClick={scrollToTop}
      />
      <div>
        <div className="flex gap-2">
          <Link
            className={`rounded-full border min-w-[10rem] lg:h-16 min-h-[3rem] relative flex flex-wrap justify-around items-center ${
              isOpen
                ? "text-black font-bold border-black"
                : " border-slate-300/40transition-all bg-no-repeat bg-gradient-to-r to-indigo-500 via-white/10 from-transparent bg-size-200 bg-pos-0 hover:bg-pos-100 hover:border-0 lg:text-xl"
            }`}
            href={resumeUrl}
            target="_blank"
          >
            Resume
          </Link>
          <MenuToggle isOpen={isOpen} setIsOpen={setIsOpen} />
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
