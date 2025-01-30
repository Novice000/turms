import React from "react";
import {  PuffLoader } from "react-spinners";

function Loading() {
  return (
    <div className="w-full h-screen flex justify-center items-center backdrop-blur-lg">
      <PuffLoader size={20} speedMultiplier={1} color="black" />
    </div>
  );
}

export default Loading;
