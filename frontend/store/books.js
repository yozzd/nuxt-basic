export const state = () => ({
  books: [],
});

export const mutations = {
  SET_BOOKS(state, data) {
    state.books = data;
  },
  SET_CREATE_BOOK(state, data) {
    state.books.push(data);
  },
  SET_UPDATE_BOOK(state, data) {
    const index = state.books.findIndex((v) => v.id === data.id);
    Object.assign(state.books[index], data);
  },
  SET_DELETE_BOOK(state, data) {
    data.map((v1) => {
      const index = state.books.findIndex((v2) => v2.id === v1.id);
      state.books.splice(index, 1);
      return true;
    });
  },
};

export const getters = {
  allBook: (state) => state.books,
};

export const actions = {
  async getAllBook(context) {
    const data = await this.$axios.$get('/api/books');
    context.commit('SET_BOOKS', data);
  },
  async createBook(context, payload) {
    const data = await this.$axios.$post('/api/books/create', payload);
    context.commit('SET_CREATE_BOOK', data);
  },
  async updateBook(context, payload) {
    const data = await this.$axios.$post('/api/books/update', payload);
    context.commit('SET_UPDATE_BOOK', data);
  },
  async deleteBook(context, payload) {
    const data = await this.$axios.$post('/api/books/delete', payload);
    context.commit('SET_DELETE_BOOK', data);
  },
};
