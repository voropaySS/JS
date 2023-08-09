import React from "react";
import styles from './SignPage.module.scss';
import sign from '../../assets/signBlue.svg';

const SignPage = () => {
    const status = false;
    return (
        <div className={styles.form}>
            <p className={styles.title}>Заявление о переводе на другую должность</p>

            <div className={styles.block}>
                <p>Сухарев М.К.</p>
                <p>21.09.2023</p>
            </div>

            <div className={styles.block}>
                <img src={sign} alt="sign" className={styles.icon} />
                <p>№ 00835</p>
            </div>

            <div className={styles.status}>
                <p>Статус: </p>
                {status ?
                    <p className={styles.yes}> Подписано</p> : <p className={styles.no}> Отклонено</p>}
            </div>

            <p className={styles.comm}> 
                Уточните, пожалуйста, дату отъезда и возвращения  
            </p>

        </div>
    )

}

export default SignPage;