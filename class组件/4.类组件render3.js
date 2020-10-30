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
        let result = []
        for (let i = 0; i < this.state.array.length; i++) {
            result.push(<div key={i}>{this.state.array[i]}</div>)
        }

        return result
    }
}

const app = new App()
console.dir(app)
export default App