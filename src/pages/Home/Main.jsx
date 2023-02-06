import MoonLight from "../../components/UI/Moon/MoonLight";
import { useEffect } from "react";
import SlideOne from "./SlideOne";
import SlideTwo from "./SlideTwo";
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
      <main className="w-full h-screen snap-mandatory snap-y overflow-y-scroll">
        <MoonLight />
        <SlideOne />
        <SlideTwo />
      </main>
    </>
  );
}
