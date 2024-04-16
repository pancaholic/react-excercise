import React, { useEffect, useRef } from "react";
import Button from "../Elements/Button";
import InputForm from "../Elements/Input";

const FormRegister = () => {
  const nameRef = useRef(null);

  useEffect(() => {
    nameRef.current.focus();
  }, []);

  return (
    <form action="">
      <InputForm
        label="Full Name"
        placeholder="Insert your name here...."
        name="fullname"
        type="text"
        ref={nameRef}
      />
      <InputForm
        label="Email"
        placeholder="example@gmail.com"
        name="email"
        type="email"
      />
      <InputForm
        label="Password"
        placeholder="Input your password here...."
        name="password"
        type="password"
      />
      <InputForm
        label="Confirm Password"
        name="confirmpassword"
        placeholder="Confirm password here...."
        type="password"
      />

      <Button variant="bg-blue-700 w-full">Register</Button>
    </form>
  );
};

export default FormRegister;
