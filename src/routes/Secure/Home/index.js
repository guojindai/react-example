import React, { Component } from 'react';
import { connect } from 'dva';
import { Link } from 'dva/router';
import { Button } from 'antd'

@connect()
export default class Home extends Component {

  render() {
    return (
      <div className="home-page">
        <div>Home Page</div>
        <Link to="/login"><Button>Hello</Button></Link>
      </div>
    )
  }

}
