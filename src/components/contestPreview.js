import React, { Component } from 'react'
import PropTypes from 'prop-types'

class ContestPreview extends Component {
  handleClick = () => {
    console.log(this.props.username)
  }
  render() {
    return (
      <div className="ContestPreview" onClick={this.handleClick}>
      <div className="company-name">
        {this.props.company.name}
      </div>
      <div className="user-name">
        {this.props.username}
      </div>
    </div>
    )
  }
}

ContestPreview.protoTypes = {
  username: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired
}

export default ContestPreview
