<template>
  <div>
    <div v-if="!basicInfo">
      <user-search />
    </div>
    <div v-else>
      <user-profile :basicInfo="basicInfo" :topRepos="topRepos" :repos="repos" />
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";
import UserProfile from "../user/user-profile.vue";
import UserSearch from "../user/user-search.vue";
export default {
  components: { UserSearch, UserProfile },
  name: "Home",
  computed: {
    ...mapState({
      basicInfo: (state) => state.basicUserInfo,
      topRepos: (state) => state.repo.topRepos,
      repos: (state) => state.repo.repos,
    }),
  },
};
</script>

<style>
</style>