import React from 'react'
import ContestPreview from './contestPreview'
import PropTypes from 'prop-types'

const ContestList = ({ userData, onUserClick }) => (
  <div className="ContestList">
  {Object.keys(userData).map(userId =>
    <ContestPreview
      key={userId} 
      onClick={onUserClick}
      {...userData[userId]} />
  )}
</div>
)

ContestList.protoTypes = {
  userData: PropTypes.object.isRequired,
  onUserClick: PropTypes.func.isRequired
}

export default ContestList