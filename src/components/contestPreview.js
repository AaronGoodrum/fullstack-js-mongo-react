import React from 'react'

const ContestPreview = (userData) => (
  <div className="ContestPreview" key={userData.id}>
    <div>
      {userData.company.name}
    </div>
    <div>
      {userData.name}
    </div>
  </div>
)
export default ContestPreview
