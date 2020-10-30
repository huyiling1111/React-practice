import React from 'react'

class App extends React.PureComponent {
    //纯组件 
    constructor(props) {
        super(props)
        this.state = {
            n: 1
        }
    }

    add = () => {
        this.setState(
            (state) => {
                return { n: state.n + 1 }
            }
        )
    }

    //在两种情况下都加button
    render() {
        let message
        if (this.state.n % 2 === 0) {
            message = <div>偶数</div>
        }
        else {
            message = <span>奇数</span>
        }
        return (
            <>
                {message}
                <button onClick={this.add}>+1</button>
            </>
        )
    }
}

const app = new App()
console.dir(app)
export default App