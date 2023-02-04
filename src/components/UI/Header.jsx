import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import AOS from "aos";
import { HiMenuAlt4, AiOutlineClose } from "../../assets/icons";
export default function Header() {
  const [showMobileNav, setShowMobileNav] = useState(false);
  useEffect(() => {
    AOS.init();
  }, [showMobileNav]);
  return (
    <header className="fixed top-0 left-0 w-full py-5 px-[6.25%] text-white flex justify-between z-50">
      <NavLink className="text-xl" to="/">
        Profile
      </NavLink>

      {!showMobileNav && (
        <HiMenuAlt4
          onClick={(e) => setShowMobileNav(!showMobileNav)}
          size={45}
        />
      )}
      <nav
        data-aos="fade-left"
        className={
          showMobileNav
            ? "fixed top-0 right-0 w-1/2 h-full bg-gradient-to-tl from-gray-700 via-gray-900 to-black p-2 transition-all ease-in-out "
            : "hidden"
        }
      >
        <div className="w-full flex justify-end ">
          <span className="w-5 h-5 rounded inline-flex items-center border border-indigo-700 shadow shadow-indigo-600 hover:scale-105 transition-all ease-linear cursor-pointer">
            <AiOutlineClose
              onClick={(e) => setShowMobileNav(false)}
              size={24}
            />
          </span>
        </div>
        <ul>
          <li>
            <NavLink to="/">Courses</NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
}
