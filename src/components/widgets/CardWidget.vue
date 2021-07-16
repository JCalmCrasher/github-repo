<template>
  <div class="card" :class="isBigCard ? 'py-6' : 'py-1'">
    <div class="card--header">
      <slot name="cardHeader"></slot>
    </div>
    <div class="card--body">
      <slot name="cardBody"></slot>
    </div>
    <div class="card--footer" v-show="hasFooter">
      <slot name="cardFooter"></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: "CardWidget",
  props: {
    isBigCard: { type: Boolean, default: true },
    hasHeader: { type: Boolean, default: true },
    hasBody: { type: Boolean, default: true },
    hasFooter: { type: Boolean, default: false },
  },
};
</script>

<style>
.card {
  @apply w-full
        bg-gray-800
        cursor-pointer
        border-none
        rounded-md
        flex
        flex-col
        px-5;
}

.card--header {
  @apply flex text-xl space-x-3 mb-2;
}

.card--body {
  @apply flex flex-col space-y-2 overflow-auto;
}
</style>