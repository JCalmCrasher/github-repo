<template>
  <div>
    <div
      class="search__wrapper"
      :class="isSearchFocus ? 'lg:w-1/2 w-full' : 'lg:w-1/3 w-11/12'"
    >
      <card>
        <template v-slot:cardHeader>
          <input
            class="
              border-gray-600
              focus:outline-none
              shadow-inner
              w-full
              py-1
              px-3
              bg-gray-800
              border-b border-solid
            "
            placeholder="Search a username..."
            type="text"
            @focus="searchFocus(true)"
            @blur="searchFocus(false)"
            v-model="username"
          />
          <button class="btn-search" @click="searchUsername">
            <i class="fas fa-search"></i>
          </button>
        </template>
        <template v-slot:cardBody>
          <div v-if="loading">
            <div class="flex justify-center mt-5">
              <hollow-dots-spinner
                :animation-duration="1000"
                :dot-size="15"
                :dots-num="3"
                color="#ff1d5e"
              />
            </div>
          </div>
          <div v-if="!error.message || error.hasError">{{ error.message }}</div>
        </template>
      </card>
    </div>
    <div>
      {{ search }}
    </div>
  </div>
</template>

<script>
import { HollowDotsSpinner } from "epic-spinners";
import { PROFILE } from "../queries/profile";

import card from "../components/widgets/card.vue";
import store from "../store";
import { mapState } from 'vuex';
export default {
  name: "UserSearch",
  components: { card, HollowDotsSpinner },
  data() {
    return {
      isSearchFocus: false,
      username: "",
      login: "",
      search: "",
      error: {
        message: "",
        hasError: false,
      },
    };
  },
  methods: {
    setError(msg) {
      this.error.hasError = true;
      this.error.message = msg;
    },
    searchFocus(val = true) {
      this.isSearchFocus = val;
    },
    searchUsername() {
      if (!this.username.length) {
        store.dispatch("setLoading", false);
        return this.setError("Username is required!");
      }

      store.dispatch("setLoading", true);

      this.$apollo
        .query({ query: PROFILE, variables: { login: this.username } })
        .then(({ data }) => {
          if (data) {
            this.search = data;
            store.dispatch("setUser", data);
            store.dispatch("setLoading", false);
          }
        })
        .catch((error) => {
          store.dispatch("setLoading", false);
          this.setError(error.message);
        });
    },
  },
  watch: {
    username(val) {
      if (val.length < 1) {
        return (this.error.hasError = true);
      }
      return (this.error.hasError = false);
    },
  },
  computed: {
    ...mapState({
      loading: (state) => state.loading,
      user: (state) => state.user,
    }),
  },
};
</script>

<style>
div.search__wrapper {
  transition: all 0.2s ease;
  @apply flex m-auto mt-7;
}

.btn-search {
  @apply py-0 px-2 bg-gray-700 rounded shadow focus:ring-2 ring-gray-500 hover:bg-gray-600 focus:bg-gray-800;
}
</style>