import React from "react";
import FormLogin from "../Fragments/FormLogin";

const AuthLayouts = (props) => {
  const { children, title } = props;
  return (
    <div className="flex justify-center bg-white items-center min-h-screen">
      <div className="w-full max-w-xs">
        <h1 className="text-3xl font-bold mb-2 text-blue-600">{title}</h1>
        <p className="font-medium text-slate-500">
          Welcome, Please enter your details
        </p>
        {children}
      </div>
    </div>
  );
};

export default AuthLayouts;
