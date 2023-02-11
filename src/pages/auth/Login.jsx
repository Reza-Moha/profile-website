import { useState } from "react";
import {
  AiOutlineGoogle,
  ImGithub,
  HiFingerPrint,
  HiAtSymbol,
  DiApple,
} from "../../assets/icons";
import styles from "./login.module.css";
import logo from "../../assets/image/logo.png";
import { Helmet } from "react-helmet";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { GithubAuth, GoogleAuth, login } from "../../fireBase";
import { Formik, useFormik } from "formik";
import LoginValidate from "../../validations";

export default function Login() {
  const [showPassword, setShowPassword] = useState(false);

  const navigate = useNavigate();
  const location = useLocation();

  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validate: LoginValidate,
    onSubmit: submitHandler,
  });
  async function submitHandler(values) {
    await login(values.email, values.password);
    navigate(location.state?.return_url || "/", {
      replace: true,
    });
  }
  async function googleAuthHandler() {
    await GoogleAuth();
    navigate(location.state?.return_url || "/", {
      replace: true,
    });
  }
  async function githubAuthHandler() {
    await GithubAuth();
    navigate(location.state?.return_url || "/", {
      replace: true,
    });
  }
  return (
    <>
      <Helmet>
        <title className="font-sansBold">ورود به پنل کاربری</title>
      </Helmet>

      <div className={styles.mainContainer}>
        <Link to="/">
          <img width="80" height={30} src={logo} alt="logo" />
        </Link>
        <div className="w-full h-10 border-b border-gray-700">
          <h1 className="font-medium text-md">وارد پنل کاربری خود شوید</h1>
        </div>
        <div className="w-full px-6">
          <form
            onSubmit={formik.handleSubmit}
            className="flex flex-col gap-y-4"
          >
            <div className="flex flex-col gap-y-1">
              <div className="inline-flex justify-center relative">
                <input
                  type="text"
                  name="email"
                  id="email"
                  value={formik.values.email}
                  onChange={formik.handleChange}
                  {...formik.getFieldProps("email")}
                  placeholder="ایمیل"
                  autoComplete="off"
                  className={`${styles.inputs} ${
                    formik.errors.email && formik.touched.email
                      ? "border border-rose-600"
                      : ""
                  }`}
                />
                <span className="formIcon flex items-center px-4 absolute left-0 top-2">
                  <HiAtSymbol />
                </span>
              </div>
              {formik.errors.email && formik.touched.email ? (
                <span className="text-xs text-rose-600">
                  {formik.errors.email}
                </span>
              ) : (
                <></>
              )}
            </div>
            <div className="flex flex-col gap-y-1">
              <div className="inline-flex justify-center relative">
                <input
                  type={showPassword ? "text" : "password"}
                  name="password"
                  id="password"
                  onChange={formik.handleChange}
                  value={formik.values.password}
                  {...formik.getFieldProps("password")}
                  autoComplete="off"
                  placeholder="رمز عبور"
                  className={`${styles.inputs} ${
                    formik.errors.password && formik.touched.password
                      ? "!border !border-rose-600"
                      : ""
                  }`}
                />
                <span className="formIcon flex items-center px-4 absolute left-0 top-2">
                  <HiFingerPrint
                    className="cursor-pointer"
                    onClick={() => setShowPassword(!showPassword)}
                  />
                </span>
              </div>
              {formik.errors.password && formik.touched.password ? (
                <span className="text-xs text-rose-600">
                  {formik.errors.password}
                </span>
              ) : (
                <></>
              )}
            </div>
            <button
              disabled={!formik.isValid || !formik.dirty}
              type="submit"
              className="bg-violet-600 text-slate-900 rounded p-1 disabled:opacity-40"
            >
              ورود
            </button>
          </form>
        </div>
        <div className="w-full flex justify-center items-center text-center gap-x-4 px-5">
          <span className="w-full h-px bg-violet-600 block rounded"></span>
          <span className="text-xs">or</span>
          <span className="w-full h-px bg-violet-600 block rounded"></span>
        </div>
        <div className="w-full grid grid-cols-2 grid-row-2 justify-items-center text-center gap-2 px-4">
          <span className={styles.signInMethod} onClick={googleAuthHandler}>
            <AiOutlineGoogle size={20} />
            <p className="text-[10px] text-center">ورود با اکانت Google</p>
          </span>
          <span className={styles.signInMethod} onClick={githubAuthHandler}>
            <ImGithub size={20} />
            <p className="text-[10px] text-center">ورود با اکانت Github</p>
          </span>
          <span className={styles.signInMethodApple}>
            <DiApple size={22} />
            <p className="text-[10px] text-center">ورود با اکانت Apple</p>
          </span>
        </div>

        <div className="w-full flex justify-center">
          <p className="text-xs">
            قبلا ثبت نام نکرده ام!
            <Link to="/auth/register" className="font-bold text-[#6366f1] mr-1">
              ثبت نام
            </Link>
          </p>
        </div>
      </div>
    </>
  );
}
