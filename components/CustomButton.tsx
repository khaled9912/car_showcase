"use client";
import { CustomButtonProps } from "@/types/index";
import Image from 'next/image';
const CustomButton = ({ title, containerStyles, handleClick}:CustomButtonProps) => {
  return (
    <button
        disabled={false}
        type={"button"}
        className={`custom-btn ${containerStyles}`}
        onClick={handleClick}  // all components in nextjs are server side rendering this is gonna be a client or browser component

    >
        <span className={`flex-1`}>
            {title}
        </span>
    </button>
    )
}

export default CustomButton