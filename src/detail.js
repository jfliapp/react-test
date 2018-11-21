import React, { Component } from 'react'

// import {Link} from 'react-router-dom'
export default class Detail extends Component {

  constructor(props) {
    super(props)
    this.state = {
      id: 1
    }
  }

  componentDidMount() {
    console.log("进来了detail页面")
    console.log(this.props)
    
    
  }

  render() {
    let Lid = this.props.match.params.id    
    return (
      <div>
        我是第{Lid}个的商品详情
      </div>
    )
  }
  
}

