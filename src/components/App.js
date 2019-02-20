import React from 'react'
import Header from './Header'

// state-ful
class App extends React.Component {
  // constructor (props) {
  //   super(props)
  //   this.state = { pageHeader: 'Naming from Stateful Contests' }
  // }
  setState({ pageHeader: 'Naming from Stateful Contests' })

  render () {
    return (
      <div className="App">
        <Header message={this.state.pageHeader} />
        <div>
          ...
        </div>
      </div>
    )
  }
}
// State-less
//  const App = (props) => {
//   return (
//     <div className="App">
//       <Header message="Naming Contests" />
//       <div>
//       </div>
//     </div>
//   )
// }

export default App
