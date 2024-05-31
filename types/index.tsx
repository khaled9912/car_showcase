import { MouseEventHandler } from "react";

export interface CustomButtonProps { // interface is to define how a specific structure should look like.
    title: string;
    containerStyles?: string;
    handleClick?: MouseEventHandler<HTMLButtonElement>;
}