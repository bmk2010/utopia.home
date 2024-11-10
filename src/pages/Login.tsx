import React from "react";
import MainLayout from "../Layouts/MainLayout";
import bg from "../assets/Vector 8.png";
import phone from "../assets/Frame (11).svg";
import { IoIosLock } from "react-icons/io";
import request from "../axios";
import useTokenStore from "../token.zustand";
import { useNavigate } from "react-router-dom";

const Login: React.FC = () => {
  const set = useTokenStore((state) => state.setToken);
  const navigate = useNavigate();

  const handleLogin = (evt: React.FormEvent<HTMLFormElement>) => {
    evt.preventDefault();
    request
      .post("https://api.escuelajs.co/api/v1/auth/login", {
        email: "john@mail.com",
        password: "changeme",
      })
      .then((response) => {
        set(response.data.access_token);
        localStorage.setItem("token", response.data.access_token);
        navigate("/");
      });
  };

  return (
    <MainLayout>
      <div className="w-[100vw] h-[100vh] bg-[#ffb53e] flex justify-center items-center">
        <div className="rounded-3xl bg-[white] pb-[44px] mt-48">
          <div className="text-center bg-[#FCA311CC] px-[129px]">
            Войти в аккаунт
          </div>
          <img className="mb-[50px]" src={bg} alt="" />

          <form
            onSubmit={(e) => handleLogin(e)}
            className="flex max-w-[350px] mx-auto flex-col gap-[45px]"
          >
            <div className="relative h-[20px]">
              <img className="absolute top-[50%]" src={phone} alt="" />
              <input
                required
                type="text"
                placeholder="Номер телефона"
                className="focus:border-none outline-none border-b-[1px] border-b-[#FCA311] w-[350px] pl-[36px] py-[10px]"
              />
            </div>
            <div className="relative h-[20px]">
              <IoIosLock
                size={24}
                className="absolute top-[50%]"
                color="yellow"
              />
              <input
                required
                type="text"
                placeholder="Номер телефона"
                className="focus:border-none outline-none border-b-[1px] border-b-[#FCA311] w-[350px] pl-[36px] py-[10px]"
              />
            </div>
            <p className="text-[#FCA311] cursor-pointer">Забыли пароль?</p>
            <button className="w-full bg-[#FCA311] py-3 px-[153px] rounded-[5px] font-medium">
              Войти
            </button>
            <p className="text-[#999999] font-normal cursor-pointer">
              Еще не зарегистрированы?
            </p>
          </form>
        </div>
      </div>
    </MainLayout>
  );
};

export default Login;
