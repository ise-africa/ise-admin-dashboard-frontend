import OnboardingLayout from "../../Components/OnboardingLayout/OnboardingLayout";
import classes from "./Login.module.css";
import login from "../../Assets/Images/login.svg";
import Input from "../../Components/Input/Input";
import Button from "../../Components/Button/Button";
import iseLogo from "../../Assets/Images/iseLogo.svg";
import { useContext } from "react";
import { AuthUserContext } from "../../Context/AuthUserContext";
import Error from "../../Components/Error/Error";
import { capitalize } from "../../HelperFunctions/capitalize";

const Login = () => {
  // Context
  const { signIn, signInRequest, userLoginInfo, setUserLoginInfo } =
    useContext(AuthUserContext);

  // Utils
  const changeHandler = (e: any) => {
    setUserLoginInfo((prevState) => {
      return { ...prevState, [e?.target?.name]: e.target?.value };
    });
  };

  const changeHandler2 = (e: any) => {
    setUserLoginInfo((prevState) => {
      return { ...prevState, [e?.target?.name]: !e.target.checked };
    });
  };

  return (
    <OnboardingLayout image={login}>
      <section className={classes.container}>
        <img src={iseLogo} alt="Ise Logo" className={classes.logo} />
        <div className={classes.header}>
          <h4>Welcome to iṣẹ́ School</h4>
          <p>Login with the details sent to your email</p>
        </div>
        <form
          onSubmit={(e) => {
            e.preventDefault();
          }}
        >
          {signInRequest?.error && (
            <Error type="error">{capitalize(signInRequest.error)}</Error>
          )}
          <Input
            label="Email"
            isRequired
            placeholder="name@gmail.com"
            value={userLoginInfo.email as string}
            onChange={changeHandler}
            name="email"
          />
          <span>
            <Input
              label="Password"
              isRequired
              type="password"
              placeholder="************"
              name="password"
              onChange={changeHandler}
              value={userLoginInfo.password as string}
            />
          </span>

          <div className={classes.rememberAndForgot}>
            <div>
              <input
                type="checkbox"
                id="remember"
                checked={false}
                name="remember"
                onChange={changeHandler2}
              />
              <span>Remember Me</span>
            </div>
          </div>

          <div className={classes.buttonSection}>
            <Button
              onClick={() => {
                signIn();
              }}
              loading={signInRequest.isLoading}
            >
              Log in
            </Button>
          </div>
        </form>
      </section>
    </OnboardingLayout>
  );
};

export default Login;
