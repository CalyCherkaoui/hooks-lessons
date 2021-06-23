import React, { Component } from 'react'

class ClassCounterLifeCycle extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
       count: 0,
       name: ''
    }
  }

  componentDidMount() {
    document.title = `Clicked ${this.state.count} times`
  }

  componentDidUpdate(prevProps, prevState) {
    console.log('Updating document title with class component lifeCycle')
    if( prevState.count !== this.state.count) {
      console.log('Updating document title with class component lifeCycle with condition')
      document.title = `Clicked ${this.state.count} times`
    }
  }
  
  render() {
    return (
      <div>
        <hr></hr>
        <h1><em>Class Component Counter with LifeCycle methods</em></h1>
        <input
          type="text"
          value={this.state.name}
          onChange={ e => {this.setState({name: e.target.value})}}
        />
        <button onClick={() => this.setState({ count: this.state.count + 1})} >
          Click {this.state.count} times
        </button>
      </div>
    )
  }
}

export default ClassCounterLifeCycle
