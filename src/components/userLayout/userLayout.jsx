import React from "react";
import Header from "../header/header";
import styles from "./userLayout.module.scss";
import { Outlet } from "react-router-dom";
import headerBackgroundImg from "../../assets/headerBackground.jpg";

const UserLayout = () => {
  return (
    <div className={styles.page}>
      <img
        className={styles.background}
        src={headerBackgroundImg}
        alt="background"
      />
      <Header />
      <main className={styles.main}>
        <Outlet />
      </main>
    </div>
  );
};

export default UserLayout;
