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
  /* padding: 2rem !important; */
  @apply shadow-xl
        w-full
        h-48
        bg-gray-800
        cursor-pointer
        border-none
        rounded-md
        flex-col
        p-8
}

.card--header {
  @apply flex text-xl space-x-3 mb-2;
}

.card--body{
  @apply flex flex-col space-y-2 sm:max-w-xl;
}
</style>