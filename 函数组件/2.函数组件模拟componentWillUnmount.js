import React, { useEffect, useState } from 'react'
// 所有都用箭头函数，消除了this
const App = props => {
    const [childVisible, setChildVisible] = useState(true)
    const hide = () => {
        setChildVisible(!childVisible)
    }
    const show = () => {

        setChildVisible(!childVisible)
    }
    console.log(!childVisible)
    useEffect(() => { console.log('任意属性变更,后面的数组可以不写') })
    return (
        <div>
            {childVisible ? <button onClick={hide}>hide</button> : <button onClick={show}>show</button>}
            {childVisible ? <Child /> : null}
        </div>
    )
}

//onClick 只接受函数，不接受函数调用
const Child = (props) => {
    useEffect(() => {
        return () => {
            console.log('Child 销毁了')
        }
    })
    return (<div>Child</div>)
}
export default App