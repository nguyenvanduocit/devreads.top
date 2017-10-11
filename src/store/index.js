import Vue from "vue";
import Vuex from "vuex";
import Site from "./site";
import News from "./news";
import Preference from "./preference";
Vue.use(Vuex);
const store = new Vuex.Store({
  modules: {
    site: Site,
    news: News,
    preference: Preference
  }
});

export default store;
