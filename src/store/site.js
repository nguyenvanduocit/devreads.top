import Vue from 'vue'
import axios from 'axios'
import forEach from 'lodash/forEach'
import has from 'lodash/has'
export default {
  namespaced: true,
  state: {
    siteList: {}
  },
  actions: {
    FETCH: ({commit, state}) => {
      return new Promise((resolve, reject) => {
        axios.get('/api/v1/sites').then(response => {
          for (let site of response.data.data) {
            if (site.type === 'sites') {
              commit('ADD_SITE', site)
            }
          }
          let newsList = {}
          for (let news of response.data.included) {
            if (news.type === 'news') {
              newsList[news.id] = news
            }
          }
          commit('news/SET_NEWS', newsList, { root: true })
          resolve()
        }).catch(error => {
          reject(error)
        })
      })
    }
  },
  mutations: {
    ADD_SITE: (state, site) => {
      Vue.set(state.siteList, site.id, site)
    }
  },
  getters: {
    siteList: state => {
      return state.siteList
    },
    activatedSites: (state, getters, rootState, rootGetters) => {
      if (rootGetters['preference/activatedSiteIds']) {
        let activatedSites = {}
        forEach(rootGetters['preference/activatedSiteIds'], (activatedSiteId) => {
          if (has(state.siteList, activatedSiteId)) {
            activatedSites[activatedSiteId] = state.siteList[activatedSiteId]
          }
        })
        return activatedSites
      }
      return state.siteList
    }
  }
}
