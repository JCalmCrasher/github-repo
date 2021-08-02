<template>
  <div
    class="search__wrapper"
    :class="isSearchFocus ? 'lg:w-1/2 w-full' : 'lg:w-1/3 w-11/12'"
  >
    <!-- {{ repository }} -->
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
          @focus="searchFocus(true)"
          @blur="searchFocus(false)"
          placeholder="Search a username..."
          type="text"
        />
      </template>
    </card>
  </div>
</template>

<script>
// import gql from "graphql-tag";
import { Sample } from '../queries/sample'

import card from "../components/widgets/card.vue";
export default {
  name: "SearchUser",
  components: { card },
  data() {
    return {
      isSearchFocus: false,
      hello: "",
    };
  },
  methods: {
    searchFocus(val = true) {
      this.isSearchFocus = val;
    },
  },
  apollo: {
    repository: Sample,
  },
};
</script>

<style>
div.search__wrapper {
  transition: all 0.2s ease;
  @apply flex m-auto mt-7;
}
</style>