import React from "react";

interface  ButtonFieldProps {
    name: string;
    text: string;
    onClick: ()=>void;
}
export const ButtonField: React.FC<ButtonFieldProps> = ({name, onClick, text})=> {
    return  <button className={name} onClick={onClick}>{text}</button>
}