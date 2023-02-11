import styles from "./login.module.css";
import { Outlet } from "react-router-dom";

export default function AuthLayout() {
  return (
    <>
      <section className={styles.section}>
        <Outlet />
      </section>
    </>
  );
}
