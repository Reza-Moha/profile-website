import {
  FaNodeJs,
  IoLogoHtml5,
  IoLogoJavascript,
  SiNextdotjs,
  SiReact,
  SiTailwindcss,
  SiWebstorm,
} from "../../assets/icons";

import { useEffect, useState } from "react";

const skillsData = [
  {
    id: 1,
    name: "Html",
    icon: <IoLogoHtml5 size={26} className="relative inline-flex" />,
    fill: "bg-orange-400",
    color: "text-orange-700",
    border: "border-orange-900",
  },
  {
    id: 2,
    name: "TailwindCss",
    icon: <SiTailwindcss size={26} className="relative inline-flex" />,
    fill: "bg-blue-400",
    color: "text-blue-700",
    border: "border-blue-900",
  },
  {
    id: 3,
    name: "React Js",
    icon: <SiReact size={26} className="relative inline-flex" />,
    fill: "bg-violet-400",
    color: "text-violet-700",
    border: "border-violet-900",
  },
  {
    id: 4,
    name: "JavaScript",
    icon: <IoLogoJavascript size={26} className="relative inline-flex" />,
    fill: "bg-yellow-400",
    color: "text-yellow-700",
    border: "border-yellow-900",
  },
  {
    id: 5,
    name: "Next Js",
    icon: <SiNextdotjs size={26} className="relative inline-flex" />,
    fill: "bg-cyan-400",
    color: "text-cyan-700",
    border: "border-cyan-900",
  },
  {
    id: 6,
    name: "WebStorm",
    icon: <SiWebstorm size={26} className="relative inline-flex" />,
    fill: "bg-sky-400",
    color: "text-sky-700",
    border: "border-sky-900",
  },
  {
    id: 7,
    name: "Node Js",
    icon: <FaNodeJs size={26} className="relative inline-flex" />,
    fill: "bg-emerald-400",
    color: "text-emerald-700",
    border: "border-emerald-900",
  },
];

export default function SkillsIcons() {
  const [currentSvg, setCurrentSvg] = useState(0);

  const svgLength = skillsData.length;

  const autoScroll = true;
  let svgInterval;
  let intervalTime = 3000;
  const nextSvg = () => {
    setCurrentSvg(currentSvg === svgLength - 1 ? 0 : currentSvg + 1);
  };

  function auto() {
    svgInterval = setInterval(nextSvg, intervalTime);
  }
  useEffect(() => {
    setCurrentSvg(0);
  }, []);
  useEffect(() => {
    if (autoScroll) {
      auto();
    }
    return () => clearInterval(svgInterval);
  }, [currentSvg]);

  return (
    <>
      <div className="grid grid-cols-7 justify-items-center text-center gap-3 select-none">
        {skillsData.map((svg, index) => {
          return (
            <div key={svg.id} className="flex h-7 w-7 relative inline-block">
              <span
                className={
                  index === currentSvg
                    ? `${svg.fill} animate-ping absolute inline-flex h-full w-full rounded-full opacity-75`
                    : "absolute inline-flex h-full w-full rounded-full opacity-75"
                }
              />
              <span
                className={index === currentSvg ? `${svg.color} relative` : ""}
              >
                {svg.icon}
                <span
                  className={
                    index === currentSvg
                      ? `w-20 h-5 absolute -bottom-5 -left-[1.60rem] text-xs font-Poppins font-semibold rounded px-1 py-1 inline-flex justify-center items-center bg-gray-200 border ${svg.border}  ${svg.color} overflow-hidden`
                      : "hidden"
                  }
                >
                  {svg.name}
                </span>
              </span>
            </div>
          );
        })}
      </div>
    </>
  );
}
