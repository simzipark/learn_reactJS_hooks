import React, { useState, useEffect } from "react"

const Title = () => {

    const useTitle = (initTitle) => {
        const [title, setTitle] = useState(initTitle);
        const updateTitle = () => {
            const htmlTitle = document.querySelector("title");
            htmlTitle.innerHTML = title;
        }
        useEffect(updateTitle, [title]);
        return setTitle;
    }

    const titleUpdator = useTitle("is Loading...🔥");
    setTimeout(() => titleUpdator("Just Mounted!"), 5000);
    return (
        <div>

        </div>
    )
}

export default Title;