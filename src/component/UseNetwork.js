import React, { useState, useEffect } from "react"

const UseNetwork = () => {
    const useNetwork = (onChange) => {
        const [status, setStatus] = useState(navigator.onLine);

        const handleChange = () => {
            if (typeof onChange === "function") {
                onChange(navigator.onLine);
            }
            setStatus(navigator.onLine);
        }
        useEffect(() => {
            window.addEventListener("online", handleChange);
            window.addEventListener("offline", handleChange);

            return () => {
                window.removeEventListener("online", handleChange);
                window.removeEventListener("offline", handleChange);
            }
        }, []);
        return status;
    }

    const handleNetwork = (online = true) => {
        console.log(online ? "network is online" : "network is offline");
    }
    const online = useNetwork(handleNetwork);

    return (
        <div>{online ? "ONLINE" : "OFFLINE"}</div>
    )

}

export default UseNetwork;
