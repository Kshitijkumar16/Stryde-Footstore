import { arrowRight, headerLogo } from "../assets/icons";
import { hamburger } from "../assets/icons";
import { navLinks } from "../constants";
import Button from "./Button";

const nav = () => (
  <header className="padding-x mt-6 absolute z-10 w-full">
    <nav className="flex justify-between items-center max-container">
      <div id="logo" className="pr-2 py-1 hover:cursor-pointer">
        <a
          href="/"
          className="flex flex-1 justify-start gap-1 text-xl items-center hover:cursor-pointer"
        >
          <img
            src={headerLogo}
            alt="Stryde-logo"
            height={50}
            width={50}
            className="rounded-lg mx-1 bg-coral-red w-[50px] h-[50px] "
          />
          <p className="mb-[2px] font-palanquin font-bold">STRYDE</p>
        </a>
        <p className="mt-1 text-center font-montserrat text-gray-500 text-sm hover:cursor-pointer min-w-full">
          Believe your Steps
        </p>
      </div>
      <div id="navbar" className="max-lg:hidden ">
        <div className="py-3 px-4 rounded-md font-bold flex-1 flex justify-center items-center gap-10 duration-400 hover:shadow-xl hover:shadow-coral-red hover:text-coral-red hover:border-[1px] hover:border-coral-red duration-500">
          {navLinks.map((item) => (
            <div key={item.label}>
              <a
                href={item.href}
                className="font-montserrat font-medium leading-normal text-lg text-black p-3 rounded-xl hover:text-coral-red duration-400"
              >
                {item.label}
              </a>
            </div>
          ))}
        </div>
      </div>
      <div className="flex gap-2 leading-normal font-medium font-montserrat max-lg:hidden wide:mr-24">
        <Button label="Login/Explore" iconURL={arrowRight} />
      </div>
      <div className="hidden max-lg:block">
        <img src={hamburger} alt="Hamburger" width={25} height={25} />
      </div>
    </nav>
  </header>
);
export default nav;
