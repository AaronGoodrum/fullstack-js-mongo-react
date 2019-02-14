import React from 'react'
import ReactDOM from 'react-dom'

const App = () => {
  return (
    <h2 className="text-center">
      Hello React Components with express and MongoDB
    </h2>
  )
}
ReactDOM.render(
  <App headerMessage />,
  document.getElementById('root')
)
