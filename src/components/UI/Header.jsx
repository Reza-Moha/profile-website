import { useEffect, useState } from "react";
import { NavLink, Link } from "react-router-dom";
import AOS from "aos";
import {
  HiMenuAlt4,
  AiOutlineClose,
  SiWhatsapp,
  GrInstagram,
  FaTelegramPlane,
} from "../../assets/icons";
import Index from "./MobileNavClock/index.jsx";
export default function Header() {
  const [showMobileNav, setShowMobileNav] = useState(false);
  useEffect(() => {
    AOS.init();
  }, [showMobileNav]);
  return (
    <header className="fixed top-0 left-0 w-full py-5 px-[6.25%] text-white flex justify-between z-50">
      <NavLink className="text-2xl" to="/">
        Moon
      </NavLink>

      <div className="grid grid-cols-2 items-center justify-items-center">
        <div className="hidden md:flex justify-center items-center gap-x-4">
          <Link to="/" className="w-7 h-7">
            <FaTelegramPlane className="w-full h-full hover:fill-[#0088CC]" />
          </Link>
          <Link to="/" className="w-7 h-7">
            <GrInstagram className="w-full h-full hover:fill-[#E4405F]" />
          </Link>
          <Link
            to="https://wa.me/989145650080"
            className="flex h-7 w-7 relative inline-block"
          >
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#25D366] opacity-75" />
            <SiWhatsapp className="relative inline-flex h-full w-full hover:fill-[#25D366]" />
          </Link>
        </div>
        {!showMobileNav && (
          <div>
            <HiMenuAlt4
              onClick={(e) => setShowMobileNav(!showMobileNav)}
              size={45}
            />
          </div>
        )}
      </div>

      <nav
        data-aos="fade-left"
        className={
          showMobileNav
            ? "fixed top-0 right-0 w-1/2 h-full bg-gradient-to-tl from-gray-700 via-gray-900 to-black p-4 transition-all ease-in-out "
            : "hidden"
        }
      >
        <div className="w-full flex justify-end ">
          <span className="w-6 h-6 rounded inline-flex items-center border border-indigo-700 shadow shadow-indigo-600 hover:scale-105 transition-all ease-linear cursor-pointer">
            <AiOutlineClose
              onClick={(e) => setShowMobileNav(false)}
              size={24}
            />
          </span>
        </div>
        <Index />
      </nav>
    </header>
  );
}
