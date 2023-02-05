import MoonLight from "../../components/UI/Moon/MoonLight";
import Moon from "../../components/UI/Moon/Moon";
import { useEffect } from "react";
import {
  IoLogoHtml5,
  SiTailwindcss,
  SiReact,
  IoLogoJavascript,
  SiNextdotjs,
  TfiYoutube,
} from "../../assets/icons";

export default function Main() {
  useEffect(() => {
    document.addEventListener("mousemove", parallaxEffect);
  }, []);

  const parallaxEffect = (e) => {
    document.querySelectorAll(".object").forEach((svg) => {
      let movingValue = svg.getAttribute("data-value");
      // console.log(movingValue);
      let x = (e.clientX * movingValue) / 300;
      let y = (e.clientY * movingValue) / 300;
      svg.style.transform = "translateX(" + x + "px) translateY(" + y + "px)";
    });
  };
  return (
    <>
      <main className="w-full h-full">
        <MoonLight />
        <section className="w-screen h-screen grid grid-cols-1 grid-rows-2 md:grid-rows-1 md:grid-cols-2  justify-items-center text-center z-40">
          <Moon />
          <div className="flex flex-col justify-center  items-center gap-y-4 text-gray-200 font-Poppins">
            <h1 className="text-4xl bg-clip-text text-transparent bg-gradient-to-r from-purple-200 via-purple-400 to-purple-800">
              Reza <br />
              Mohammadzadeh
            </h1>
            <div className="inline-block ">
              <span className="mb-2 block w-20 h-1 rounded bg-gradient-to-tr from-rose-700 to-pink-600"></span>
              <span className="ml-12 block w-20 h-1 rounded bg-gradient-to-tr from-rose-700 to-pink-600"></span>
            </div>
            <h1 className="text-4xl py-1 bg-clip-text text-transparent bg-gradient-to-r from-green-200 to-green-500">
              Web Designer
            </h1>
            <div className="grid grid-cols-6 justify-items-center text-center gap-3">
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
                <TfiYoutube size={26} />
              </span>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
