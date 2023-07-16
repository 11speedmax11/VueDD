import Vue from "vue";
import Vuex from "vuex";
import app from "./app";
import task from "./app/task";
import project from "./app/project";
import user from "./app/user";
Vue.use(Vuex);



const store = () => {
  return new Vuex.Store({
    modules: {
      app,
      task,
      project,
      user,
    }
  });
}

export default store;