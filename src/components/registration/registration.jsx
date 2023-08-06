import React, { useState } from "react";
import styles from "./registration.module.scss";
import { Select } from "antd";
import { useNavigate } from "react-router-dom";
import { APPRoute } from "../../const";

const Registration = () => {
  const [formData, setFormData] = useState({
    login: "",
    password: "",
    name: "",
    role: "boss",
    email: "",
  });
  const navigate = useNavigate();

  const handleInputChange = (evt) => {
    setFormData({ ...formData, [evt.target.name]: evt.target.value });
  };

  const handleSelectChange = (value) => {
    setFormData({ ...formData, role: value });
  };

  const handleFormSubmit = (evt) => {
    evt.preventDefault();
    navigate(APPRoute.MAIN);
    console.log(formData);
  };

  return (
    <form className={styles.form} onSubmit={handleFormSubmit}>
      <div className={styles.header}>Регистрация</div>
      <div className={styles.inputContainer}>
        <input
          type="text"
          name="login"
          placeholder="Логин"
          required
          onChange={handleInputChange}
          value={formData.login}
        />
        <input
          type="password"
          name="password"
          placeholder="Пароль"
          required
          onChange={handleInputChange}
          value={formData.password}
        />
        <input
          type="text"
          name="name"
          placeholder="ФИО"
          required
          onChange={handleInputChange}
          value={formData.name}
        />
        <Select
          defaultValue="boss"
          size="large"
          className={styles.select}
          popupClassName={styles.selectList}
          onChange={handleSelectChange}
          options={[
            { value: "boss", label: "Руководитель" },
            { value: "worker", label: "Работник" },
          ]}
        />
        <input
          type="email"
          name="email"
          placeholder="Почта"
          required
          onChange={handleInputChange}
          value={formData.email}
        />
      </div>
      <button type="submit">Войти</button>
    </form>
  );
};

export default Registration;
