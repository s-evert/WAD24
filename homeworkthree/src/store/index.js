import { createStore } from 'vuex';

const store = createStore({
  state: {
    posts: [],
  },
  mutations: {
    incrementLikes(state, postId) {
      const post = state.posts.find((p) => p.postId === postId);
      if (post) {
        post.likes++;
      }
    },
    deletePosts(state) {
      state.posts = [];
    },
    resetLikes(state) {
      state.posts.forEach((post) => (post.likes = 0));
    },
    setPosts(state, posts) {
      state.posts = posts;
    }
  },
  actions: {
    incrementLikes({ commit }, postId) {
      commit("incrementLikes", postId);
    },
    resetLikes({ commit }) {
      commit("resetLikes");
    },
  },
  getters: {
    posts: (state) => state.posts,
  },
});

export default store;
