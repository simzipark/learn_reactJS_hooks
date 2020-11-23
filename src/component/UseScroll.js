import React, { useState, useEffect } from "react"

const UseScroll = () => {
    const useScroll = (event) => {
        const [state, setState] = useState({
            x: 0,
            y: 0
        });

        const handleScroll = () => {
            setState({
                x: window.scrollX,
                y: window.scrollY
            });
        }

        useEffect(() => {
            window.addEventListener("scroll", handleScroll);
            return () => window.removeEventListener("scroll", handleScroll);
        }, []);

        return state;
    }

    const { y } = useScroll();
    return (
        <div style={{ position: "fixed", color: y > 50 ? "yellow" : "black" }}>Scroll UP/DOWN</div>
    )
}

export default UseScroll;