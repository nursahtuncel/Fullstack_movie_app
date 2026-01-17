import React from "react";

const InputField = ({ name, label,type="text",min,max }) => {
  return (
    <div className="w-full ">
      <div className="relative">
        <input
          type={type}
          id={name}
            name={name} 
           placeholder=" "
          required
          min={min}
          max={max}
          className="
            peer
            w-full
            px-3 pt-5 pb-2
            text-sm text-gray-900
            bg-white
            border border-gray-300
            rounded-md
            focus:outline-none
            focus:border-brand
            focus:ring-1 focus:ring-brand/30
            transition-colors
          "
        />

        <label
          htmlFor={name}
          className="
            absolute left-3 top-4
            text-sm text-gray-500
            bg-white px-1
            transition-all duration-200
            peer-placeholder-shown:top-4
            peer-placeholder-shown:text-gray-400
            peer-placeholder-shown:scale-100
            peer-focus:top-1.5
            peer-focus:scale-75
            peer-focus:text-brand
            origin-left
          "
        >
          {label}
        </label>
      </div>
    </div>
  );
};

export default InputField;
