import React, { PropTypes, Component } from 'react';

const propTypes = {
  value: PropTypes.number,
  max: PropTypes.number,
  min: PropTypes.number,
  step: PropTypes.number,
  prefix: PropTypes.string,
  suffix: PropTypes.string,
  onChange: PropTypes.func
};

const defaultProps = {
  value: 0,
  max: 9999,
  min: -9999,
  step: 1,
  prefix: '',
  suffix: '',
  onChange: e => e
};

class SmartCounter extends Component {
  constructor(props) {
    super(props);
    this.state = { value: props.value };
    this.handleOnClickIncrementButton = this.handleOnClickIncrementButton.bind(this);
    this.handleOnClickDecrementButton = this.handleOnClickDecrementButton.bind(this);
  }

  incrementable() {
    return this.state.value < this.props.max;
  }

  decrementable() {
    return this.state.value > this.props.min;
  }

  handleOnClickIncrementButton() {
    if (this.incrementable()) {
      const incrementedValue = this.state.value + this.props.step;
      this.props.onChange(incrementedValue);
      this.setState({ value: incrementedValue });
    }
  }

  handleOnClickDecrementButton() {
    if (this.decrementable()) {
      const decrementedValue = this.state.value - this.props.step;
      this.props.onChange(decrementedValue);
      this.setState({ value: decrementedValue });
    }
  }

  render() {
    return (
      <div className="SmartCounter">
        <span className="presentation-prefix">{this.props.prefix}</span>
        <span className="presentation">{this.state.value}</span>
        <span className="presentation-suffix">{this.props.suffix}</span>
        <span className="increment" onClick={this.handleOnClickIncrementButton}>+</span>
        <span className="decrement" onClick={this.handleOnClickDecrementButton}>-</span>
      </div>
    );
  }
}

SmartCounter.propTypes = propTypes;

SmartCounter.defaultProps = defaultProps;

export default SmartCounter;
