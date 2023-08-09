import React from "react";
import styles from "./SigningPage.module.scss";
import sign from '../../assets/signBlue.svg'

const SigningPage = () => {
  const [comm, setComm] = React.useState('');
  const changeComm = (evt) => {
    setComm(evt.target.value);
  }
  const openDoc = () => {
    //открыть окно с пдф
  }
  return (
    <div className={styles.form}>
      <p className={styles.title}>Заявление о переводе на другую должность</p>

      <div className={styles.block}>
        <p>Сухарев М.К.</p>
        <p>21.09.2023</p>
      </div>

      <div className={styles.block}>
        <img src={sign} alt="sign" className={styles.icon} onClick={openDoc}/>
        <p>№ 00835</p>
      </div>

      <textarea className={styles.comm}
        placeholder="Комментарий"
        value={comm}
        onChange={changeComm}>
      </textarea>

      <div className={styles.submit}>
        <button className={styles.sign}>Подписать</button>
        <button className={styles.notSign}>Отклонить</button>
      </div>
    </div>
  );
};

export default SigningPage;
