import React from "react";
import styles from "./signing.module.scss";
import withLayout from "../../hocs/with-layout";

const Signing = () => {
    return (
        <div className={styles.form}>
            <h3>Подписание</h3>
            <p>Кто направил </p>
            <div className={styles.showPDF}>Просмотр PDF</div>

            <div className={styles.comm}>
                <p>Комментарий</p>
                <textarea></textarea>
            </div>

            <div className={styles.submit}>
                <button>Отклонить</button>
                <button>Подписать</button>
            </div>
        </div>
    )
}

export default withLayout(Signing);