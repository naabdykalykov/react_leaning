import React, { Component } from 'react';

class Counter extends Component {
  state = {
    count: 0
  };

  increaseCount = () => {
    this.setState(prevState => ({ count: prevState.count + 1 }));
  };

  decreaseCount = () => {
    this.setState(prevState => ({ count: prevState.count - 1 }));
  };

  render() {
    return (
      <div>
        <h1>Текущий счётчик: {this.state.count}</h1>
        <button onClick={this.increaseCount}>Увеличить</button>
        <button onClick={this.decreaseCount}>Уменьшить</button>
      </div>
    );
  }
}

export default Counter;