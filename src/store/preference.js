import pull from 'lodash/pull'
import indexOf from 'lodash/indexOf'
import ls from '../services/ls'
export default {
  namespaced: true,
  state: {
    layout: 'COMPACT', // CLEAN,
    activatedSiteIds: []
  },
  actions: {
    LOAD_PREFERENCE: ({commit, state}) => {
      let getLayoutPromise = ls.getItem('layout').then((value) => {
        if (!value) {
          value = 'COMPACT'
          commit('SET_LAYOUT', value, true)
        } else {
          commit('SET_LAYOUT', value)
        }
      })
      let getActivatedSiteIdsPromise = ls.getItem('activatedSiteIds').then((value) => {
        if (value) {
          commit('SET_ACTIVATED_SITES', value)
        }
      })
      return Promise.all([getLayoutPromise, getActivatedSiteIdsPromise])
    },
    TOGGLE_LAYOUT: ({commit, state}) => {
      if (state.layout === 'COMPACT') {
        commit('SET_LAYOUT', 'CLEAN', true)
        ls.setItem('layout', 'CLEAN')
      } else {
        commit('SET_LAYOUT', 'COMPACT', true)
        ls.setItem('layout', 'COMPACT')
      }
    }
  },
  mutations: {
    SET_LAYOUT: (state, layout, updateStorage) => {
      state.layout = layout
    },
    SET_ACTIVATED_SITES: (state, siteIds, updateStorage) => {
      state.activatedSiteIds = siteIds
    },
    ADD_ACTIVATED_SITE: (state, siteId) => {
      console.log(siteId)
      if (indexOf(state.activatedSiteIds, siteId) === -1) {
        state.activatedSiteIds.push(siteId)
        ls.setItem('activatedSiteIds', state.activatedSiteIds)
      }
    },
    REMOVE_ACTIVATED_SITE: (state, siteId) => {
      if (indexOf(state.activatedSiteIds, siteId) >= -1) {
        pull(state.activatedSiteIds, siteId)
        ls.setItem('activatedSiteIds', state.activatedSiteIds)
      }
    }
  },
  getters: {
    layout: state => {
      return state.layout
    },
    activatedSiteIds: state => {
      return state.activatedSiteIds
    }
  }
}
