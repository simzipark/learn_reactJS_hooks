import React, { useState } from "react"



const UseInput = () => {
    const InputHook = (initValue, validator) => {
        const [value, setValue] = useState(initValue);

        const onChange = (event) => {
            const { target: { value } } = event;

            let willChange = false;
            if (typeof validator === "function") {
                willChange = validator(value);
            }
            if (willChange) {
                setValue(value);
            }
        }

        return { value, onChange };
    };

    // validator function list
    const valLength = (value) => value.length < 10;
    // const notHash = (value) => !value.includes("#");

    const name = InputHook("", valLength);
    return (
        <div>
            <input placeholder="Input Here💛💛" {...name}></input>
            <div>Your Input : {name.value}</div>
        </div>
    )
};
export default UseInput;