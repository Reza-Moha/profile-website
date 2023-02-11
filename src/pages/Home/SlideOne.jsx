import { useEffect } from "react";
import Moon from "../../components/UI/Moon/Moon";
import AOS from "aos";
import SkillsIcons from "../../components/UI/SkillsIcons";

export default function SlideOne() {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <>
      <section className="w-full h-screen relative snap-start grid grid-cols-1 grid-rows-2 md:grid-rows-1 md:grid-cols-2 justify-items-center text-center z-40">
        <div
          data-aos="fade-right"
          data-aos-delay="900"
          className="flex flex-col justify-center items-center gap-y-4 text-gray-200 font-Poppins"
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
          <SkillsIcons />
        </div>
        <div className="absolute w-44 h-5 bottom-24 -right-16 text-md rotate-90 text-violet-600 flex justify-center items-center gap-x-3 overflow-hidden">
          <h1>Scroll Down</h1>
          <span className="flex-1 w-full h-px bg-violet-600"></span>
        </div>
        <Moon />
      </section>
    </>
  );
}
