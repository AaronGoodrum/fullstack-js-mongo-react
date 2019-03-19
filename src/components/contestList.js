import React from 'react'
import ContestPreview from './contestPreview'
import PropTypes from 'prop-types'

const ContestList = ({ userData, onUserClick }) => (
  <div className="ContestList">
  {userData.map(userData =>
    <ContestPreview
      key={userData.id} 
      onClick={onUserClick}
      {...userData} />
  )}
</div>
)

ContestList.protoTypes = {
  userData: PropTypes.array.isRequired,
  onUserClick: PropTypes.func.isRequired
}

export default ContestList