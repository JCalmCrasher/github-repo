<template>
  <div id="app">
    <the-header />
    <main class="px-7 text-white">
      <router-view />
    </main>
  </div>
</template>

<script>
import TheHeader from "./components/nav/the-header.vue";
export default {
  name: "App",

  components: { TheHeader },

  data: () => ({
    //
  }),
};
</script>

<style>
@import url("https://fonts.googleapis.com/css2?family=Mulish:wght@200;300;600&display=swap");

* {
  font-family: "Mulish", sans-serif;
}

#app{
  @apply py-1;
}

body {
  @apply dark:bg-gray-900;
}
</style>