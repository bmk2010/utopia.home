import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import MainLayout from "../Layouts/MainLayout";
import useClickStore from "../zustand";
import Nav from "../components/Nav";
import MyAccount from "../assets/MyProfile.svg";
import LogOut from "../assets/Group 122.svg";
import { IoMdCheckmark } from "react-icons/io";
import { RxCross1 } from "react-icons/rx";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const ProfilePage: React.FC = () => {
  const [name, setName] = useState("");
  const navigate = useNavigate();
  const token = localStorage.getItem("token");
  const isMenuOpen = useClickStore((state) => state.isClicked);

  const userName: string | null = localStorage.getItem("name");

  if (!token) {
    navigate("/login");
  }

  const handleLogOut = () => {
    localStorage.removeItem("token");
    toast.loading("Akkountdan chiqyapmiz");
    setTimeout(() => {
      navigate("/");
    }, 2000);
  };

  const handleChange = () => {
    if (name) {
      localStorage.setItem("name", name);
      toast.success("Ism muvaffaqiyatli o'zgartirildi");
    }
  };

  return (
    <>
      <MainLayout>
        <div className="flex pt-[158px]">
          {isMenuOpen && <Nav />}
          <div className="mt-[68px] ml-[75px]">
            <h1 className="text-[#161A1D] text-[30px] font-medium mb-[54px]">
              Мой аккаунт
            </h1>
            <div className="bg-[white] p-[60px] flex gap-[182px] rounded-xl">
              <div className="flex flex-col justify-between h-full gap-60 mr-20">
                <div className="flex flex-col gap-[35px]">
                  <img src={MyAccount} alt="" />
                  <img src={MyAccount} alt="" />
                  <img src={MyAccount} alt="" />
                  <img src={MyAccount} alt="" />
                  <img src={MyAccount} alt="" />
                  <img src={MyAccount} alt="" />
                  <img src={MyAccount} alt="" />
                </div>
                <button onClick={handleLogOut}>
                  <img src={LogOut} alt="" />
                </button>
              </div>
              <div>
                <h2 className="text-[36px] text-[#161A1D] font-medium mb-[68px]">
                  Изменить профиль
                </h2>
                <div className="flex flex-col gap-2 mb-[30px]">
                  <p className="text-[#999999] text-[14px] font-medium">Имя</p>
                  <input
                    className="border-[1px] border-mainOrange rounded-md outline-none py-3 pl-[21px]"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    type="text"
                    placeholder={userName ?? ""}
                  />
                </div>
                <div className="flex flex-col gap-2 mb-[60px]">
                  <p className="text-[#999999] text-[14px] font-medium">
                    Телефон
                  </p>
                  <input
                    className="bg-[#F3F3F3] rounded-md outline-none py-3 pl-[21px] text-[#999]"
                    type="text"
                    placeholder="+998 99 895 90-95"
                    disabled={true}
                  />
                </div>
                <button
                  className="w-full bg-mainOrange text-[#161A1D] py-[15px] rounded-lg font-medium mb-[74px]"
                  onClick={handleChange}
                >
                  Сохранить
                </button>
                <p className="text-[#999] font-medium text-[14px] mb-[10px]">
                  Текущий тариф
                </p>
                <h4 className="text-[#161A1D] text-[18px] font-medium mb-[30px]">
                  Optimal Plan 3
                </h4>
                <p className="text-[#999] font-medium text-[14px] mb-[10px]">
                  Разрешение на размещение объявлений
                </p>
                <h4 className="text-[#6A9B0C] text-[18px] font-medium mb-[30px] flex items-center">
                  Есть <IoMdCheckmark size={24} color="#6A9B0C" />
                </h4>

                <p className="text-[#999] font-medium text-[14px] mb-[10px]">
                  Разрешение на просмотр дополнительной информации об объявлении
                </p>
                <h4 className="text-[#FE6633] text-[18px] font-medium mb-[30px] flex items-center">
                  Нет <RxCross1 size={22} color="#FE6633" />
                </h4>
                <button className="w-full bg-mainOrange text-[#161A1D] py-[15px] rounded-lg font-medium mb-[74px]">
                  Поднять объявление в топ
                </button>
              </div>
            </div>
          </div>
        </div>
        <ToastContainer />
      </MainLayout>
    </>
  );
};

export default ProfilePage;
