"use client";

import { useState } from "react";
import { LiaEyeSolid, LiaEyeSlashSolid } from "react-icons/lia";

interface Props {
    placeholder: string;
    type?: string;
    name?: string;
    value?: string;
    onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export function Input({
    placeholder,
    type = "text",
    name,
    value,
    onChange = () => {},
}: Props) {
    return (
        <div className="relative">
            <input
                name={name}
                type={type}
                value={value}
                placeholder={placeholder}
                onChange={onChange}
                className={`w-full rounded-md px-4 py-2.5 bg-white/[0.06] placeholder:text-white/40 text-white `}
            />
        </div>
    );
}

export function PasswordInput({
    placeholder,
    name,
    value,
    onChange = () => {},
}: Props) {
    const [inputType, setInputType] = useState("password");

    const toggleInputType = () => {
        setInputType((prevType) =>
            prevType === "password" ? "text" : "password"
        );
    };

    return (
        <div className="relative">
            <input
                name={name}
                type={inputType}
                value={value}
                placeholder={placeholder}
                onChange={onChange}
                className="bg-white/[0.06] px-4 py-2.5 rounded-md w-full text-white placeholder:text-white/40"
            />
            <button
                onClick={toggleInputType}
                type="button"
                className="top-3 right-4 absolute text-xl"
            >
                {inputType === "text" ? <LiaEyeSlashSolid /> : <LiaEyeSolid />}
            </button>
        </div>
    );
}
