import { get, post } from "./request";

export const getCourses = () => get("http://localhost:3000/courses");
export const getCourse = (id) => post(`http://localhost:3000/courses/${id}`);
