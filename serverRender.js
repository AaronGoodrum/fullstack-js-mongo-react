// fetch the data from api for server rendering

import config from './config'
import axios from 'axios'

// Make a request for a user with a given URL
axios.get(`${config.serverUrl}/api/USERS`)
  .then(resp => {
    console.log(resp.data)
  })
  .catch(error => {
    // handle error
    console.log(error)
  })

//   // Want to use async/await? Add the `async` keyword to your outer function/method.
// async function getUser() {
//   try {
//     const response = await axios.get('${config.serverUrl}/api/USERS');
//     console.log(response);
//   } catch (error) {
//     console.error(error);
//   }
// }