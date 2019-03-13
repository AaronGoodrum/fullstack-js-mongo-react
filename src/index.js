import React from 'react'
import ReactDOM from 'react-dom'

import App from './components/App'
// Tree Index > App > Header

  ReactDOM.hydrate(
    <App initialUserData={window.initialData.USERS}/>,
    document.getElementById('root')
  )
        