import React, { useId } from "react";
// forwared refrence hook is use to pass the refrence of the input field to diffrent places 

const Input = React.forwardRef(function Input({
    label,
    type = "text",
    className = "",
    ...props
}, ref) {
    const id = useId();
    return (
        <div className="w-full">
            {label && <label
                className=" mb-1 pl-1 flex "
                htmlFor={id} >
                {label}
            </label>
            }

            <input type={type}
                className={`px-3 py-2 rounded-lg bg-white text-black outline-none
                     focus:bg-gray-50 duration-200
                border border-gray-200 w-full ${className}`} {...props}
                ref={ref}
                id={id}
            />
            
        </div>
    )
})

export default Input