import React from "react";

function Button({
    btnText,
    type = "button",
    bgColor = "bg-blue-600",
    textColor = 'text-white',
    className = '',
    ...props
}) {


    return (
        <button className={`px-4 py-2 rounded-lg ${bgColor} ${type} ${textColor} ${className} `}
            {...props}>
            {btnText}
        </button>

        // forward refress hook is use to get the refrence of the same input field that is going to use at diffrent places 
    )
}


export default Button