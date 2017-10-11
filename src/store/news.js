import Vue from "vue";
import axios from "axios";
export default {
  namespaced: true,
  state: {
    newsList: {},
    pickedNewsList: {}
  },
  actions: {
    FETCH_PICKED_NEWS: ({ commit, state }) => {
      return new Promise((resolve, reject) => {
        axios
          .get("/api/v1/picked_news")
          .then(response => {
            for (let news of response.data.data) {
              if (news.type === "news") {
                commit("ADD_PICKED_NEWS", news);
              }
            }
            resolve();
          })
          .catch(error => {
            reject(error);
          });
      });
    }
  },
  mutations: {
    ADD_NEWS: (state, news) => {
      Vue.set(state.newsList, news.id, news);
    },
    SET_NEWS: (state, newsList) => {
      Vue.set(state, "newsList", newsList);
    },
    ADD_PICKED_NEWS: (state, news) => {
      Vue.set(state.pickedNewsList, news.id, news);
    }
  },
  getters: {
    newsList: state => {
      return state.newsList;
    },
    pickedNewsList: state => {
      return state.pickedNewsList;
    }
  }
};
