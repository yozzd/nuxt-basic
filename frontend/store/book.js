export const state = () => ({
  books: [],
});

export const mutations = {
  SET_BOOKS(state, data) {
    state.books = data;
  },
  SET_CREATE_BOOKS(state, data) {
    state.books.push(data);
  },
};

export const getters = {
  allBook: (state) => state.books,
};

export const actions = {
  async getAllBook(context) {
    const data = await this.$axios.$get('/api/book');
    context.commit('SET_BOOKS', data);
  },
  async createBook(context, payload) {
    const data = await this.$axios.$post('/api/book', payload);
    context.commit('SET_CREATE_BOOKS', data);
  },
};
