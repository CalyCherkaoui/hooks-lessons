import React, { Component } from 'react'

class ClassMousePositionUpdateOnlyOnce extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
       x: 0,
       y: 0
    }
  }

  logMousePosition = e => {
    this.setState({ x: e.clientX, y: e.clientY})
  }
 
  componentDidMount() {
    window.addEventListener('mousemove', this.logMousePosition)
  }

  // with toogle exemple
  // componentWillUnmount() {
  //   window.removeEventListener('mousemove', this.logMousePosition)
  // }

  render() {
    return (
      <div>
        <hr></hr>
        <h1><em>Class Component Mouse Position with LifeCycle methods</em></h1>
        Mouse position ==&gt; X: {this.state.x}, Y: {this.state.y}
      </div>
    )
  }
}

export default ClassMousePositionUpdateOnlyOnce
