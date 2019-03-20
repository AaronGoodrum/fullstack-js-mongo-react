import axios from 'axios'

export const fetchContest = userId => {
  return axios.get(`/api/USER/${userId}`)
    .then(resp => resp.data)
}