import React from "react"

const UseConfirm = () => {
    const useConfirm = (message = "Init Msg", onConfirm, onCancel) => {
        if (onConfirm && typeof onConfirm !== "function") {
            return;
        }
        if (onCancel && typeof onCancel !== "function") {
            return;
        }
        const confirmAction = () => {
            if (window.confirm(message)) {  //그냥 confirm 치면 에러
                onConfirm();
            } else {
                onCancel();
            }
        }
        return confirmAction;
    }
    const callbackMessage = () => console.log("[확인] 클릭");
    const rejectionMessage = () => console.log("[취소] 클릭");
    const deleteBtn = useConfirm("Confirm Message", callbackMessage, rejectionMessage);
    return (
        < div >
            <button onClick={deleteBtn}>Delete</button>
        </div >
    )
}
export default UseConfirm;