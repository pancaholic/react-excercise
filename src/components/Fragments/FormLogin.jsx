import { useEffect, useRef } from "react";
import Button from "../Elements/Button";
import InputForm from "../Elements/Input";

const FormLogin = () => {
  const handleLogin = (event) => {
    event.preventDefault();
    localStorage.setItem("email", event.target.email.value);
    localStorage.setItem("password", event.target.password.value);
    window.location.href = "/product";
  };

  const emailRef = useRef(null);

  useEffect(() => {
    emailRef.current.focus();
  }, []);
  
  return (
    <form onSubmit={handleLogin}>
      <InputForm
        label="Email"
        placeholder="example@gmail.com"
        name="email"
        type="email"
        ref={emailRef}
      />
      <InputForm label="Password" name="password" type="password" />
      <Button variant="bg-blue-700 w-full hover:bg-blue-500" type="submit">
        Login
      </Button>
    </form>
  );
};

export default FormLogin;
