import {useRoutes} from "react-router-dom";
import routes from "./routes.js";

export default function App(){
    return useRoutes(routes)
}