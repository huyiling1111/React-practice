import React from 'react'

class App extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            n: 1
        }
    }

    //表示阻止UI更新,准确的说是阻止render函数触发
    shouldComponentUpdate(newProps, newState) {
        if (this.state.n === newState.n) {
            return false
        } else {
            return true
        }
    }


    add = () => {
        this.setState(
            (state) => {
                return { n: state.n + 1 }
            }

        )

        this.setState(
            (state) => {
                return { n: state.n - 1 }
            }
        )
    }
    render() {

        console.log("render 了一次")

        return (
            <div>App
                <div>{this.state.n}
                    <button onClick={this.add}>
                        +1
                </button></div>
            </div>
        )
    }
}

// console.dir(React.Component)
export default App