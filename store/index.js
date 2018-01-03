import api from '~/service/http.js'

export const state = () => ({
  events: []
})

export const getters = {
  eventById: (state) => (id) => {
    for (let event of state.events) {
      if (event.event_id === parseInt(id)) {
        return event
      }
    }
    return false
  }
}

export const mutations = {
  ADD_EVENTS (state, events) {
    state.events = events
  }
}

export const actions = {
  async LOAD_EVENTS ({commit}) {
    const result = await api.get()
    commit('ADD_EVENTS', result.data)
  }
}
