import React from 'react'
import Header from './Header'
import ContestList from './contestList';
import PropTypes from 'prop-types'


// import data from '../testData'

// state-ful
class App extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      pageHeader: 'Naming from Stateful Contests',
      userData: this.props.initialUserData
    }
  }

  // Component Life cycle hooks
  // will need ajax for data using axios
  // will need return, and catch for the ajax call
  componentDidMount () {

  }

  componentWillUnmount () {
    // clean listeners
  }

  render () {
    return (
      <div className="App">
        <Header message={this.state.pageHeader} />
        <ContestList userData={this.state.userData}/>
      </div>
    )
  }
}

App.protoTypes = {
  initialUserData: PropTypes.array
}

export default App
