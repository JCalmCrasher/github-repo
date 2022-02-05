<template>
  <user-profile
    v-if="basicInfo"
    :basicInfo="basicInfo"
    :topRepos="topRepos"
    :repos="repos"
  />
</template>

<script>
import UserProfile from "../components/user/user-profile.vue";

export default {
  components: { UserProfile },
  name: "Home",
  data() {
    return {
      basicInfo: null,
      topRepos: null,
      repos: null,
    };
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