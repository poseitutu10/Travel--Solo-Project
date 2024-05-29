import { FaGlobeAmericas } from "react-icons/fa";

const Header = () => {
  return (
    <>
      <header className="bg-red-400 p-5 flex gap-2 justify-center align-middle text-white">
        <FaGlobeAmericas className=" text-3xl" />
        <h2 className="text-xl">my travel journal.</h2>
      </header>
    </>
  );
};

export default Header;
