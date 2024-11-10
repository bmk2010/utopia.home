import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import MainLayout from "../Layouts/MainLayout";
import useClickStore from "../zustand";
import Nav from "../components/Nav";
import toBack from "../assets/Group 47.svg";
import request from "../axios";
import fire from "../assets/Vector (5).svg";
import share from "../assets/Share.svg";
import SingleCard from "../components/SingleCard";
import Row from "../components/row";
import Eye from "../assets/Eye.svg";
import Swiper from "../assets/Group 179.png";
import RenderHomes from "../components/RenderHomes";

interface Data {
  title: string;
  img: string;
  price: string;
  when: string;
  saws: number;
}

const SingleHome: React.FC = () => {
  const { id } = useParams();
  const isMenuOpen = useClickStore((state) => state.isClicked);
  const navigate = useNavigate();

  const [data, setData] = useState<Data>({
    title: "salom",
    img: "salom",
    price: "sakmsai",
    when: "salom",
    saws: 5525,
  });

  useEffect(() => {
    request.get("/homes/" + id).then((response) => setData(response.data));
  }, []);

  return (
    <MainLayout>
      <div className="pt-[158px] flex">
        {isMenuOpen && <Nav />}
        <div className="mt-[35px] ml-[74px]">
          <button className="mb-[35px]" onClick={() => navigate("/")}>
            <img src={toBack} alt="" />
          </button>
          <div className="flex gap-[30px] mb-[40px]">
            <div className="flex flex-col gap-[35px]">
              <img
                className="rounded-[20px] mr-[30px] max-w-[550px] w-full h-[500px]"
                src={data.img}
                alt=""
              />
              <img width={550} src={Swiper} alt="" />
              <div className="flex flex-col items-end gap-4">
                <div className="flex gap-[22px] items-center">
                  <p className="text-[22px] font-light text-[#161A1D]">
                    +998 99 555 60-70
                  </p>
                  <button className="bg-mainOrange py-3 px-9 rounded-md">
                    Показать номер
                  </button>
                </div>
                <div className="flex gap-[22px] items-center w-[370px]">
                  <p className="text-[22px] font-light text-[#161A1D]">
                    г.Ташкент, Чиланзарский р-н ул.Улица, Дом 65
                  </p>
                  <button className="bg-mainOrange py-3 px-9 rounded-md">
                    Посмотреть на карте
                  </button>
                </div>
              </div>
              <div className="max-w-[430px]">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d5085.5611582596985!2d69.19973150643499!3d41.28418738196768!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38ae8ba578f4f58d%3A0xd7a2ecf23413b7a0!2sNajot%20Ta&#39;lim%20Chilonzor%20Filial!5e0!3m2!1sru!2s!4v1731163178539!5m2!1sru!2s"
                  width="600"
                  height="450"
                  allowFullScreen={true}
                  loading="lazy"
                  // referrerpolicy="no-referrer-when-downgrade"
                ></iframe>
              </div>
            </div>
            <div className="bg-[#fff] pt-[33px] px-[37px] pb-5 rounded-2xl max-w-[430px]">
              <div className="flex gap-[100px] mb-[30px]">
                <div className="flex items-center gap-5">
                  <img src={fire} alt="" />
                  <h1 className="text-[#161A1D] text-[30px] ml-20px">
                    {data.title}
                  </h1>
                </div>
                <div className="flex gap-5">
                  <img width={19} src={share} alt="" />
                  <img width={19} src={share} alt="" />
                </div>
              </div>
              <div className="mb-[30px]">
                <h2 className="text-[#6A9B0C] text-[36px]">$ {data.price}</h2>
              </div>
              <div className="flex gap-[30px] mb-[30px]">
                <SingleCard title="Стоимость " value="$ 18,950" />
                <SingleCard title="Предоплата " value="85%" />
                <SingleCard title="Рассрочка" value="Есть" />
              </div>
              <div className="flex flex-col gap-[9px]">
                <Row title="Месячный платеж" value="1%" />
                <Row title="Скидка" value="1%" />
                <Row
                  title="Акция"
                  value="Описание акции, здесь будет
подробная информация об акции"
                />
                <div className="flex gap-12 mb-[30px]">
                  <p className="text-[#6A9B0C] text-[16px] font-medium">
                    Комиссионные
                  </p>
                  <p className="text-[#6A9B0C] text-[16px] font-medium">Нет</p>
                </div>
                <hr className="w-[370px] border-[#EEEEEE] mb-[30px]" />
                <Row title="Количество комнат" value="28 комнат" />
                <Row title="Площадь" value="100 м2" />
                <Row title="Количество комнат" value="28 комнат" />
                <Row title="Количество комнат" value="28 комнат" />
                <Row title="Количество комнат" value="28 комнат" />
                <Row title="Количество комнат" value="28 комнат" />
                <Row title="Количество комнат" value="28 комнат" />
                <Row title="Количество комнат" value="28 комнат" />
                <div className="flex gap-12 items-center">
                  <p className="text-[#999999] text-[16px] font-medium">
                    В доме имеется
                  </p>
                  <div className="flex flex-wrap gap-[10px]">
                    <div className="bg-[#EEEEEE] text-[#161A1D] px-[7px] py-1 rounded-2xl">
                      интернет
                    </div>
                    <div className="bg-[#EEEEEE] text-[#161A1D] px-[7px] py-1 rounded-2xl">
                      телефон
                    </div>
                    <div className="bg-[#EEEEEE] text-[#161A1D] px-[7px] py-1 rounded-2xl">
                      мебель
                    </div>
                    <div className="bg-[#EEEEEE] text-[#161A1D] px-[7px] py-1 rounded-2xl">
                      холодильник
                    </div>
                    <div className="bg-[#EEEEEE] text-[#161A1D] px-[7px] py-1 rounded-2xl">
                      кондиционер
                    </div>
                  </div>
                </div>
                <div className="flex gap-12 items-center">
                  <p className="text-[#999999] text-[16px] font-medium">
                    Прочие удобства
                  </p>
                  <div className="flex flex-wrap gap-[10px]">
                    <div className="bg-[#EEEEEE] text-[#161A1D] px-[7px] py-1 rounded-2xl">
                      видеонаблюдение
                    </div>
                    <div className="bg-[#EEEEEE] text-[#161A1D] px-[7px] py-1 rounded-2xl">
                      бассейн
                    </div>
                    <div className="bg-[#EEEEEE] text-[#161A1D] px-[7px] py-1 rounded-2xl">
                      сауна
                    </div>
                    <div className="bg-[#EEEEEE] text-[#161A1D] px-[7px] py-1 rounded-2xl">
                      гараж
                    </div>
                  </div>
                </div>
                <Row title="Брокерское обслуж." value="Есть" />
                <hr className="w-[370px] border-[#EEEEEE] mb-[30px]" />
                <div className="flex flex-col max-w-[420px]">
                  <p className="text-[#999999] text-[16px] font-medium">
                    Дополнительная информация
                  </p>
                  <p className="text-[#161A1D] text-[16px] font-light">
                    Это стильная вилла с потрясающим видом на море и находится
                    всего в нескольких метрах от Кала Vadella. Просторная
                    гостиная, большая полностью оборудованная кухня открытого
                    плана столовая и многочисленные зоны отдыха и террасы,
                    кондиционер, пол с подогревом, сигнализация, спутниковое
                    телевидение, интернет, hi- фантастические и электронные
                    жалюзи
                  </p>
                </div>
                <h2 className="text-[30px] text-[#161A1D] font-medium mb-[30px]">
                  Имя Пользователя
                </h2>
                <div className="flex justify-between">
                  <div className="flex flex-col">
                    <p className="text-[#999999] text-[12px]">
                      Опубликовано 22:38 25-Окт 2021
                    </p>
                    <div className="flex gap-[6px] text-[#9999] text-[12px]">
                      <img src={Eye} alt="" />
                      {data.saws}
                    </div>
                  </div>
                  <button className="bg-mainOrange py-[12px] px-[30px]">
                    Продлить топ
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="mb-[86px]">
            <h2 className="text-[30px] font-medium text-[#161A1D] mb-[40px]">Рекоммендуемые объявления</h2>
            <RenderHomes />
          </div>
        </div>
      </div>
    </MainLayout>
  );
};

export default SingleHome;
