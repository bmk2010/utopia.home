import React from "react";

interface SelectType {
    text: string;
    className?: string
}

const Select: React.FC<SelectType> = ({ text, className }) => {
  return (
    <select className={`outline-none bg-[#F3F3F3] text-[#999] py-[15px] pl-[20px] ${className}`}>
      <option value={text}>{text}</option>
    </select>
  );
};

export default Select;
