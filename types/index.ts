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
    otherColor:boolean,
    pagelink:string

}

export interface ContactInputProps{
    icon:string,
    placeholder:string,
    type:"text"|"email"|"password"|"number",
    name:string
    Width?:string
}

export interface HeaderProps {
    heading:string;
}
export interface MenuCardProps{
    icon:string,
    title:string,
    link:string,
    active:string

}
export interface NavsideProps{
    editClick: () => void;
    botName: string;
    active:string;
    toggle:boolean
}
export interface InputProps{
    placeholder:string,
    type:'text'|'email',
    label:string,
    name:string,
    additionStyles?:string
}

export interface HeadingProps{
    icon:string,
    description:string,
    title:string
}
export interface MemberProps{
    image:string,
    name:string,
    roles:string[],
    date:string
}
export interface ExampleProps{
    image:string,
    title:string,
    description:string
}