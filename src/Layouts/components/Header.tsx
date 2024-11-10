import React from "react";
import Menu from "../../assets/Menu (1).svg";
import Search from "../../assets/icons8-search 1.svg";
import Tasks from "../../assets/MyOrders.svg";
import Likes from "../../assets/Group 84.png";
import Profile from "../../assets/Sign Up.svg";
import useClickStore from "../../zustand";
import { useLocation, useNavigate } from "react-router-dom";
import Logo from "../../assets/full-logo-to-home.png";

const Header: React.FC = () => {
  const setMenuOpen = useClickStore((state) => state.setClicked);
  const isMenuOpen = useClickStore((state) => state.isClicked);
  const navigate = useNavigate();
  const location = useLocation();
  const token = localStorage.getItem("token");

  return (
    <div className="fixed flex justify-between w-full py-[32px] items-center bg-[#ffffff] pl-[38px] pr-[40px]">
      <div className="flex max-w-[410px] w-full justify-between">
        {location.pathname !== "/login" && location.pathname !== "/add" ? (
          <img
            className="cursor-pointer"
            onClick={() => setMenuOpen(!isMenuOpen)}
            src={Menu}
            alt=""
          />
        ) : (
          <img
            height={120}
            className="cursor-pointer"
            src={Logo}
            onClick={() => navigate("/")}
          />
        )}

        <form
          className="flex  items-center relative"
          onSubmit={(e) => e.preventDefault()}
        >
          <input
            className="pl-[30px] py-[14px] bg-[#F3F3F3] rounded-md w-[300px]"
            placeholder="Найти объявления..."
            type="text"
          />
          <button className="absolute right-5">
            <img src={Search} alt="" />
          </button>
        </form>
      </div>
      <div className="flex gap-[70px] items-center">
        <button
          onClick={() => navigate("/add")}
          className="bg-mainOrange rounded-md font-medium px-[19px] py-[15px] h-[45px] flex flex-col justify-center"
        >
          Разместить объявление
        </button>
        <div className="flex items-center pt-5 gap-5 cursor-pointer">
          <img src={Tasks} alt="" />
          <img onClick={() => navigate("/likes")} src={Likes} alt="" />
          <img
            onClick={() => navigate(token ? "/profile" : "/login")}
            src={Profile}
            alt=""
          />
        </div>
        <select className="bg-[#F3F3F3] h-[45px] px-3 py-3 outline-none">
          <option value="ru">Ру</option>
          <option value="uz">Uz</option>
        </select>
      </div>
    </div>
  );
};

export default Header;
