import React, { useEffect, useState } from "react";
import request from "../axios";
// import Liked from "../assets/Vector (3).svg";
import Like from "../assets/Vector (4).svg";
import Rooms from "../assets/Room.svg";
import Area from "../assets/Area.svg";
import Remont from "../assets/Condition.svg";
import Eye from "../assets/Eye.svg";

interface homeType {
  title: string;
  img: string;
  price: string;
  when: string;
  saws: number;
}

const RenderHomes: React.FC = () => {
  const [homes, setHomes] = useState([]);

  useEffect(() => {
    request.get("/homes").then((response) => setHomes(response.data));
  }, []);

  return (
    <div className="flex gap-[52px]">
      {homes
        .slice(homes.length - 3)
        .map((home: homeType, i: number) => (
          <div
            className="flex flex-col gap-8 max-w-[300px] bg-[white] rounded-xl pb-3"
            key={i}
          >
            <img className="rounded-t-xl" src={home.img} alt="" />
            <div className="mx-[25px]">
              <p className="text-[22px] text-[#161A1D]">{home.title}</p>
              <p className="text-[#6A9B0C]">$ {home.price}</p>
            </div>
            <div className="text-[#999999] mx-[25px] flex justify-between">
              {home.when}
              <img width={25} src={Like} alt="" />
            </div>
            <div className="mx-[25px] flex justify-between">
              <div className="flex gap-8">
                <img src={Rooms} alt="" />
                <img src={Area} alt="" />
                <img src={Remont} alt="" />
              </div>
              <div className="flex gap-2">
                <img src={Eye} alt="" />
                {home.saws}
              </div>
            </div>
          </div>
        ))}
    </div>
  );
};

export default RenderHomes;
