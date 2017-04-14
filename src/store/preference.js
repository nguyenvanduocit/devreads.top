import {indexOf, pull} from 'lodash'
export default {
  namespaced: true,
  state: {
    layout: 'COMPACT', // CLEAN,
    activatedSiteIds: []
  },
  actions: {
    LOAD_PREFERENCE: ({commit, state}) => {
      let getLayoutPromise = window.preferenceStore.getItem('layout').then((value) => {
        if (!value) {
          value = 'COMPACT'
          commit('SET_LAYOUT', value, true)
        } else {
          commit('SET_LAYOUT', value)
        }
      })
      let getActivatedSiteIdsPromise = window.preferenceStore.getItem('activatedSiteIds').then((value) => {
        if (value) {
          commit('SET_ACTIVATED_SITES', value)
        }
      })
      return Promise.all([getLayoutPromise, getActivatedSiteIdsPromise])
    },
    TOGGLE_LAYOUT: ({commit, state}) => {
      if (state.layout === 'COMPACT') {
        commit('SET_LAYOUT', 'CLEAN', true)
        window.preferenceStore.setItem('layout', 'CLEAN')
      } else {
        commit('SET_LAYOUT', 'COMPACT', true)
        window.preferenceStore.setItem('layout', 'COMPACT')
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
    ADD_ACTIVATED_SITE: (state, siteId, quite) => {
      if (indexOf(state.activatedSiteIds, siteId) === -1) {
        state.activatedSiteIds.push(siteId)
        window.preferenceStore.setItem('activatedSiteIds', state.activatedSiteIds)
      }
    },
    REMOVE_ACTIVATED_SITE: (state, siteId) => {
      if (indexOf(state.activatedSiteIds, siteId) >= -1) {
        pull(state.activatedSiteIds, siteId)
        window.preferenceStore.setItem('activatedSiteIds', state.activatedSiteIds)
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
