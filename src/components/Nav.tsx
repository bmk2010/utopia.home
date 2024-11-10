import React, { useState } from "react";
import Logo from "../assets/full-logo-to-home.png";
import { useNavigate } from "react-router-dom";

interface Nav {
  style?: string;
}

const Nav: React.FC<Nav> = ({ style }) => {
  const [otValue, setOtValue] = useState("");
  const [isComission, setIsComission] = useState(false);
  const navigate = useNavigate();

  return (
    <div
      className={`max-w-[400px] w-full pt-[35px] pr-[32px] bg-[#fff] pl-[38px] ${style}`}
    >
      <img
        onClick={() => navigate("/")}
        className="pb-[23px] cursor-pointer"
        src={Logo}
        alt=""
      />
      <hr className="border-[#EEEEEE] mb-[33px]" />
      <h2 className="text-[14px] font-medium mb-[30px]">Фильтр</h2>
      <div className="flex gap-5 mb-[30px]">
        <select className="hover:bg-mainOrange transition-[1s] py-[15px] px-2 bg-mainGray rounded-md">
          <option value="Продажа">Продажа</option>
        </select>
        <select className="hover:bg-mainOrange transition-[1s] py-[15px] px-2 bg-mainGray rounded-md">
          <option value="Аренда">Аренда</option>
        </select>
        <select className="hover:bg-mainOrange transition-[1s] py-[15px] px-2 bg-mainGray rounded-md">
          <option value="Сожит.">Сожит.</option>
        </select>
      </div>
      <div className="flex gap-5 flex-col mb-[25px]">
        <select className="bg-mainGray py-4 pl-5 rounded-md hover:bg-mainOrange transition-[0.5s]">
          <option value="Категория недвижимости">Категория недвижимости</option>
        </select>
        <select className="bg-mainGray py-4 pl-5 rounded-md hover:bg-mainOrange transition-[0.5s]">
          <option value="Область">Область</option>
        </select>
        <select className="bg-mainGray py-4 pl-5 rounded-md hover:bg-mainOrange transition-[0.5s]">
          <option value="Район">Район</option>
        </select>
        <select className="bg-mainGray py-4 pl-5 rounded-md hover:bg-mainOrange transition-[0.5s]">
          <option value="Ремонт">Ремонт</option>
        </select>
      </div>
      <div className="flex flex-col gap-[30px] mb-[25px]">
        <div className="flex justify-between items-center">
          <h3>Комнат</h3>
          <div className="flex gap-5 bg-mainGray items-center">
            <p>от</p>
            <input
              value={otValue}
              onChange={(e) => setOtValue(e.target.value)}
              className="border-b w-[34px] outline-none text-center text-[12px] bg-mainGray py-3 px-[24px] text-black"
              type="text"
            />
            <p>до</p>
            <input
              value={otValue}
              onChange={(e) => setOtValue(e.target.value)}
              className="border-b w-[34px] outline-none text-center text-[12px] bg-mainGray py-3 px-[24px] text-black"
              type="text"
            />
          </div>
        </div>
        <div className="flex justify-between items-center">
          <h3>Площадь</h3>
          <div className="flex gap-5 bg-mainGray items-center">
            <p>от</p>
            <input
              value={otValue}
              onChange={(e) => setOtValue(e.target.value)}
              className="border-b w-[34px] outline-none text-center text-[12px] bg-mainGray py-3 px-[24px] text-black"
              type="text"
            />
            <p>до</p>
            <input
              value={otValue}
              onChange={(e) => setOtValue(e.target.value)}
              className="border-b w-[34px] outline-none text-center text-[12px] bg-mainGray py-3 px-[24px] text-black"
              type="text"
            />
          </div>
        </div>
      </div>
      <select className="bg-mainGray py-4 pl-5 rounded-md hover:bg-mainOrange transition-[0.5s] w-full mb-5">
        <option value="Категория недвижимости">Рядом</option>
      </select>
      <h2>Комиссионные</h2>
      <div className="flex gap-[34px] items-center">
        <div className="flex gap-[18px] items-center">
          <p className="font-medium">Да</p>
          <button
            onClick={() => setIsComission(false)}
            className={`border-2 w-[18px] h-[18px] rounded-sm border-[#CCCCCC] ${
              !isComission ? "bg-mainOrange" : ""
            }`}
          ></button>
        </div>
        <div className="flex gap-[18px] items-center">
          <p className="font-medium">Нет</p>
          <button
            onClick={() => setIsComission(true)}
            className={`border-2 w-[18px] h-[18px] rounded-sm border-[#CCCCCC] ${
              isComission ? "bg-mainOrange" : ""
            }`}
          ></button>
        </div>
        <button className="px-5 py-4 bg-mainOrange font-medium rounded-md">
          Применить
        </button>
      </div>
    </div>
  );
};

export default Nav;
