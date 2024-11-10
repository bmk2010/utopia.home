import React, { useState } from "react";

interface CheckBoxTypes{
    text: string
}

const CheckBox: React.FC<CheckBoxTypes> = ({text}) => {
    const [check, setCheck] = useState(true)
  return (
    <div>
        <p>{text}</p>
      <div className="flex gap-[18px] items-center">
        <p className="font-medium">Да</p>
        <button
          onClick={() => setCheck(!check)}
          className={`border-2 w-[18px] h-[18px] rounded-sm border-[#CCCCCC] ${
            check ? "" : "bg-mainOrange"
          }`}
        ></button>
      </div>
      <div className="flex gap-[18px] items-center">
        <p className="font-medium">Нет</p>
        <button
          onClick={() => setCheck(!check)}
          className={`border-2 w-[18px] h-[18px] rounded-sm border-[#CCCCCC] ${
            check ? "bg-mainOrange" : ""
          }`}
        ></button>
      </div>
    </div>
  );
};

export default CheckBox;
