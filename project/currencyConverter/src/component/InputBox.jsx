import React from "react";
import { useId } from "react";

function InputBox({
    label,
    amount,
    onAmountChange,
    onCurrencyChange,
    currencyOption = [],
    selectCurrency = "",
    amountDisble = false,
    currecnyDisable = false,
    className = ""
}) {


    const amountInputId = useId();
    return (
        <div className={`bg-white p-3 rounded-lg text-5m flex ${className} `}>
            <div className="w-1/2">
                <label htmlFor={amountInputId} className="text-black/40 mb-2 inline-block">
                    {label}
                </label>
                <input
                    id={amountInputId}
                    className="text-black outline-none w-full bg-transparent py-1.5"
                    type="number"
                    placeholder="Amount"
                    disabled={amountDisble}
                    value={amount}
                    onChange={(e) => onAmountChange && onAmountChange(Number(e.target.value))}
                />
            </div>
            <div className="w-1/2 flex flex-wrap justify-end text-right">
                <p className="text-black/40 mb-2 w-full">Currency Type</p>
                <select 
                    className="border-2 rounded-lg px-1 py-1 bg-grey-100 cursor-pointer outline-none text-black"
                    value={selectCurrency}
                    onChange={(e) => onCurrencyChange && onCurrencyChange(e.target.value)}
                    disabled={currecnyDisable}

                >
                    {/* remember keys  */}
                    {currencyOption.map((currency) => (
                        <option key={currency} value={currency}>{currency}</option>
                    ))}

                </select>
            </div>

        </div>
    )
    
}


export default InputBox;