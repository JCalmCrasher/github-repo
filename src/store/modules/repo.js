export const namespaced = true;

export const state = {
    topRepos: {},
    repos: {},
};

export const actions = {
    async setPopularRepos({
        commit
    }, repos) {
        commit('SET_POPULAR_REPOS', repos);
    },

    async setRepos({
        commit
    }, repos) {
        commit('SET_REPOS', repos);
    }
};

export const mutations = {
    SET_REPOS(state, repo) {
        state.repos = repo;
    },
    SET_POPULAR_REPOS(state, repo) {
        state.topRepos = repo;
    },
    
};

export const getters = {};