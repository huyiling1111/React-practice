import React from 'react'

class App extends React.Component {
    divRef = undefined
    constructor(props) {
        super(props)
        this.state = {
            n: 1,
            width: undefined,
        }
        this.divRef = React.createRef()
        // 通过ref挂载在dom节点或组件上，该ref的current属性将能拿到dom节点或组件的实例
        console.log(this.divRef)
    }
    // 获取div的高度,好处是不会出现id冲突的情况
    componentDidMount() {
        const div = this.divRef.current
        // console.log(div)
        const { width } = div.getBoundingClientRect()
        this.setState = ({ width })


    }

    render() {
        return <div ref={this.divRef}>Hello World{this.state.width}</div>
    }
}

const app = new App()
console.dir(app)
export default App