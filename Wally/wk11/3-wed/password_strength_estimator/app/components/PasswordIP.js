import React from 'react';
import PsswrdScore from './PsswrdScore'

export default class PasswordIP extends React.Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);

    this.state = {
      password: ''
    };
  }


  handleChange(e) {
    this.setState({ password: e.target.value });
  }

  render() {
    const rating = PsswrdScore(this.state.password);

    return (
      <div className="passwordip">
        <input className="passwordip__input"
          onChange={this.handleChange} />

        <span className="passwordip__span"> {rating}  </span>
      </div>
    )
  }
}
