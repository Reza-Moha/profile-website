import { useEffect, useState } from "react";
import Clock from "react-clock";
import "react-clock/dist/Clock.css";

export default function Index() {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const interval = setInterval(() => {
      setTime(new Date());
    }, 1000);

    return () => {
      clearInterval(interval);
    };
  }, []);
  return (
    <>
      <section className="w-full h-44 flex justify-center items-center text-center font-Poppins">
        <Clock
          value={time}
          renderNumbers={true}
          className="bg-gradient-to-tr from-gray-700 via-gray-900 to-black rounded-full  border border-indigo-700 shadow shadow-indigo-600 text-sm text-indigo-400 "
        />
      </section>
    </>
  );
}
