import React from "react";
import Header from "../header/header";
import styles from "./layout.module.scss";
import { Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <div className={styles.page}>
      <Header />
      <main className={styles.main}>
        <Outlet />
      </main>
    </div>
  );
};

export default Layout;
