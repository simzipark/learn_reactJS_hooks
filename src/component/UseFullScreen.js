import React, { useRef } from "react"

const UseFullScreen = () => {
    const useFullScrean = (callback) => {
        const element = useRef()
        const triggerFull = () => {
            if (element.current) {
                element.current.requestFullscreen();
            }
            callback(true);
        }
        const exitFull = () => {
            document.exitFullscreen();
            callback(false);
        }

        return { element, triggerFull, exitFull };
    }

    const onFulls = (isFull) => {
        //exitFull 함수 대신 callback
        console.log(isFull ? "IS FULL" : "NOT FULL");
    }
    const { element, triggerFull, exitFull } = useFullScrean(onFulls);

    return (
        <div>
            <div ref={element}>
                <img src="https://item.kakaocdn.net/do/e0ee5739b113720c55189fedce9c32f4f43ad912ad8dd55b04db6a64cddaf76d" alt="kakao" title="kakao" />
                <button onClick={triggerFull}>FULL</button>
                <button onClick={exitFull}>EXIT</button>
            </div>
        </div>
    )
}
export default UseFullScreen;