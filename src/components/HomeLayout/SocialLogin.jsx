import React from "react";
import { FaGithub } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";

const SocialLogin = () => {
  return (
    <div>
      <h2 className="font-bold mb-5">Login with</h2>
      <div className="flex flex-col gap-4">
        <button className="btn btn-outline btn-secondary">
          <FcGoogle size={24} />
          Login with Google
        </button>
        <button className="btn btn-primary btn-outline">
          <FaGithub size={24} />
          Login with Github
        </button>
      </div>
    </div>
  );
};

export default SocialLogin;
