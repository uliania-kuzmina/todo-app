import React from "react";

interface InputFieldProps {
    name: string;
    type: string;
    placeholder?: string;
    value?: string;
    checked?: boolean;
    onChange?: (e:any)=>void;
    onBlur?: ()=>void;
    onKeyDown?: (e:any)=>void;

}
export const InputField: React.FC<InputFieldProps> = ({name, onBlur, onChange,onKeyDown,type,value, checked, placeholder})=> {
    return <input
          type={type}
          checked={checked}
          value={value}
          onChange={onChange}
          onBlur={onBlur}
          onKeyDown={onKeyDown}
          className={name}
          placeholder={placeholder}
          autoFocus
        />
}