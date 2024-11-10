import React from "react";

interface SingleCardType {
  title: string;
  value: string;
}

const SingleCard: React.FC<SingleCardType> = ({ title, value }) => {
  return (
    <div className="bg-[#F6F6F6] py-[13px] px-[10px] flex flex-col rounded-xl">
      <p className="text-[#999999] text-[16px]">{title}</p>
      <p className="text-[#161A1D] text-[16px]">{value}</p>
    </div>
  );
};

export default SingleCard;
