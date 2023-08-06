import React from "react";
import styles from "./mainLayout.module.scss";
import { Outlet } from "react-router-dom";
import backgroundImg from "../../assets/mainBackground.jpg";

const MainLayout = () => {
  return (
    <main className={styles.main}>
      <img className={styles.background} src={backgroundImg} alt="background" />
      <div className={styles.container}>
        <Outlet />
      </div>
    </main>
  );
};

export default MainLayout;
