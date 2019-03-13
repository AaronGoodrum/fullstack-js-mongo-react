// fetch the data from api for server rendering
// ReactDom server to Render from server
import React from 'react'
import ReactDOMServer from 'react-dom/server'

import App from './src/components/App'

import config from './config'
import axios from 'axios'

const serverRender = () =>
// Make a request for a user with a given URL
axios.get(`${config.serverUrl}/api/USERS`)
  .then(resp => {
    return {
    initialMarkup: ReactDOMServer.renderToString(
    <App initialUserData={resp.data.USERS}/>
    ),
      initialData: resp.data
    }
  })

  export default serverRender