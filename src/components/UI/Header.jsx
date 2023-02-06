import { useEffect, useState } from "react";
import { NavLink, Link } from "react-router-dom";
import {
  HiMenuAlt4,
  AiOutlineClose,
  SiWhatsapp,
  GrInstagram,
  FaTelegramPlane,
} from "../../assets/icons";
import AOS from "aos";
import MobileNavClock from "./MobileNavClock";
import { Transition } from "@headlessui/react";
import logo from "../../assets/image/logo.png";
import { TfiYoutube } from "../../assets/icons";
export default function Header() {
  const [showMobileNav, setShowMobileNav] = useState(false);
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <header
      data-aos="fade-down"
      data-aos-delay="400"
      className="fixed top-0 left-0 w-full py-5 px-[6.25%] text-white flex justify-between z-50"
    >
      <div className="grid grid-cols-2 items-center justify-items-center">
        <div>
          <div onClick={() => setShowMobileNav(true)}>
            <HiMenuAlt4 size={30} />
          </div>
        </div>
        <div className="hidden md:flex justify-center items-center gap-x-4">
          <Link to="/" className="w-7 h-7">
            <FaTelegramPlane className="w-full h-full hover:fill-[#0088CC]" />
          </Link>
          <Link to="/" className="w-7 h-7">
            <GrInstagram className="w-full h-full hover:fill-[#E4405F]" />
          </Link>
          <Link to="/" className="w-7 h-7">
            <TfiYoutube className="w-full h-full hover:fill-[#FF0000]" />
          </Link>
          <Link
            to="https://wa.me/989145650080"
            className="flex h-7 w-7 relative inline-block"
          >
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#25D366] opacity-75" />
            <SiWhatsapp className="relative inline-flex h-full w-full hover:fill-[#25D366]" />
          </Link>
        </div>
      </div>
      <Transition
        enter="transition-opacity duration-75"
        enterFrom="opacity-0"
        enterTo="opacity-100"
        leave="transition-opacity duration-150"
        leaveFrom="opacity-100"
        leaveTo="opacity-0"
        className="fixed z-40 top-0 right-0 w-full h-screen bg-gradient-to-tl from-gray-700 via-gray-900 to-black p-4 transition-all ease-in-out "
        show={showMobileNav}
      >
        <div
          className="flex justify-end group"
          onClick={() => setShowMobileNav(false)}
        >
          <span
            className="w-10 h-10 bg-gradient-to-tr from-gray-700 via-gray-900 to-black rounded-md border
           border-indigo-500 shadow shadow-indigo-300 inline-flex justify-center items-center group-hover:shadow-lg cursor-pointer"
          >
            <AiOutlineClose size={26} />
          </span>
        </div>
        <MobileNavClock />
        <div className="w-full border-t border-indigo-400 rounded p-2">
          <h1 className="text-center text-2xl font-Poppins uppercase">Moon</h1>
        </div>
      </Transition>
      <NavLink className="text-2xl rounded w-20 h-10 overflow-hidden" to="/">
        <img src={logo} className="w-full h-full" alt="mainLogo" />
      </NavLink>
    </header>
  );
}
