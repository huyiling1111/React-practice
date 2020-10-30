import React from 'react'

class App extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            n: 1,
            width: undefined
        }
    }
    // 获取div的高度
    componentDidMount() {
        const div = document.getElementById('xxx')
        const { width } = div.getBoundingClientRect()
        this.setState({ width })

    }

    render() {
        return <div id="xxx">Hello World{this.state.width}</div>
    }
}

const app = new App()
console.dir(app)
export default App