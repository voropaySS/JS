import Logo from "../../components/logo/logo";
import SignIn from "../../components/sign-in/sign-in";
import style from "./SignInPage.module.scss";

const EntryPage = () => {
  return (
    <>
      <div className={style.logoContainer}>
        <Logo width={"631px"} fs={"64px"} height={"186px"} />
      </div>
      <SignIn />
    </>
  );
};

export default EntryPage;
