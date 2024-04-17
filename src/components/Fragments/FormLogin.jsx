import { useEffect, useRef, useState } from "react";
import Button from "../Elements/Button";
import InputForm from "../Elements/Input";
import { login } from "../../services/auth.services";

const FormLogin = () => {
  const [loginFailed, setLoginFailed] = useState("");
  const handleLogin = (event) => {
    event.preventDefault();
    // localStorage.setItem("email", event.target.email.value);
    // localStorage.setItem("password", event.target.password.value);
    // window.location.href = "/product";
    const data = {
      username: event.target.username.value,
      password: event.target.password.value,
    };

    login(data, (status, res) => {
      if (status) {
        localStorage.setItem("token", res);
        window.location.href = "/product";
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
      <InputForm
        label="Username"
        placeholder="john doe"
        name="username"
        type="text"
        ref={usernameRef}
      />
      <InputForm label="Password" name="password" type="password" />
      <Button variant="bg-blue-700 w-full hover:bg-blue-500" type="submit">
        Login
      </Button>
      {loginFailed && <p className="text-red-500 text-center mt-2">{loginFailed}</p>}
    </form>
  );
};

export default FormLogin;
