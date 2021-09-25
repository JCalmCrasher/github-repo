export const namespaced = true;

export const state = {
    topRepos: {},
};

export const actions = {
    async setPopularRepos({
        commit
    }, repos) {
        commit('SET_POPULAR_REPOS', repos);
    }
};

export const mutations = {
    SET_POPULAR_REPOS(state, repo) {
        state.topRepos = repo;
    },
};

export const getters = {};