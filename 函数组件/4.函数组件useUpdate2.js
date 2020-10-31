// 实现修改才触发钩子
import React, { useEffect, useState } from 'react'

const useUpdate = (fn, n) => {
    const [count, setCount] = useState(0)
    // console.log(nUpdateCount)
    useEffect(() => {
        // console.log("修改了n")
        setCount((count) => count + 1)
    }, [n])


    useEffect(() => {
        if (count > 1) {
            fn()
        }
    }, [count, fn])


}

const App = props => {
    const [n, setN] = useState(0)
    const onClick = () => {
        setN(n + 1)
    }


    useUpdate(() => {
        console.log("修改了nUpdateCount")
    }, n)
    return (
        <div>
            {n} <button onClick={onClick}>+1</button>
        </div>
    )
}


export default App