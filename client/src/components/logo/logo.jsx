import styles from "./logo.module.scss";

const Logo = ({ width, height, fs }) => {
  return (
    <div className={styles.container} style={{ width, height, fontSize: fs }}>
      <span className={styles.text}>Атом документы</span>
    </div>
  );
};

export default Logo;
