import React from "react";
import Button from "../Elements/Button";
import InputForm from "../Elements/Input";

const FormLogin = () => {
  return (
    <form action="">
      <InputForm
        label="Email"
        placeholder="example@gmail.com"
        name="email"
        type="email"
      />
      <InputForm label="Password" name="password" type="password" />
      <Button variant="bg-blue-700 w-full">Login</Button>
    </form>
  );
};

export default FormLogin;
