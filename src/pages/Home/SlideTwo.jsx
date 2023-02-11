import { getCourses } from "../../services/courses.js";
import { useEffect, useState } from "react";

export default function SlideTwo() {
  const [courses, setCourses] = useState([]);
  useEffect(() => {
    getCourses().then((data) => setCourses(data));
  }, []);

  console.log(courses);
  return (
    <>
      <section className="w-full h-screen snap-start flex justify-center items-center">
        <div className="grid grid-cols-3 grid-rows-2 gap-4">
          {courses &&
            courses.map((course) => {
              return (
                <div
                  key={course.id}
                  className="col-span-1  rounded shadow border flex flex-col justify-center items-center gap-y-2 text-slate-50"
                >
                  <img src={course.poster} alt={course.name} />
                  <h1>{course.name}</h1>
                </div>
              );
            })}
        </div>
      </section>
    </>
  );
}
