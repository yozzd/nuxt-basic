export const state = () => ({});

export const mutations = {};

export const getters = {};

export const actions = {
  async createUser(context, payload) {
    await this.$axios.$post('/api/user', payload);
  },
};
