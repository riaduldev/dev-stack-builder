import navImg from "../../assets/logo-text.png";

const Nav = () => {
  return (
    <nav className="flex justify-between items-center container mx-auto my-5">
      {/* left */}

      <div>
        <img src={navImg} alt="logo text navbar image" />
      </div>

      {/* middle */}
      <div>
        <ul>
          <li className="flex gap-5">
            <a
              className="transition-colors duration-200 hover:text-[#D91B7E]"
              href="#home"
            >
              Home
            </a>
            <a className="transition-colors duration-200 hover:text-[#D91B7E]" href="#technologies">Technologies</a>
            <a className="transition-colors duration-200 hover:text-[#D91B7E]" href="#projects">Projects</a>
            <a className="transition-colors duration-200 hover:text-[#D91B7E]" href="#about">About</a>
            <a className="transition-colors duration-200 hover:text-[#D91B7E]" href="#contact">Contact</a>
          </li>
        </ul>
      </div>
      {/* right */}
      <div className="flex gap-4">
        <button className="cursor-pointer">Sign In</button>
        <button className="btn bg-[#D91B7E] rounded rounded-2xl">
          Sign Up
        </button>
      </div>
    </nav>
  );
};

export default Nav;
