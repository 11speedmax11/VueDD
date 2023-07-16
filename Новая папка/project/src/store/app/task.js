const mutations = {
  UPDATE_FILTER: 'UPDATE_FILTER',
  UPDATE_NAME: 'UPDATE_NAME',
  UPDATE_SORT_FIELD: 'UPDATE_SORT_FIELD',
  UPDATE_SORT_ORDER: 'UPDATE_SORT_ORDER',
  UPDATE_PAGE: 'UPDATE_PAGE',
};


export default {
  namespaced: true,
  state: {
    filter: {
      name: null,
      status: null,
      author: null,
      executor: null,
      projectId: null,
      dateStart: null,
      dateEnd: null
    },
    sort: {
      sortField: 'name',
      sortOrder: 'asc',
    },
    page: 1,
  },
  getters: {
    filter: state => state.filter,
    name: state => state.filter.name,
    sortField: state => state.sort.sortField,
    sortOrder: state => state.sort.sortOrder,
    page: state => state.page,
  },
  mutations: {
    [mutations.UPDATE_FILTER](state, payload) {
      state.filter = payload;
    },
    [mutations.UPDATE_NAME](state, payload) {
      state.filter.name = payload;
    },
    [mutations.UPDATE_SORT_FIELD](state, payload) {
      state.sort.sortField = payload;
    },
    [mutations.UPDATE_SORT_ORDER](state, payload) {
      state.sort.sortOrder = payload;
    },
    [mutations.UPDATE_PAGE](state, payload) {
      state.page = payload;
    },
  },
  actions: {
    setFilter({ commit }, payload) {
      commit(mutations.UPDATE_FILTER, payload);
    },
    setName({ commit }, payload) {
      commit(mutations.UPDATE_NAME, payload);
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
    setUserTasks({ commit }, payload) {
      commit(mutations.UPDATE_PAGE, 1);
      commit(mutations.UPDATE_SORT_ORDER, 'asc');
      commit(mutations.UPDATE_SORT_FIELD, 'name');
      commit(mutations.UPDATE_FILTER, payload);
    },
  },
};
