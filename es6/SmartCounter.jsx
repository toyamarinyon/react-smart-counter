import React, { PropTypes, Component } from 'react';

const propTypes = {
  value: PropTypes.number
};

const defaultProps = {
  value: 0
};

class SmartCounter extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: props.value
    };
    this.incrementValue = this.incrementValue.bind(this);
    this.decrementValue = this.decrementValue.bind(this);
  }

  incrementValue() {
    this.setState({ value: this.state.value + 1 });
  }

  decrementValue() {
    this.setState({ value: this.state.value - 1 });
  }

  render() {
    return (
      <div className="SmartCounter">
        <span className="presentation">{this.state.value}</span>
        <span className="increment" onClick={this.incrementValue}>+</span>
        <span className="decrement" onClick={this.decrementValue}>-</span>
      </div>
    );
  }
}

SmartCounter.propTypes = propTypes;

SmartCounter.defaultProps = defaultProps;

export default SmartCounter;
