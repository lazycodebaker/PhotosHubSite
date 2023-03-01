

import React, { InputHTMLAttributes } from 'react';

type InputProps = InputHTMLAttributes<HTMLInputElement> & {
    label : string;
    name : string;
    type : string;
    placeholder : string;
    error : string | null;
    onChange : (e : React.ChangeEvent<HTMLInputElement>) => void;
    value : string;  
};

export const Input : React.FC<InputProps> = ({label, name, type, placeholder, error, onChange, value,...props}) => {
    return (
        <div className="flex flex-col py-2">
            <label 
                htmlFor={name} 
                className="text-sm font-semibold text-gray-600 py-2">
                    {label}
            </label>
            <input 
                id={name} 
                name={name} 
                type={type} 
                placeholder={placeholder} 
                onChange={onChange} 
                value={value}
                {...props}                
                className="text-md block px-3 py-2 rounded-lg w-full
                         bg-white border-2 border-gray-300 
                         placeholder-gray-600 shadow-md focus:placeholder-gray-500 
                         focus:bg-white focus:border-gray-600 focus:outline-none" 
            />
                {error && <p className="text-red-500 text-xs italic">{error}</p>}
        </div>
    );
};