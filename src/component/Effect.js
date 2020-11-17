import React, { useState, useEffect } from "react"

const Effect = () => {
    const [numberA, setNumber] = useState(0);
    const [numberB, setANumber] = useState(0);

    const printConsole = () => console.log("numberA is changed!");
    //useEffect의 첫번째 인자는 실행할 함수, 두번째 인자(dependency라고 부름)는 해당 list가 update되었을 때만 함수 실행
    // useEffect(printConsole, []); //두번째 인자를 빈 list로 주게 되면, component가 mount됐을 때 1번만 실행하고 그 후 실행 안함
    // useEffect(printConsole); //두번째 인자를 아얘 안넣으면 update할 때마다 실행
    useEffect(printConsole, [numberA]);

    return (
        <div>
            <button onClick={() => setNumber(numberA + 1)}>Number A</button>
            <button onClick={() => setANumber(numberB + 1)}>Number B</button>
            <div>{numberA} / {numberB}</div>
        </div>
    )
}

export default Effect;