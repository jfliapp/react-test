import React, { Component } from 'react'
import { HashRouter, Link, Route, Switch } from 'react-router-dom'


class Header extends Component {

  constructor(props) {
    super(props)
  }

  render() {
    return (
      <header>
        <nav>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/product">Product</Link></li>
          </ul>
        </nav>
      </header>
    )
  }

}

export default Header
