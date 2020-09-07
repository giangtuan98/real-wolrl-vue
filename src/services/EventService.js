import axios from 'axios'

const apiClient = axios.create({
  baseURL: 'http://localhost:3334',
  withCredentials: false,
  header: {
    Accept: 'application/json',
    'Content-Type': 'application/json'
  }
})

export default {
  getEvents(perPage, page) {
    return apiClient.get(`/events?_limit=${perPage}&_page=${page}`)
  },
  getEvent(id) {
    return apiClient.get('/events/' + id)
  },
  createEvent(event) {
    return apiClient.post('/events', event)
  }
}
