import EventService from '@/services/EventService.js'

export const namespaced = true

export const state = {
  events: [],
  eventTotalCount: 0
}

export const mutations = {
  INCREMENT_COUNT(state, value) {
    state.count += value
  },
  CREATE_EVENT(state, event) {
    state.events.push(event)
  },
  SET_EVENTS(state, events) {
    state.events = events
  },
  SET_EVENT_TOTAL_COUNT(state, value) {
    state.eventTotalCount = value
  }
}

export const actions = {
  incrementCount(incrementBy) {
    this.$store.commit('INCREMENT_COUNT', incrementBy)
  },

  createEvent({ commit, dispatch }, event) {
    return EventService.createEvent(event)
      .then(() => {
        commit('CREATE_EVENT', event)
        const notification = {
          type: 'success',
          message: 'Your event has been created!'
        }
        dispatch('notification/add', notification, { root: true })
      })
      .catch(error => {
        console.log(error)
        const notification = {
          type: 'error',
          message: 'There was a problem creating your event: ' + error.message
        }
        dispatch('notification/add', notification, { root: true })
        throw error
      })
  },

  fetchEvents({ commit, dispatch }, { perPage, page }) {
    EventService.getEvents(perPage, page)
      .then(response => {
        console.log(response)
        commit('SET_EVENT_TOTAL_COUNT', response.headers['x-total-count'])
        commit('SET_EVENTS', response.data)
      })
      .catch(error => {
        console.log(error.message)
        const notification = {
          type: 'error',
          message: 'There was a problem events:' + error.message
        }

        dispatch('notification/add', notification, { root: true })
      })
  }
}

export const getters = {
  catLength: state => {
    return state.categories.length
  },
  getEventById: state => id => {
    return state.events.find(event => event.id === id)
  },
  doneToDos: state => {
    return state.events.filter(event => event.status)
  },
  activeToDosCount: (state, getters) => {
    return state.events.length - getters.doneToDos.length
  }
}
