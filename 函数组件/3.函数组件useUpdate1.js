// 实现修改才触发钩子
import React, { useEffect, useState } from 'react'

const App = props => {
    const [n, setN] = useState(0)
    const onClick = () => {
        setN(n + 1)
    }

    const useX = (n) => {
        const [nUpdateCount, setNUpdateCount] = useState(0)
        console.log(nUpdateCount)
        useEffect(() => {
            // console.log("修改了n")
            setNUpdateCount((nUpdateCount) => nUpdateCount + 1)
        }, [n])

        return { nUpdateCount }

    }
    const { nUpdateCount } = useX(n)
    // console.log(nUpdateCount)
    useEffect(() => {
        if (nUpdateCount > 1) {

            // console.log("修改了nUpdateCount")
        }
    }, [nUpdateCount])
    return (
        <div>
            {n} <button onClick={onClick}>+1</button>
        </div>
    )
}


export default App