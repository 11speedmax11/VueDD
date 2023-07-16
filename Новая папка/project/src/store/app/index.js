
const mutations = {
  UPDATE_LOADING: 'UPDATE_LOADING',
  UPDATE_CURRENT_MODAL: 'UPDATE_CURRENT_MODAL',
  UPDATE_USER_LIST: 'UPDATE_USER_LIST',
  UPDATE_CURRENT_USER: 'UPDATE_CURRENT_USER',
};
export default {
  namespaced: true,
  state: {
    loading: false,
    currentModal: {
      isOpen: false,
      componentName: null,
      titleModal: null,
      nameButton: null,
      action: null,
    },
    userList: [],
    currentUser: null,
  },
  getters: {
    loading(state) {
      return state.loading;
    },
    currentModal(state) {
      return state.currentModal;
    },
    userList(state) {
      return state.userList;
    },
    currentUser(state) {
      return state.currentUser;
    },
  },
  mutations: {

    [mutations.UPDATE_LOADING](state, payload) {
      state.loading = payload;
    },
    [mutations.UPDATE_CURRENT_MODAL](state, payload) {
      state.currentModal = payload;
    },
    [mutations.UPDATE_USER_LIST](state, payload) {
      state.userList = payload;
    },
    [mutations.UPDATE_CURRENT_USER](state, payload) {
      state.currentUser = payload;
    },
  },
  actions: {
    setLoading({ commit }, payload) {
      commit(mutations.UPDATE_LOADING, payload);
    },
    setCurrentModal({ commit }, payload) {
      commit(mutations.UPDATE_CURRENT_MODAL, payload);
    },
    closeCurrentModal({ commit }) {
      commit(mutations.UPDATE_CURRENT_MODAL, {
        isOpen: false,
        componentName: null,
        titleModal: null,
        action: null,
      });
    },
    setUserList({ commit }, payload) {
      commit(mutations.UPDATE_USER_LIST, payload);
    },
    setCurrentUser({ commit }, payload) {
      commit(mutations.UPDATE_CURRENT_USER, payload);
    },
  },
};
