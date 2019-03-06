import React from 'react'
import axios from 'axios'
import Header from './Header'
import ContestPreview from './contestPreview'

// import data from '../testData'

// state-ful
class App extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      pageHeader: 'Naming from Stateful Contests',
      USERS: []
    }
  }

  // Component Life cycle hooks
  // will need ajax for data using axios
  // will need return, and catch for the ajax call
  componentDidMount () {
    axios.get('/api/USERS')
      .then(resp => {
        console.log(resp)
        this.setState({
          users: resp.data.USERS
        })
      })
      .catch(console.error)
  }

  componentWillUnmount () {
    // clean listeners
  }

  render () {
    return (
      <div className="App">
        <Header message={this.state.pageHeader} />
        <div>
          {this.props.userData.map(userData =>
            <ContestPreview {...userData}key={userData.id} />
          )}
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
