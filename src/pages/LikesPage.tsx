import React from "react";
import MainLayout from "../Layouts/MainLayout";
import useClickStore from "../zustand";
import Nav from "../components/Nav";
import Render from "../components/Render";

interface Home {
  id: string;
  img: string;
  title: string;
  price: number;
  saws: number;
  when: string;
}

const LikesPage: React.FC = () => {
  const isMenuOpen = useClickStore((state) => state.isClicked);

  const liked = localStorage.getItem('likedHomes') || "[]"
  const likedHomes: Home[] = JSON.parse(liked)

  return (
    <MainLayout>
      <div className="flex pt-[158px]">
        {isMenuOpen && <Nav />}
        <div className="mt-[68px] ml-[75px]">
          <h1 className="text-[#161A1D] text-[30px] font-medium mb-[54px]">Избранное</h1>
          <Render data={likedHomes} />
        </div>
      </div>
    </MainLayout>
  );
};

export default LikesPage;
