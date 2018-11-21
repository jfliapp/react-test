import React, { Component }  from 'react'
import Count from './counter'

export default class Home extends Component {
  constructor(props) {
    super(props)
  }
  render() {
    return (
      <div>
        <p>Home</p>
        <Count />
      </div>
    )
  }
}
