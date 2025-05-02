import React from "react";
import swimming from "../assets/swimming.png";
import playground from "../assets/playground.png";
import classroom from "../assets/class.png";

const Qzone = () => {
  return (
    <div className="bg-base-200 p-3">
      <h1 className="font-bold mb-5">Qzone</h1>
      <div className="space-y-5 w-full">
        <img className="w-full" src={swimming} alt="" />
        <img className="w-full" src={classroom} alt="" />
        <img className="w-full" src={playground} alt="" />
      </div>
    </div>
  );
};

export default Qzone;
