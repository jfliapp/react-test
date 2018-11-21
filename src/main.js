import React, { Component } from 'react'
import { Route, Switch } from 'react-router-dom'

import Home from './home'
import Product from './product'
import Detail from './detail'

export default class Main extends Component {

  constructor(props) {
    super(props)
  }

  render() {
    return (
      <main>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/product" component={Product} />
          {/* <Route path="/detail/:id" component={Detail} /> */}
        </Switch>
      </main>
    )
  }
}

