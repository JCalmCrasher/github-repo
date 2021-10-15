<template>
  <div class="pagination">
    <button disabled>Previous</button>
    <a href="next">Next</a>
  </div>
</template>

<script>
export default {
  name: "CardPaginate",
};
</script>

<style scoped>
div.pagination {
  @apply flex mx-auto my-5;
}

button,
a {
  @apply py-1 px-4;
}
button:disabled {
  @apply bg-transparent border-2 border-gray-700 cursor-default rounded-tl-lg rounded-bl-lg;
}

a {
  @apply border-l-0 bg-gray-600 rounded-tr-lg rounded-br-lg;
}
</style>