import React from 'react'
import ContestPreview from './contestPreview'
import PropTypes from 'prop-types'

const ContestList = ({ userData }) => (
  <div className="ContestList">
  {userData.map(userData =>
    <ContestPreview {...userData}key={userData.id} />
  )}
</div>
)

ContestList.protoTypes = {
  userData: PropTypes.array
}

export default ContestList