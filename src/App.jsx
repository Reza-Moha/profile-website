import { useRoutes } from "react-router-dom";
import routes from "./routes.jsx";
import { Toaster } from "react-hot-toast";
import "aos/dist/aos.css";
import { useEffect, useState } from "react";
import Loader from "./components/Loader";
import { useSelector } from "react-redux";
export default function App() {
  const mainRoutes = useRoutes(routes);
  const [redirect, setRedirect] = useState(false);
  const { user } = useSelector((state) => state.userSlice);

  useEffect(() => {
    let timeOut = setTimeout(() => {
      setRedirect(true);
    }, 2000);

    return () => {
      clearTimeout(timeOut);
    };
  }, []);

  if (!user && !redirect) {
    return <Loader />;
  }

  return (
    <>
      <Toaster position="top-left" />
      {mainRoutes}
    </>
  );
}
