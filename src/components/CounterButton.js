import React, { Component } from 'react';

class CounterButton extends Component {
  constructor(props) {
    super(props)
    this.state = {
      count: 0
    }
  }


  updateCount = () => {
    this.setState(state => {
      return { count: state.count+ 1}
    })
  }

  shouldComponentUpdate(nextProps, nextState) {
    if(this.state.count !== nextState.count) {
      return true
    }
    return false
  }

  render() {
    return <button color={this.props.color} onClick={this.updateCount}>count: {this.state.count}</button>
  }
}

export default CounterButton;
