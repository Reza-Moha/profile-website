import { useRoutes } from "react-router-dom";
import routes from "./routes.jsx";
import "aos/dist/aos.css";

export default function App() {
  return useRoutes(routes);
}
