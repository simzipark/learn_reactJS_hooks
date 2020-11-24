import React from "react"

const UseNotification = () => {
    const useNotification = (title, options) => {
        if (!("Notification" in window)) {
            return;
        }
        const fireNotification = () => {
            if (Notification.permission !== "granted") {
                Notification.requestPermission().then(permission => {
                    if (permission === "granted") {
                        new Notification(title, options);
                    } else {
                        return;
                    }
                });
            } else {
                new Notification(title, options);
            }
        }
        return fireNotification;

    }

    const triggerNoti = useNotification("I'm in a dream.", {
        body: "option_body"
    });
    return (
        <div>
            <button onClick={triggerNoti}>Alarm</button>
        </div >
    )
}
export default UseNotification;