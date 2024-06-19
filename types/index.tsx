import { MouseEventHandler } from "react";

export interface CustomButtonProps { // interface is to define how a specific structure should look like.
    title: string;
    containerStyles?: string;
    handleClick?: MouseEventHandler<HTMLButtonElement>;
    btnType?: "button" | "submit";
    textStyles?: string;
    isDisabled?: boolean;
    rightIcon?: string
}

export interface SearchManufacturerProps {
    manufacturer: string;
    setManufacturer: (manufacturer: string) => void;
}

export interface CarProps {
    class: string,
    city_mpg: number,
    combination_mpg: number,
    cylinders: number,
    displacement: number,
    drive: string,
    fuel_type:"gas",
    highway_mpg: number,
    make: string,
    model: string,
    transmission: string,
    year: number

}

export interface FilterProps {
    manufacturer: string
    year: number,
    fuel: string,
    limit: number,
    model: string
}