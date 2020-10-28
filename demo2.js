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

import ReactDOM from 'react-dom';
import React from 'react'
let n = 1
const App = () => {
    return (
        <div>{n}<button onClick={() => {
            n += 1
            render()
        }} >+1</button>  </div>
    )
}

const render = () => ReactDOM.render(
    <App />,
    document.getElementById('root')
);


export default App