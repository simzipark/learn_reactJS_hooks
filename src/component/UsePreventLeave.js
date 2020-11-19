import ReactDom from "react-dom"

const UsePreventLeave = () => {
    const usePreventLeave = () => {
        const listner = (event) => {
            console.log(event);
            event.preventDefault();
            event.returnValue = "의미없음";  //크롬 특징으로, 이 코드를 넣지 않으면 작동이 안됨. 큰 의미 없음
        }
        //beforeunload는 문서나 창이 닫기 전에 발생하는 이벤트
        const enable = () => window.addEventListener("beforeunload", listner);
        const disable = () => window.removeEventListener("beforeunload", listner);
        return { enable, disable };
    }
    const { enable, disable } = usePreventLeave();
    return (
        <div>
            <button onClick={enable}>Protect</button>
            <button onClick={disable}>UnProtect</button>
        </div>
    )
}

export default UsePreventLeave;