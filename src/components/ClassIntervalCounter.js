import React, { Component } from 'react'

class ClassIntervalCounter extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
       count: 0
    }
  }
  
  componentDidMount() {
    this.interval = setInterval(this.tick, 1000)
  }

  componentWillUnmount() {
    clearInterval(this.interval)
  }

  tick = () => {
    this.setState({
      count: this.state.count + 1
    })
  }
  render() {
    return (
      <div>
        <hr></hr>
        <hr></hr>
        <h3><em>Class Component Interval timer that runs evey second with LifeCycle methods</em></h3>
        <h2>{this.state.count}</h2>
      </div>
    )
  }
}

export default ClassIntervalCounter
