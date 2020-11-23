import React, { useEffect, useRef } from "react"

const UseFadeIn = () => {
    const useFadeIn = (duration = 2, delay = 2) => {
        const element = useRef();

        useEffect(() => {
            if (element.current) {
                const { current } = element;
                current.style.transition = `opacity ${duration}s ease-in-out ${delay}s`;
                current.style.opacity = 1;
            }
        }, []);

        return { ref: element, style: { opacity: 0 } };
    }

    const fadeInDiv = useFadeIn();
    const fadeInP = useFadeIn(1, 3);

    return (
        <div>
            <div {...fadeInDiv}>Fade In 💫</div>
            <p {...fadeInP}>HELLO WORLD🌈</p>
        </div>
    )
}

export default UseFadeIn;