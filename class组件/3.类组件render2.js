import React from 'react'

class App extends React.PureComponent {
    //纯组件 
    constructor(props) {
        super(props)
        this.state = {
            n: 1,
            array: [1, 2, 3]
        }
    }

    add = () => {
        this.setState(
            (state) => {
                return { n: state.n + 1 }
            }
        )
    }

    //只显示奇数
    render() {
        return this.array.map(n => <div>{n}</div>)
    }
}

const app = new App()
console.dir(app)
export default App