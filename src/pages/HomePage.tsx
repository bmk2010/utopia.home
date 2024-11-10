import React, { useEffect, useState } from "react";
import MainLayout from "../Layouts/MainLayout";
import Nav from "../components/Nav";
import { BsFire } from "react-icons/bs";
import Render from "../components/Render";
import useClickStore from "../zustand";
import request from "../axios";

interface Home {
  id: string;
  img: string;
  title: string;
  price: number;
  saws: number;
  when: string;
}

const HomePage: React.FC = () => {

  const [homes, setHomes] = useState<Home[]>([]);

  const isMenuOpen = useClickStore(state => state.isClicked)

  useEffect(() => {
    request.get('/homes').then(response => setHomes(response.data))
  }, [])
  

  return (
    <MainLayout>
      <div className="flex pt-[158px]">
        {isMenuOpen && <Nav />}
        <div className="bg-mainGray w-full pt-[68px] pl-[75px] mb-[86px]">
          <div className="flex items-center gap-[21px] mb-[54px]">
            <h1 className="text-[30px]">Топ объявления</h1>
            <BsFire size={36} />
          </div>
          {/* render homes */}
          <Render data={homes} />
        </div>
      </div>
    </MainLayout>
  );
};

export default HomePage;
