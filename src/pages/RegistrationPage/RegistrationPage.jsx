import Logo from "../../components/logo/logo";
import Registration from "../../components/registration/registration";
import style from "./RegistrationPage.module.scss";

const EntryPage = () => {
  return (
    <>
      <div className={style.container}>
        <Logo width={"631px"} fs={"64px"} height={"186px"} />
        <Registration />
      </div>
    </>
  );
};

export default EntryPage;
