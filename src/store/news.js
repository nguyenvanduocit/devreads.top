import Vue from 'vue'
import axios from 'axios'
import {toNumber} from 'lodash'
export default {
  namespaced: true,
  state: {
    newsList: {},
    pickedNewsList: {}
  },
  actions: {
    FETCH_PICKED_NEWS: ({commit, state}) => {
      return new Promise((resolve, reject) => {
        axios.get('/api/v1/picked_news').then(response => {
          for (let news of response.data.data) {
            if (news.type === 'news') {
              commit('ADD_PICKED_NEWS', news)
            }
          }
          resolve()
        }).catch(error => {
          reject(error)
        })
      })
    }
  },
  mutations: {
    ADD_NEWS: (state, news) => {
      news.id = toNumber(news.id)
      Vue.set(state.newsList, news.id, news)
    },
    ADD_PICKED_NEWS: (state, news) => {
      news.id = toNumber(news.id)
      Vue.set(state.pickedNewsList, '_' + news.id, news)
    }
  },
  getters: {
    newsList: state => {
      return state.newsList
    },
    pickedNewsList: state => {
      return state.pickedNewsList
    }
  }
}
