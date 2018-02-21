import React from 'react';
import PsswrdScore from './PsswrdScore'

export default class PasswordIP extends React.Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);

    this.state = {
      // value: props.startValue || '',
      // score: this.props.startCount || 0,
      password: ''
    };
  }

  // onInputChange(event) {
  //   this.setState({
  //     value: event.target.value,
  //     password: event.target.value
  //   });
  //   console.log(this.state.value);
  //   console.log(this.state.value.length+1);
  // }
  handleChange(e) {
    this.setState({ password: e.target.value })
  }

  render() {
    // const {value} = this.state;
    const password = PsswrdScore(this.state.password);

    return (
      <div className="passwordip">
        <input className="passwordip__input"
          onChange={this.handleChange} />

        <span className="passwordip__span"> {password}  </span>
      </div>
    )
  }
}
