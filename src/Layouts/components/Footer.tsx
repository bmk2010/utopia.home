import React from "react";
import telegram from "../../assets/Frame (8).svg";
import tel from "../../assets/Frame (9).svg";
import email from "../../assets/Frame (10).svg";
import useClickStore from "../../zustand";

const Footer: React.FC = () => {
  const filter = useClickStore(state => state.isClicked)

  return (
    <div className={`flex pt-[50px] bg-[#fff] ${filter ? "pl-[419px]" : "pl-[119px]"}`}>
      <div className="flex flex-col mr-[125px]">
        <h2 className="text-[16px] text-[#161A1D] font-medium mb-5">
          Полезные Ссылки
        </h2>
        <p className="text-[#999999] text-[14px] font-normal mb-2">О Нас</p>
        <p className="text-[#999999] text-[14px] font-normal mb-[65px]">
          Пользовательское Соглашение
        </p>
        <p className="text-[#999999] text-[12px] font-bold">
          ©️ 2021 <span className="text-[#000]">Utopia</span> | Все права
          защищены
        </p>
      </div>
      <div className="flex flex-col mr-[200px]">
        <h2 className="text-[16px] text-[#161A1D] font-medium mb-5">
          Наши Страницы
        </h2>
        <div className="flex gap-3">
          <img src={telegram} alt="" />
          <img src={telegram} alt="" />
          <img src={telegram} alt="" />
          <img src={telegram} alt="" />
        </div>
      </div>
      <div className="flex flex-col">
        <div className="flex gap-4 items-center mb-[10px]">
          <img src={tel} alt="" />
          <h2 className="text-[16px] text-[#161A1D] font-medium">
            Наши Страницы
          </h2>
        </div>
        <h1 className="text-[24px] font-medium mb-3">+998 99 880 80-80</h1>
        <div className="flex gap-[17px] text-[#999] mb-3">
          <img src={email} alt="" />
          <p>info@utopia.uz</p>
        </div>
        <div className="flex gap-[17px] text-[#999]">
          <img src={email} alt="" />
          <p>г. Ташкент, Чиланзарский р-н, ул. Гульхани, д-52</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
