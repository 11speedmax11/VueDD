const mutations = {
  UPDATE_SEARCH: 'UPDATE_SEARCH',
  UPDATE_SORT_FIELD: 'UPDATE_SORT_FIELD',
  UPDATE_SORT_ORDER: 'UPDATE_SORT_ORDER',
  UPDATE_PAGE: 'UPDATE_PAGE',
};

export default {
  namespaced: true,
  state: {
    search: null,
    sortField: 'name',
    sortOrder: 'asc',
    page: 1,
  },
  getters: {
    search: state => state.search,
    sortField: state => state.sortField,
    sortOrder: state => state.sortOrder,
    page: state => state.page,
  },
  mutations: {
    [mutations.UPDATE_SEARCH](state, payload) {
      state.search = payload;
    },
    [mutations.UPDATE_SORT_FIELD](state, payload) {
      state.sortField = payload;
    },
    [mutations.UPDATE_SORT_ORDER](state, payload) {
      state.sortOrder = payload;
    },
    [mutations.UPDATE_PAGE](state, payload) {
      state.page = payload;
    },
  },
  actions: {
    setSearch({ commit }, payload) {
      commit(mutations.UPDATE_SEARCH, payload);
    },
    setSortField({ commit }, payload) {
      commit(mutations.UPDATE_SORT_FIELD, payload);
    },
    setSortOrder({ commit }, payload) {
      commit(mutations.UPDATE_SORT_ORDER, payload);
    },
    setPage({ commit }, payload) {
      commit(mutations.UPDATE_PAGE, payload);
    },
  },
};
