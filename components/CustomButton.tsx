"use client";
import { CustomButtonProps } from "@/types/index";
import Image from 'next/image';
const CustomButton = ({ title, containerStyles, handleClick, btnType, textStyles, rightIcon}:CustomButtonProps) => {
  return (
    <button
        disabled={false}
        type={btnType || "button"}
        className={`custom-btn ${containerStyles}`}
        onClick={handleClick}  // all components in nextjs are server side rendering this is gonna be a client or browser component

    >
        <span className={`flex-1 ${textStyles}`}>
            {title}
        </span>
        {rightIcon && (
            <div className="relative w-6 h-6">
                <Image 
                    src={rightIcon}
                    alt="right icon"
                    fill
                    className="object-contain"
                />
            </div>
        )}
    </button>
    )
}

export default CustomButton