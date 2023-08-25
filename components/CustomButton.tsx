"use client";
import { CustomButtonProps } from "@/types";
import Image from "next/image";

const CustomButton = ({
  title,
  containerStyles,
  handleClick,
  btnType,
  textStyles,
}: CustomButtonProps) => {
  return (
    <button
      disabled={false}
      type={"button"}
      className={`bg-indigo-600 rounded-xl hover:bg-white  lg:p-3 p-2 hover:bg-transparent border-indigo-600  ease-out duration-300 group border ${containerStyles}`}
      onClick={handleClick}
    >
      <span
        className={`flex-1 text-white regular  group-hover:text-blue-700  ${textStyles}`}
      >
        {title}
      </span>
      
    </button>
  );
};

export default CustomButton;
