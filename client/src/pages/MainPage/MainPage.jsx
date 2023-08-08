import React from "react";
import styles from "./MainPage.module.scss";
import Table from "../../components/Table/Table";
import testData from "../ForSigningPage/mock_data";
import Search from "../../components/Search/Search";

const MainPage = () => {
  const [inputValue, setInputValue] = React.useState("");

  const filteredData = testData?.filter((value) => {
    return value.name.toLowerCase().includes(inputValue.toLowerCase());
  });

  return (
    <div className={styles.main}>
      <Search input={inputValue} setInput={setInputValue} />
      <Table data={filteredData} />
    </div >
  );
};

export default MainPage;
