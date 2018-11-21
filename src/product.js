import React, { Component } from 'react'
import { Link, Route, Switch } from 'react-router-dom'

import { connect } from "react-redux";
import Detail from './detail';

class Product extends Component {
  constructor(props) {
    super(props)
    this.routerClick = this.routerClick.bind(this)
  }

  render() {
    console.log(this.props)
    return (
      <div>
        <div>product</div>
        <ol>
          <li>
            <Link to="/product/1">商品1</Link>
          </li>
          <li>
            <Link to="/product/2">商品2</Link>
          </li>
          <li>
            <Link to="/product/3">商品3</Link>
          </li>
        </ol>
        <div>
          <hr/>
          <Route path="/product/:id" component={Detail} />
          <Route exact path="/product" render={() => <h3>请选择其中一件商品</h3>} />
        </div>
        {/* <button type="button" onClick={this.routerClick}>Click</button> */}
      </div>
    )
  }
  routerClick() {
    this.props.history.goBack()
  }
}

export default connect(
  state => ({ count: state.divNum})
)(Product)
