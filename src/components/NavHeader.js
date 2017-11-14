import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import { withRouter } from 'react-router'

class NavHeader extends Component {
  render() {
    return (
      <div>
        <Link to='/'> Home </Link>
        <Link to='/page1'> Page1 </Link>
        <Link to='/page2'> page2 </Link>
      </div>
    )
  }
}

export default withRouter(NavHeader)
