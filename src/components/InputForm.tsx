import React from "react";

interface InputFormProps {
  icon: any;
  text: string;
  id: string;
  type: string;
  value: string | number;
  onChange: (value: string) => void;
}

export default function InputForm({
  icon,
  text,
  id,
  type,
  value,
  onChange,
}: InputFormProps) {
  return (
    <div className="flex flex-row justify-center items-center w-60 bg-lightGray rounded-md p-2 m-2">
      {icon}
      <input
        type={type}
        id={id}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={text}
        className="w-full bg-lightGray rounded-md ml-2"
      />
    </div>
  );
}
