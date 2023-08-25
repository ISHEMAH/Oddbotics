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
export interface PlanCardProps{
    cover:string,
    price:number,
    features:string[],
    buttonText:string,
    number:number,
    title:string,
    period?:string
    bg:string,
    color:string,
    description:string,
    button:string,
    otherColor:boolean

}

export interface ContactInputProps{
    icon:string,
    placeholder:string,
    type:"text"|"email"|"password"|"number",
    name:string
}

export interface HeaderProps {
    heading:string;
}