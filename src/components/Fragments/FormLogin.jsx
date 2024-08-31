import { useEffect, useRef, useState } from "react";
import Button from "../Elements/Button/Index";
import InputForm from "../Elements/Input/Index";
import { login } from "../../services/auth.service";

const FormLogin = () => {
  const [loginFailed, setLoginFailed] = useState("");
  const handleLogin = (event) => {
    event.preventDefault();
    // localStorage.setItem("email", event.target.email.value);
    // localStorage.setItem("password", event.target.password.value);
    // window.location.href = "/products";
    const data = {
      username: event.target.email.value,
      password: event.target.password.value,
    };
    login(data, (status, res) => {
      if (status) {
        localStorage.setItem("token", res);
        window.location.href = "/products";
      } else {
        setLoginFailed(res.response.data);
      }
    });
  };
  const usernameRef = useRef(null);
  useEffect(() => {
    usernameRef.current.focus();
  }, []);
  return (
    <form onSubmit={handleLogin}>
      <InputForm label="username" type="text" placeholder="John Doe" name="email" ref={usernameRef} />
      <InputForm label="password" type="password" placeholder="Enter Your Password" name="password" />
      <Button color="bg-green-700 w-full  text-white" type="submit">
        Login
      </Button>
      {loginFailed && <div className="text-red-500 text-center mt-5">{loginFailed}</div>}
    </form>
  );
};

export default FormLogin;
