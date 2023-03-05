import React from "react";
import { useNavigate } from "react-router-dom";
import { FcGoogle } from "react-icons/fc";
import shareVideo from "../assets/share.mp4";
import logo from "../assets/logowhite.png";
import { GoogleLogin, googleLogout } from "@react-oauth/google";
import jwt_decode from "jwt-decode";
import { client } from "../client";
const Login = () => {
  const navigate = useNavigate();
  const responseGoogle = (response) => {
    console.log(response);
    const decoded = jwt_decode(response.credential);
    localStorage.setItem("user", JSON.stringify(decoded));
    const { name, sub, picture } = decoded;
    const doc = {
      _id: sub,
      _type: "user",
      userName: name,
      image: picture,
    };
    console.log(doc);
    client
      .createIfNotExists(doc)
      .then(() => {
        console.log("first");
        navigate("/", { replace: true });
      })
      .catch((err) => {
        console.log("qwe");
        console.log(err);
      });
  };
  return (
    <div className="flex justify-start items-center flex-col h-screen">
      <div className="relative w-full h-full">
        <video
          src={shareVideo}
          type="video/mp4"
          loop
          controls={false}
          muted
          autoPlay
          className="w-full h-full object-cover"
        ></video>
        <div className="bg-blackOverlay absolute flex flex-col justify-center items-center top-0 right-0 left-0 bottom-0">
          <div className="p-5">
            <img src={logo} alt="logo" width="130px" />
          </div>
          <div className="shadow-2xl">
            <GoogleLogin
              render={(renderProps) => (
                <button
                  type="button"
                  className="bg-mainColor flex justify-center items-center p-3 rounded-lg cursor-pointer outline-none"
                  onClick={renderProps.onClick}
                  disabled={renderProps.disabled}
                >
                  <FcGoogle className="mr-4" />
                  Sign in with Google
                </button>
              )}
              onSuccess={responseGoogle}
              onError={responseGoogle}
              cookiePolicy="single-host_origin"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
