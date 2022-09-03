export const state = () => ({});

export const mutations = {};

export const getters = {};

export const actions = {
  async createUser(context, payload) {
    const res = await this.$axios.$post('/api/user', payload);
    console.log(res);
  },
};
