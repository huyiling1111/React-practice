console.log(window.React);
console.log(window.React.createElement);
console.log(window.ReactDOM);
console.log(window.ReactDOM.render);

const React = window.React;
const ReactDOM = window.ReactDOM;

let n = 0;
const App = () =>
    React.createElement("div", null, [
        n,
        React.createElement(
            "button",
            {
                onClick: () => {
                    n += 1;
                    console.log(n); //这一句是精髓
                    ReactDOM.render(App(), document.querySelector("#app")); // 为什么还是不能重新渲染
                }
            },
            "+1"
        )
    ]);

ReactDOM.render(App(), document.querySelector("#app"));


// 等价于

import React, { useState } from 'react';

function App() {

    const [n, setn] = useState(0);

    return (
        <div className='container'>
            {n}
            <div className='btn'>
                <button onClick={() => setn(n + 1)}>+1</button>

                <button onClick={() => setn(n - 1)}>-1</button>
            </div >
        </div>
    );
}

export default App;