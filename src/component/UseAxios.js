import defaultAxtios from "axios"
import React, { useEffect, useState } from "react"

//Module not found: Can't resolve 'axios' in 에러 발생 시, "npm install axios --save" 모듈 설치
const UseAxios = (opts, axiosInstence = defaultAxtios) => {
    const [state, setState] = useState({
        loading: true,
        error: null,
        data: null
    });
    const [trigger, setTrigger] = useState(0);
    // if (!opts.url) {
    //     return;
    // }
    const refetch = () => {
        setState({
            ...state,
            loading: true
        });
        setTrigger(Date.now()); //난수를 생성하여 trigger를 업데이트 해주면, useEffect 발동
    }
    useEffect(() => {
        axiosInstence(opts).then(data => {  //http request 를 받으면(=then)
            setState({
                ...state, //바뀐바가 없으면 기존 state값을 넣어줌. 주석처리 시 "error : undefine" 출력
                loading: false,
                data
            })
        }).catch(error => {
            setState({
                ...state,
                loading: false,
                error
            })
        })
    }, [trigger]);

    return { ...state, refetch };
}

export default UseAxios;