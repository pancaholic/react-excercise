import React from "react";
import Button from "../components/Elements/Button";

const DashboardPage = () => {
  return (
    <div className="flex justify-center items-center h-screen">
      <div className="flex flex-col items-center">
        <h1 className="text-3xl font-bold text-green-700 mb-5">
          {" "}
          Welcome to Dashboard
        </h1>
        <Button
          variant="bg-blue-700 hover:bg-blue-500"
          onClick={() => (window.location.href = "/login")}
        >
          Login
        </Button>
      </div>
    </div>
  );
};

export default DashboardPage;
