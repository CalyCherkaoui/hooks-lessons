import React, { Component } from 'react'

class ClassCounters extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
       count: 0
    }
  }
  
  increment = () => {
    this.setState(prevState => {
      return {
        count: prevState.count + 1
      }
    })
  }

  render() {
    return (
      <div>
        <h1><em>Class Component Counter</em></h1>
        <h1>{this.state.count}</h1>
        <button onClick={this.increment}>+ 1 incrementation</button>
      </div>
    )
  }
}

export default ClassCounters

