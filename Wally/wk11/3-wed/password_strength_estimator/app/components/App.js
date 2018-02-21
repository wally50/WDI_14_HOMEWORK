import React from 'react'
// import PasswordInput from './PasswordInput'
import PasswordIP from './PasswordIP'

export default class App extends React.Component {

  constructor(props) {
    super(props)
  }

  render() {
    return <div>
      <h1>hello world</h1>
      <PasswordIP />
    </div>
  }

}
