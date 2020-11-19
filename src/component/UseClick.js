import React, { useState, useEffect, useRef } from "react"

const UseClick = () => {
    const refInput = useRef();
    setTimeout(() => refInput.current?.focus(), 3000);

    const useClick = (func) => {
        // if (typeof func !== "function") {
        //     return;
        // }
        const element = useRef();
        useEffect(() => {
            // useEffect 에서는 componentDidMount, componentWillUpdate 될 때 안에 있는 메소드를 호출하고
            if (element.current) {
                element.current.addEventListener("click", func);
            }

            //componentWill"UN"Mount될 때 function을 return한다
            return () => {
                if (element.current) {
                    element.current.removeEventListner("click", func);
                }
            }
        }, []); //componentDidMout 될 때 한번만 메소드를 실행하려고 dependency([]<=) 주는 것
        return element;
    };
    const clickFunc = () => { console.log("hello world!"); };

    const refConst = useClick(clickFunc);
    return (
        <div>
            <p ref={refConst}>Ckick!</p>
            <input ref={refInput} placeholder="Input 1" />
        </div>
    )
}

export default UseClick;