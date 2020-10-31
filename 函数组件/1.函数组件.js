import React, { useState } from 'react'

console.log(React)
const App = props => {
    const [n, setN] = useState(0)
    const onClick = () => { setN(n + 1) }
    return (
        <div>{n}
            <button onClick={onClick}></button>
        </div>
    )
}
export default App