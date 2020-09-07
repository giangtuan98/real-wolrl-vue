import Vue from 'vue'
import Vuex from 'vuex'

import * as user from '@/store/modules/user.js'
import * as event from '@/store/modules/event.js'
import * as notification from '@/store/modules/notification.js'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    user,
    event,
    notification
  },
  state: {
    count: 0,
    times: ['7:30', '8:30', '9:30'],
    categories: [
      'sustainability',
      'nature',
      'animal welfare',
      'housing',
      'education',
      'food',
      'community'
    ],

    todos: [
      { id: 1, title: 'abc', organizer: 'asdas', status: true },
      { id: 2, title: 'abc1', organizer: 'asdas1', status: false }
    ]
  }
})
