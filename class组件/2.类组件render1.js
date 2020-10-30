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

        return (
            <>
                {this.state.n % 2 === 0 ?
                    <div>偶数</div> :
                    <span>奇数</span>}
                <button onClick={this.add}>+1</button>
            </>
        )
    }
}

const app = new App()
console.dir(app)
export default App