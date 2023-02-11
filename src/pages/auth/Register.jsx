import { useState } from "react";
import {
  HiFingerPrint,
  HiAtSymbol,
  HiOutlineUserCircle,
} from "../../assets/icons";
import styles from "./login.module.css";
import logo from "../../assets/image/logo.png";
import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";
import { useFormik } from "formik";
import { RegisterValidate } from "../../validations/index.jsx";

export default function Register() {
  const [show, setShow] = useState({ password: false, confirmPassword: false });
  const formik = useFormik({
    initialValues: {
      userName: "",
      email: "",
      password: "",
      confirmPassword: "",
    },
    validate: RegisterValidate,

    onSubmit: registerHandler,
  });

  async function registerHandler(values) {
    console.log(values);
  }
  return (
    <>
      <Helmet>
        <title className="font-sansBold">ثبت نام به پنل کاربری</title>
      </Helmet>
      <section className={styles.section}>
        <div className={styles.mainContainer}>
          <div>
            <img width="80" height={30} src={logo} alt="logo" />
          </div>
          <div className="w-full h-10 border-b border-gray-700">
            <h1 className="font-medium text-md">وارد پنل کاربری خود شوید</h1>
          </div>
          <div className="w-full flex justify-center items-center text-center gap-x-4 px-5">
            <span className="w-full h-px bg-violet-600 block rounded"></span>
            <span className="text-xs">or</span>
            <span className="w-full h-px bg-violet-600 block rounded"></span>
          </div>
          <div className="w-full px-6">
            <form
              className="flex flex-col gap-y-4"
              onSubmit={formik.handleSubmit}
            >
              <div className="flex flex-col gap-y-1">
                <div className="inline-flex justify-center relative">
                  <input
                    type="text"
                    name="userName"
                    id="userName"
                    placeholder="نام و نام خانوادگی"
                    autoComplete="off"
                    className={`${styles.inputs} ${
                      formik.errors.userName && formik.touched.userName
                        ? "!border !border-rose-600"
                        : ""
                    }`}
                    {...formik.getFieldProps("userName")}
                  />
                  <span className="formIcon flex items-center px-4 absolute left-0 top-2">
                    <HiOutlineUserCircle />
                  </span>
                </div>
                {formik.errors.userName && formik.touched.userName ? (
                  <span className="text-xs text-rose-600">
                    {formik.errors.userName}
                  </span>
                ) : (
                  <></>
                )}
              </div>
              <div className="flex flex-col gap-y-1">
                <div className="inline-flex justify-center relative">
                  <input
                    type="text"
                    name="email"
                    id="email"
                    placeholder="ایمیل"
                    autoComplete="off"
                    className={`${styles.inputs} ${
                      formik.errors.email && formik.touched.email
                        ? "!border !border-rose-600"
                        : ""
                    }`}
                    {...formik.getFieldProps("email")}
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
              <div className="flex flex-col gap-y">
                <div className="inline-flex justify-center relative">
                  <input
                    type={show.password ? "text" : "password"}
                    name="password"
                    id="password"
                    autoComplete="off"
                    placeholder="رمز عبور"
                    className={`${styles.inputs} ${
                      formik.errors.password && formik.touched.password
                        ? "!border !border-rose-600"
                        : ""
                    }`}
                    {...formik.getFieldProps("password")}
                  />
                  <span className="formIcon flex items-center px-4 absolute left-0 top-2">
                    <HiFingerPrint
                      className="cursor-pointer"
                      onClick={() =>
                        setShow({ ...show, password: !show.password })
                      }
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
              <div className="flex flex-col gap-y-1">
                <div className="inline-flex justify-center relative">
                  <input
                    type={show.confirmPassword ? "text" : "password"}
                    name="passwordConfirm"
                    id="passwordConfirm"
                    autoComplete="off"
                    placeholder=" تکرار رمز عبور"
                    className={`${styles.inputs} ${
                      formik.errors.confirmPassword &&
                      formik.touched.confirmPassword
                        ? "!border !border-rose-600"
                        : ""
                    }`}
                    {...formik.getFieldProps("confirmPassword")}
                  />
                  <span className="formIcon flex items-center px-4 absolute left-0 top-2">
                    <HiFingerPrint
                      className="cursor-pointer"
                      onClick={() =>
                        setShow({
                          ...show,
                          confirmPassword: !show.confirmPassword,
                        })
                      }
                    />
                  </span>
                </div>
                {formik.errors.confirmPassword &&
                formik.touched.confirmPassword ? (
                  <span className="text-xs text-rose-600">
                    {formik.errors.confirmPassword}
                  </span>
                ) : (
                  <></>
                )}
              </div>

              <button
                type="submit"
                className="bg-violet-600 text-slate-900 rounded p-1"
              >
                ثبت نام
              </button>
            </form>
          </div>
          <div className="w-full flex justify-center">
            <p className="text-xs">
              قبلا ثبت نام کرده ام!
              <Link to="/auth/login" className="font-bold text-[#6366f1] mr-1 ">
                وارد شوید
              </Link>
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
