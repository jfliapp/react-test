import React, {Component} from 'react'

import { connect } from "react-redux";
import { addNumAction, divNumAction } from "./redux/action";

class Counter extends Component {
  constructor(props) {
    super(props)
    console.log(props, "construtor =>  porps")
    this.state = {
      count: 0
    }

    this.addNum = this.addNum.bind(this)
    this.divNum = this.divNum.bind(this)
  }

  addNum() {
    this.props.addNum(3)
    // this.setState(
    //   preNum => preNum.count++
    // ) 
  }

  divNum() {
    this.props.divNum(2)
    // this.setState(
    //   preNum => preNum.count--
    // ) 
  }

  render () {
    console.log(this.props)
    return (
      <div>
        <span> 自己state=> {this.state.count}</span><br/>
        <span> redux(+++++)state => {this.props.count.addNum}</span><br/>
        <span> redux(-----)state=> {this.props.count.divNum}</span><br/>
        
        <button onClick={this.addNum}>+</button>
        <button onClick={this.divNum}>-</button>
        <button >····</button>
      </div>
    )
  }
}

const mapState = state => ({
  count: state
})

const mapMution = dispatch => ({
    addNum: num => dispatch(addNumAction(num)),
    divNum: num => dispatch(divNumAction(num))
})

export default connect(
  mapState,
  mapMution
)(Counter)