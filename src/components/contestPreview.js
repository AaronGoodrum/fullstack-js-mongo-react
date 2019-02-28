import React from 'react'

const ContestPreview = (userData) => (
  <div className="ContestPreview" key={userData.id}>
    <div className="company-name">
      {userData.company.name}
    </div>
    <div className="user-name">
      {userData.name}
    </div>
  </div>
)
export default ContestPreview
