import Entry from "../../components/entry/entry";
import Logo from "../../components/logo/logo";
import style from "./EntryPage.module.scss";

const EntryPage = () => {
  return (
    <>
      <div className={style.logoContainer}>
        <Logo width={"631px"} fs={"64px"} height={"186px"} />
      </div>
      <Entry />
    </>
  );
};

export default EntryPage;
