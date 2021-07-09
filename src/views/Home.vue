<template>
  <div class="home mt-4">
    <div class="card">card</div>
  </div>
</template>

<script>
export default {
  name: "Home",
  components: {},
};
</script>

<style scoped>
.home div.card:hover {
  transition: .3s;
  background-color: rgba(41, 31, 45);
}

.card {
  @apply shadow-md
        w-full
        h-48
        bg-gray-800
        p-4
        cursor-pointer
        border border-gray-700;
}
</style>