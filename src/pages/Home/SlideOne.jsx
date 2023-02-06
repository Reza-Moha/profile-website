import { useEffect } from "react";
import Moon from "../../components/UI/Moon/Moon.jsx";
import AOS from "aos";
import {
  FaNodeJs,
  IoLogoHtml5,
  IoLogoJavascript,
  SiNextdotjs,
  SiReact,
  SiTailwindcss,
  SiWebstorm,
} from "../../assets/icons";

export default function SlideOne() {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <>
      <section className="w-full h-screen snap-start grid grid-cols-1 grid-rows-2 md:grid-rows-1 md:grid-cols-2  justify-items-center text-center z-40">
        <Moon />
        <div
          data-aos="fade-left"
          data-aos-delay="900"
          className="flex flex-col justify-center  items-center gap-y-4 text-gray-200 font-Poppins"
        >
          <h1 className="text-4xl bg-clip-text text-transparent bg-gradient-to-r from-purple-200 via-purple-400 to-purple-800">
            Reza <br />
            Mohammadzadeh
          </h1>
          <div className="inline-block ">
            <span className="mb-2 block w-20 h-1 rounded bg-gradient-to-tr from-rose-700 to-pink-600"></span>
            <span className="ml-12 block w-20 h-1 rounded bg-gradient-to-tr from-rose-700 to-pink-600"></span>
          </div>
          <h1 className="text-4xl py-1">Web Designer</h1>
          <div className="grid grid-cols-7 justify-items-center text-center gap-3">
            <span>
              <IoLogoHtml5 size={26} />
            </span>
            <span>
              <SiTailwindcss size={26} />
            </span>
            <span>
              <SiReact size={26} />
            </span>
            <span>
              <IoLogoJavascript size={26} />
            </span>
            <span>
              <SiNextdotjs size={26} />
            </span>
            <span>
              <SiWebstorm size={26} />
            </span>
            <span>
              <FaNodeJs size={26} />
            </span>
          </div>
        </div>
      </section>
    </>
  );
}