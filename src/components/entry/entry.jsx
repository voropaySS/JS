import React from "react";
import { Link } from "react-router-dom";
import styles from "./entry.module.scss";
import { APPRoute } from "../../const";

const Entry = () => {
  return (
    <div className={styles.form}>
      <Link to={APPRoute.REGISTRATION}>
        <button type="button">Регистрация</button>
      </Link>
      <Link to={APPRoute.LOGIN}>
        <button type="button">Авторизация</button>
      </Link>
    </div>
  );
};

export default Entry;
