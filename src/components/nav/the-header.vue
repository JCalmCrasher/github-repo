<template>
  <header>
    <!-- Logo text or image -->
    <div class="flex items-center mb-4 md:mb-0">
      <button
        class="
          border-2 border-solid
          py-1
          px-3
          rounded-md
          border-gray-800
          block
          lg:hidden
          md:hidden
        "
        v-if="userInfo"
        @click="toggleNavMenu"
      >
        <i class="fa fa-bars"></i>
      </button>
      <h1
        class="
          leading-none
          text-2xl text-grey-darkest
          cursor-pointer
          inline-flex
        "
      >
        <img src="../../assets/github.png" width="50" />
        
        <router-link to="/" class="my-auto">Github Search</router-link>
      </h1>
    </div>
    <!-- END Logo text or image -->

    <nav>
      <ul class="list-reset md:flex md:items-center" v-if="userInfo">
        <li class="md:ml-4">
          <form
            class="mb-4 w-full md:mb-0 text-center lg:block"
            :class="isNavMenuShown ? 'block' : 'hidden'"
          >
            <label class="hidden" for="search-form">Search</label>
            <input
              class="
                border border-gray-600
                focus:outline-none
                focus:ring-2 focus:ring-green-500
                focus:border-transparent
                rounded-lg
                shadow-inner
                py-1
                px-3
                bg-gray-800
              "
              placeholder="Search or jump to..."
              type="text"
            />
            <button class="hidden">Submit</button>
          </form>
        </li>
        <li
          class="md:ml-4 sm:mb-0 mb-2 lg:block"
          :class="isNavMenuShown ? 'block' : 'hidden'"
        >
          <router-link to="/">
            <img
              :src="avatarUrl"
              :alt="userInfo.user.login"
              class="w-8 h-8 rounded-full mx-auto"
            />
          </router-link>
        </li>
      </ul>
    </nav>
  </header>
</template>

<script>
import { mapState } from "vuex";
import store from "../../store";
export default {
  name: "TheHeader",
  methods: {
    toggleNavMenu() {
      store.dispatch("toggleNavMenu");
    },
  },
  computed: {
    ...mapState({
      isNavMenuShown: (state) => state.navMenuShown,
      userInfo: (state) => state.basicUserInfo,
      avatarUrl: (state) => state.avatarUrl,
    }),
  },
};
</script>

<style scoped>
header {
  background-color: rgba(27, 24, 39);
  @apply
      md:flex
      md:items-center
      md:justify-between
      p-4
      pb-0
      shadow-xl
      md:pb-4
      text-white
      px-7
      border-gray-800;
}
</style>