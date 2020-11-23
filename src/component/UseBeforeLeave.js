import React, { useEffect } from "react"

const UseBeforeLeave = (onBefore) => {
    // if (typeof onBefore !== "function") { return; }
    const handle = (event) => {
        const { clientY } = event;
        if (clientY <= 0) {
            begForLife();
        }

    }
    useEffect(() => {
        document.addEventListener("mouseleave", handle);

        //component will un mount
        return () => document.removeEventListener("mouseleave", handle);
    }, []); //[] mean do it


    const begForLife = () => console.log("don't leave here");

    return <div>mouse leave</div>;
}

export default UseBeforeLeave;