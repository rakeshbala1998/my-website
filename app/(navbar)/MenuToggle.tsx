import Slash from "../../public/minus-solid.svg";

interface Props {
  isOpen: boolean;
  setIsOpen: any;
}

const MenuToggle = ({ isOpen, setIsOpen }: Props) => {
  return (
    <button className="w-auto group" onClick={() => setIsOpen(!isOpen)}>
      <div className="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 bg-size-200 bg-pos-0 hover:bg-pos-100 transition-all h-12 w-12 lg:h-16 lg:w-16 rounded-full">
        <Slash
          className={`fill-white w-6 lg:w-11 h-auto transition-all  translate-x-3  ${
            isOpen
              ? "-rotate-45 translate-y-2 lg:translate-y-2"
              : "translate-y-1 lg:-translate-y-1"
          }`}
        />
        <Slash
          className={`fill-white w-6 lg:w-11 transition-all group-focus: translate-x-3 -translate-y-4 lg:-translate-y-11 ${
            isOpen ? "opacity-0" : ""
          }`}
        />
        <Slash
          className={`fill-white w-6 lg:w-11 transition-all translate-x-3 ${
            isOpen
              ? "rotate-45 -translate-y-11 lg:-translate-y-[5.75rem]"
              : "-translate-y-9 lg:-translate-y-[5.25rem]"
          }`}
        />
      </div>
    </button>
  );
};

export default MenuToggle;
