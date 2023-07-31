import React from "react";
import { Link } from "react-router-dom";
import styles from "./sign.module.scss";

export function SignApplication() {
  const testData = [
    {
      Номер: "00893",
      Имя: "Сухарев М.К",
      name: "Договор об увеличении заработной платы",
      Дата: "21.09.2023",
      Тип: "application",
    },
    {
      Номер: "00893",
      Имя: "Сухарев М.К",
      name: "Заявление об увольнении",
      Дата: "21.09.2023",
      Тип: "application",
    },
    {
      Номер: "00893",
      Имя: "Сухарев М.К",
      name: "Заявление на перевод на другую должность",
      Дата: "21.09.2023",
      Тип: "application",
    },
    {
      Номер: "00893",
      Имя: "Сухарев М.К",
      name: "Заявление на уменьшение рабочих часов",
      Дата: "21.09.2023",
      Тип: "application",
    },
    {
      Номер: "00893",
      Имя: "Сухарев М.К",
      name: "Договор о переначначении должности",
      Дата: "21.09.2023",
      Тип: "application",
    },
  ];

  const [inputValue, setInputValue] = React.useState("");

  const filteredData = testData.filter((value) => {
    return value.name.toLowerCase().includes(inputValue.toLowerCase());
  });

  // const handleSubmit = (event) => {
  //     setInputValue('');
  // }

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  return (
    <div>
      <div className={styles.search}>
        <input
          type="text"
          placeholder="Введите название документа"
          value={inputValue}
          onChange={handleInputChange}
        />
        {/* <button onClick={handleSubmit}>Поиск</button> */}
      </div>
      <div className={styles.table}>
        <table>
          <thead>
            <tr>
              <th>Номер заявки</th>
              <th>Имя отправителя</th>
              <th>Название</th>
              <th>Дата</th>
              <th>Тип заявки</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {filteredData.map((row, index) => (
              <tr key={index}>
                {Object.values(row).map((value, index) => (
                  <td key={index}>{value}</td>
                ))}
                <td>
                  <Link to="/signing">Подписать</Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default SignApplication;
