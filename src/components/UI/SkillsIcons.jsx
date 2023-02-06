import {
  FaNodeJs,
  IoLogoHtml5,
  IoLogoJavascript,
  SiNextdotjs,
  SiReact,
  SiTailwindcss,
  SiWebstorm,
} from "../../assets/icons";
import { Link } from "react-router-dom";
import { SiWhatsapp } from "../../assets/icons/index.jsx";
import { useEffect, useState } from "react";

const skillsData = [
  {
    id: 1,
    icon: <IoLogoHtml5 size={26} className="relative inline-flex" />,
    fill: "#E34C26",
  },
  {
    id: 2,
    icon: <SiTailwindcss size={26} className="relative inline-flex" />,
    fill: "#38bdf8",
  },
  {
    id: 3,
    icon: <SiReact size={26} className="relative inline-flex" />,
    fill: "#61dafb",
  },
  {
    id: 4,
    icon: <IoLogoJavascript size={26} className="relative inline-flex" />,
    fill: "#f0db4f",
  },
  {
    id: 5,
    icon: <SiNextdotjs size={26} className="relative inline-flex" />,
    fill: "#344767",
  },
  {
    id: 6,
    icon: <SiWebstorm size={26} className="relative inline-flex" />,
    fill: "#07c3f2",
  },
  {
    id: 7,
    icon: <FaNodeJs size={26} className="relative inline-flex" />,
    fill: "#3c873a",
  },
];

export default function SkillsIcons() {
  const [currentSvg, setCurrentSvg] = useState(0);

  const svgLength = skillsData.length;

  const autoScroll = true;
  let svgInterval;
  let intervalTime = 2000;
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
      <div className="grid grid-cols-7 justify-items-center text-center gap-3">
        {skillsData.map((svg, index) => {
          return (
            <div key={svg.id} className="flex h-7 w-7 relative inline-block">
              <span
                className={
                  index === currentSvg
                    ? "animate-ping absolute inline-flex h-full w-full rounded-full bg-[#25D366] opacity-75"
                    : "absolute inline-flex h-full w-full rounded-full opacity-75"
                }
              />
              {svg.icon}
            </div>
          );
        })}
      </div>
    </>
  );
}
