import React, { FormEvent, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import MainLayout from "../Layouts/MainLayout";
import Select from "../components/Select";
import CheckBox from "../components/CheckBox";
import Submit from "../assets/Rectangle 335.svg";
import request from "../axios";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const AddHome: React.FC = () => {
  const [homeName, setHomeName] = useState("");
  const [homePrice, setHomePrice] = useState("");
  const token = localStorage.getItem("token");
  const navigate = useNavigate();

  const date = new Date();
  const formattedDate = date.toISOString();

  useEffect(() => {
    if (!token) {
      navigate("/login");
    }
  }, [token, navigate]);

  const handleAddHome = (evt: FormEvent) => {
    evt.preventDefault();

    request
      .post("/homes", {
        title: homeName,
        price: homePrice,
        when: formattedDate,
        saws: Math.floor(Math.random() * 1000000),
        img: "https://loremflickr.com/640/480/city",
      })
      .then(() => {
        toast.success("Uy muvaffaqiyatli qo'shildi");
        setTimeout(() => {
          navigate('/')
        }, 2000);
      });
  };

  return (
    <MainLayout>
      <div className="pt-[158px]">
        <form
          onSubmit={(e) => handleAddHome(e)}
          className="flex flex-col items-center gap-1"
        >
          <h1 className="text-[#161A1D] text-[50px] font-medium">
            Разместить объявление
          </h1>
          <p className="text-[24px] text-[#FCA311] mb-[49px]">
            Продажа недвижимости в новостройке
          </p>
          <div className="bg-[#FFFFFF] px-[160px] flex gap-[135px] py-[50px]">
            <div className="flex flex-col gap-[40px]">
              <div className="flex flex-col gap-[10px]">
                <p className="text-[#999999]">Название новостройки</p>
                <input
                  value={homeName}
                  onChange={(evt) => setHomeName(evt.target.value)}
                  required
                  placeholder="Введите название новостройки"
                  type="text"
                  className="py-[15px] pl-[20px] w-[400px] text-[13px] bg-[#F3F3F3] text-[#999999] rounded-[5px]"
                />
              </div>
              <Select text="Область" />
              <Select text="Район" />
              <Select text="Ремонт" />
              <Select className="mb-[40px]" text="Рядом" />
              <div className="flex flex-col gap-[10px]">
                <p className="text-[#999999]">Месячный платеж *</p>
                <input
                  required
                  placeholder="1% - 100%"
                  type="text"
                  className="py-[15px] pl-[20px] w-[400px] text-[13px] bg-[#F3F3F3] text-[#999999] rounded-[5px]"
                />
              </div>
              <div className="flex flex-col gap-[10px] mb-[30px]">
                <p className="text-[#999999]">Скидка</p>
                <input
                  required
                  placeholder="0% - 100%"
                  type="text"
                  className="py-[15px] pl-[20px] w-[400px] text-[13px] bg-[#F3F3F3] text-[#999999] rounded-[5px]"
                />
              </div>
              <button type="submit" className="relative">
                <img src={Submit} alt="" />
                <p className="absolute text-[#FCA311] font-medium text-[13px] top-[30%] left-[35%]">
                  Добавить квартиру
                </p>
              </button>
            </div>
            <div className="flex flex-col gap-[30px]">
              <div className="flex flex-col gap-[10px] mb-[30px]">
                <p className="text-[#999999]">Цена за м2 *</p>
                <input
                  value={homePrice}
                  onChange={(e) => setHomePrice(e.target.value)}
                  required
                  placeholder="Цена"
                  type="number"
                  className="py-[15px] pl-[20px] w-[400px] text-[13px] bg-[#F3F3F3] text-[#999999] rounded-[5px]"
                />
              </div>
              <CheckBox text="Обмен" />
              <CheckBox text="Рассрочка" />
              <div className="flex flex-col gap-[10px] mb-[30px]">
                <p className="text-[#999999]">Срок рассрочки *</p>
                <input
                  required
                  placeholder="Введите срок рассрочки"
                  disabled={true}
                  type="text"
                  className="py-[15px] pl-[20px] w-[400px] text-[13px] bg-[#F3F3F3] text-[#999999] rounded-[5px]"
                />
              </div>
              <div className="flex flex-col gap-[10px] mb-[30px]">
                <p className="text-[#999999]">Предоплата *</p>
                <input
                  required
                  placeholder="85%"
                  type="text"
                  className="py-[15px] pl-[20px] w-[400px] text-[13px] bg-[#F3F3F3] text-[#999999] rounded-[5px]"
                />
              </div>
              <div className="flex flex-col gap-[10px] mb-[30px]">
                <p className="text-[#999999]">Акция</p>
                <textarea
                  required
                  placeholder="Описание акции"
                  className="py-[15px] pl-[20px] w-[400px] h-[90px] text-[13px] bg-[#F3F3F3] text-[#999999] rounded-[5px] resize-none"
                />
              </div>
              <CheckBox text="Комиссионные *" />
            </div>
          </div>
        </form>
      </div>
      <ToastContainer />
    </MainLayout>
  );
};

export default AddHome;
