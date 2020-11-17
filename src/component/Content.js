import React, { useState } from "react"

const Content = () => {
    const content = [
        {
            id: 1,
            tab: "Button 1",
            content: "I am the Content Of Button 1"
        },
        {
            id: 2,
            tab: "Button 2",
            content: "I am the Content Of Button 2"
        },
        {
            id: 3,
            tab: "Button 3",
            content: "I am the Content Of Button 3"
        },
    ]

    const useTabs = (initTab, allTabs) => {
        const [currentIndex, setCurrentIndex] = useState(initTab);

        return {
            currentItem: allTabs[currentIndex],
            changeItem: setCurrentIndex
        };
    };

    // {currentItem} 말고 currentItem으로 그냥 쓰면, 아래에서 currentItem.currentItem.content 처럼 두번 까줘야 함
    const { currentItem, changeItem } = useTabs(0, content);
    return (
        <div>
            {content.map((section, idx) => <button key={section.id} onClick={() => changeItem(idx)}>{section.tab}</button>)}
            <div>You Are At : {currentItem.content}</div>
        </div>
    )
}

export default Content;