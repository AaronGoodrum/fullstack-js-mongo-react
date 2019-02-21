import React from 'react'
import ReactDOM from 'react-dom'

import data from './testData.json'

import App from './components/App'
console.log(data)
// Tree Index > App > Header

ReactDOM.render(
  <App userData={data.USERS}/>,
  document.getElementById('root')
)
