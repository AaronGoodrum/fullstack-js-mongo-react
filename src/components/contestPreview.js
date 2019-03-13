import React from 'react'
import React, { Component } from 'react'

export default class contestPreview extends Component {
  render() {
    return (
      <div className="ContestPreview" onClick={...}>
      <div className="company-name">
        {userData.company.name}
      </div>
      <div className="user-name">
        {userData.name}
      </div>
    </div>
    )
  }
}

const ContestPreview = (userData) => (
  <div className="ContestPreview" onClick={...}>
    <div className="company-name">
      {userData.company.name}
    </div>
    <div className="user-name">
      {userData.name}
    </div>
  </div>
)
export default ContestPreview
