<template>
  <div class="paginate">
    <button disabled>Previous</button>
    <button>Next</button>
  </div>
</template>

<script>
export default {
  name: "CardPaginate",
};
</script>

<style scoped>
div.paginate {
    @apply flex mx-auto mt-3;
}

button{
    @apply py-1 px-4;
}

button:disabled{
    @apply bg-transparent border-2 border-gray-700 cursor-default rounded-tl-lg rounded-bl-lg;
}

button:not(:disabled){
    @apply border-l-0 bg-gray-600 rounded-tr-lg rounded-br-lg;
}
</style>