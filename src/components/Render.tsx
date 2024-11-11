import React, { useEffect, useState } from "react";
import Rooms from "../assets/Room.svg";
import Area from "../assets/Area.svg";
import Remont from "../assets/Condition.svg";
import Liked from "../assets/Vector (3).svg";
import Like from "../assets/Vector (4).svg";
import Eye from "../assets/Eye.svg";
import useClickStore from "../zustand";
import { useNavigate } from "react-router-dom";
import { Audio } from "react-loader-spinner";

interface Home {
  id: string;
  img: string;
  title: string;
  price: number;
  saws: number;
  when: string;
}

interface RenderProps {
  data: Home[];
}

const Render: React.FC<RenderProps> = ({ data = [] }) => {
  const [likedHomes, setLikedHomes] = useState<Home[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const isCenter = useClickStore((state) => state.isClicked);
  const navigate = useNavigate();
  const token = localStorage.getItem("token");

  useEffect(() => {
    const savedLikes = JSON.parse(localStorage.getItem("likedHomes") || "[]");
    setLikedHomes(savedLikes);
    setIsLoading(false);
  }, []);

  const handleLike = (home: Home) => {
    if (!token) {
      navigate("/login");
      return;
    }

    const isAlreadyLiked = likedHomes.some(
      (likedHome) => likedHome.id === home.id
    );
    const updatedLikes = isAlreadyLiked
      ? likedHomes.filter((likedHome) => likedHome.id !== home.id)
      : [...likedHomes, home];

    setLikedHomes(updatedLikes);
    localStorage.setItem("likedHomes", JSON.stringify(updatedLikes));
  };

  return (
    <div
      className={`flex flex-col gap-10 pr-5 ${isCenter ? "" : "items-center"}`}
    >
      {isLoading ? (
        <div className="flex justify-center items-center h-screen">
          <Audio height="80" width="80" color="green" ariaLabel="loading" />
        </div>
      ) : data.length === 0 ? (
        <div className="flex justify-center w-full items-center gap-5">
          <img src={"https://uzum.uz/static/img/hearts.cf414be.png"} alt="" />
          <h2 className="text-[42px]">Homes not found</h2>
        </div>
      ) : (
        data.map((home) => (
          <div
            key={home.id}
            className="flex gap-10 rounded-xl bg-[#ffffff] justify-between max-w-[1275px] w-full cursor-pointer"
          >
            <img
              onClick={() => navigate(`/${home.id}`)}
              width={200}
              height={200}
              src={home.img}
              alt={home.title}
            />
            <div
              onClick={() => navigate(`/${home.id}`)}
              className="flex flex-col gap-[68px] pt-5"
            >
              <h2 className="text-[30px]">{home.title}</h2>
              <div className="text-[#999999] flex gap-2 items-center mb-5">
                <img src={Rooms} alt="Rooms" />
                <p>28</p>
                <img src={Area} alt="Area" />
                <p>100 м2</p>
                <img src={Remont} alt="Remont" />
                <p>Евроремонт</p>
              </div>
            </div>
            <div className="flex flex-col gap-[72px] pt-6 pr-[50px] items-end pb-[14px]">
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  handleLike(home);
                }}
              >
                <img
                  src={
                    likedHomes.some((likedHome) => likedHome.id === home.id)
                      ? Liked
                      : Like
                  }
                  alt="Like Button"
                />
              </button>
              <div className="flex flex-col gap-5">
                <p className="text-[#6A9B0C] text-[24px]">$ {home.price}</p>
                <div className="flex gap-[43px] text-[12px] text-[#999999]">
                  <div className="flex gap-1 items-center">
                    <img src={Eye} alt="Views" />
                    <p>{home.saws}</p>
                  </div>
                  <p>Опубликовано {home.when}</p>
                </div>
              </div>
            </div>
          </div>
        ))
      )}
    </div>
  );
};

export default Render;
