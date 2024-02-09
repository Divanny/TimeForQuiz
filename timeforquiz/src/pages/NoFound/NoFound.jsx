import React from "react";
import logo from "assets/logo.svg";
import { useNavigate } from "react-router-dom";

const NoFound = () => {
  const navigate = useNavigate();

  return (
    <div className="z-1 absolute w-screen h-screen flex items-center justify-center">
      <div className="flex-col flex justify-center w-3/4 sm:w-1/4 animate-fade-up">
        <div className="flex-col flex justify-center my-4">
          <img
            src={logo}
            alt="Logo"
            className="h-40 sm:h-40 my-5 select-none"
          />
          <h1 className="text-center text-ellipsis text-white font-bold text-9xl drop-shadow-md">
            404
          </h1>
          <h2 className="text-center text-ellipsis text-xs sm:text-xs lg:text-lg text-white drop-shadow-md my-5">
            It looks like you're lost...
          </h2>
          <button onClick={() => navigate("/")} className="btn btn-start btn-home my-4">
            <span>Go back home</span>
          </button>
        </div>
      </div>
    </div>
  );
};
export default NoFound;
