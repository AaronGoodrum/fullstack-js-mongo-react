import React from 'react'
import Header from './Header'
import ContestList from './contestList';
import PropTypes from 'prop-types'
import Contest from './Contest'

//html5 history entries
const pushState = (obj, url ) => 
  window.history.pushState(obj, '', url);

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

  fetchUsers = (userId) => {
    console.log(userId),
    
    pushState(
      { currentUserId: userId},
      `/USERS/${userId}`
    )
    // Lookup the user the.state.users[userId]
    this.setState({
      pageHeader:this.state.userData[userId].username,
      currentUserId: userId
    })
  }
  currentContent(){
    if (this.state.currentUserId) {
      return <Contest {...this.state.userData[this.state.currentUserId]} />
    }

    return <ContestList
    onUserClick={this.fetchUsers}
    userData={this.state.userData}/>
  }

  render () {
    return (
      <div className="App">
        <Header message={this.state.pageHeader} />
        {this.currentContent()}
      </div>
    )
  }
}

App.protoTypes = {
  initialUserData: PropTypes.array
}

export default App
