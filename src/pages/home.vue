<template>
  <div>
    <div v-if="!user">
      <user-search />
    </div>
    <div v-else>
      <user-profile :user="user" />
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";
import UserProfile from '../user/user-profile.vue';
import UserSearch from "../user/user-search.vue";
export default {
  components: { UserSearch, UserProfile },
  name: "Home",
  computed: {
    ...mapState({
      user: (state) => state.user,
    }),
  },
};
</script>

<style>
</style>