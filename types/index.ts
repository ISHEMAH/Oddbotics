import { MouseEventHandler } from "react";

export interface CustomButtonProps {
    title:string;
    containerStyles?: string;
    handleClick?:
    MouseEventHandler<HTMLButtonElement>
    btnType?: "button" | "submit";
    textStyles?:string;
    rightIcon?:string;
    isDisabled?:boolean;
}

export interface FeatureCardProps{
    featureTitle : string,
    featureDescription:string,
    featureCover:string
}

export interface PricingCardProps{
    cover:string,
    price:number,
    features:string[],
    buttonText:string,
    number:number,
    title:string,

}

export interface HeaderProps {
    heading:string;
}