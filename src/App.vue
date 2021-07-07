<template>
  <div>
    <the-header />
  </div>
</template>

<script>
import TheHeader from "./components/nav/TheHeader.vue";
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
</style>
