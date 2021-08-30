<template>
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
        <button class="py-0 px-2 bg-gray-900 rounded">
          <i class="fas fa-search"></i>
        </button>
      </template>
    </card>
  </div>
</template>

<script>
// import gql from "graphql-tag";
import { Sample } from "../queries/sample";

import card from "../components/widgets/card.vue";
export default {
  name: "SearchUser",
  components: { card },
  data() {
    return {
      isSearchFocus: false,
      hello: "",
      username: "",
    };
  },
  methods: {
    searchFocus(val = true) {
      this.isSearchFocus = val;
    },
    searchUsername() {
      console.log("logged");
    },
  },
  apollo: {
    repository: Sample,
  },
  watch: {
    username(val) {
      console.log(val);
    },
  },
};
</script>

<style>
div.search__wrapper {
  transition: all 0.2s ease;
  @apply flex m-auto mt-7;
}
</style>