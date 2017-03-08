import Vue from 'vue'
import axios from 'axios'
import {forEach, has, toNumber} from 'lodash'
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
          for (let news of response.data.included) {
            if (news.type === 'news') {
              commit('news/ADD_NEWS', news, { root: true })
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
    ADD_SITE: (state, site) => {
      site.id = toNumber(site.id)
      Vue.set(state.siteList, site.id, site)
    }
  },
  getters: {
    siteList: state => {
      return state.siteList
    },
    activatedSites: (state, getters, rootState, rootGetters) => {
      let activatedSites = {}
      forEach(rootGetters['preference/activatedSiteIds'], (activatedSiteId) => {
        if (has(state.siteList, activatedSiteId)) {
          activatedSites[activatedSiteId] = state.siteList[activatedSiteId]
        }
      })
      return activatedSites
    }
  }
}
