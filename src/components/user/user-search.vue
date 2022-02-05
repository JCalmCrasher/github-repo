<template>
  <div>
    {{ ttt }}
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
  </div>
</template>

<script>
import { HollowDotsSpinner } from "epic-spinners";

import card from "../widgets/card.vue";
// import { PROFILE } from "../queries/profile";
// import { POPULAR_REPO } from "../queries/popular-repo";
// import { REPOS } from "../queries/repos";
import gql from "graphql-tag";
const todoItemsQuery = gql`
  {
    todoItems @client {
      avatarUrl
      name
    }
  }
`;

export default {
  name: "UserSearch",
  components: { card, HollowDotsSpinner },
  data() {
    return {
      ttt: "",
      loading: false,
      isSearchFocus: false,
      username: "",
      login: "",
      error: {
        message: "",
        hasError: false,
      },
    };
  },
  methods: {
    searchFocus(val = true) {
      this.isSearchFocus = val;
    },
    searchUsername() {},
  },
  watch: {
    username(val) {
      if (val.length < 1) {
        return (this.error.hasError = true);
      }
      return (this.error.hasError = false);
    },
  },
  mounted() {
    this.$apollo
      .query({ query: todoItemsQuery })
      .then((res) => {
        this.ttt = res;
        console.log("res", res);
      })
      .catch((err) => console.log("err", err));
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