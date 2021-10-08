<template>
  <user-profile v-if="basicInfo" :basicInfo="basicInfo" :topRepos="topRepos" :repos="repos" />
</template>

<script>
import { mapState } from "vuex";
import UserProfile from "../user/user-profile.vue";

export default {
  components: { UserProfile },
  name: "Home",
  computed: {
    ...mapState({
      basicInfo: (state) => state.basicUserInfo,
      topRepos: (state) => state.repo.topRepos,
      repos: (state) => state.repo.repos,
    }),
  },
  mounted() {
    if (!this.basicInfo) {
      return this.$router.push("/");
    }
  },
};
</script>

<style>
</style>