<template>
  <div class="card">
    <div class="card--header">
      <slot name="cardHeader"></slot>
    </div>
    <div class="card--body">
      <slot name="cardBody"></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: "CardWidget",
  props: {},
};
</script>

<style>
.card {
  @apply shadow-xl
        w-full
        bg-gray-800
        cursor-pointer
        border-none
        rounded-md
        flex
        flex-col
        py-6
        px-5
}

.card--header {
  @apply flex text-xl space-x-3 mb-2;
}

.card--body{
  @apply flex flex-col space-y-2 overflow-auto;
}
</style>