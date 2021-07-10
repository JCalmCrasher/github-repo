<template>
  <div class="home sm:mt-4">
    <div
      class="
        flex
        sm:space-x-4
        space-x-0 space-y-4
        sm:space-y-0
        flex-col
        text-sm
        md:flex-col
        md:space-x-0 md:space-y-4
        lg:flex-row
        lg:space-y-0 lg:space-x-4
      "
    >
      <card-widget>
        <template v-slot:cardHeader>
          <h1 class="font-bold">JoshX</h1>
          <button
            class="h-7 px-3 text-indigo-100 bg-green-600 rounded-lg text-sm"
          >
            <span class="mr-2">JCalmCrasher</span>
          </button>
        </template>
        <template v-slot:cardBody>
          <p class="h-24 overflow-y-auto">
            {{ userBio }}
          </p>
          <div class="flex space-x-3">
            <div class="space-x-1">
              <router-link to=""
                ><span
                  ><i class="fa fa-users" aria-hidden="true"></i> 0
                  followers</span
                ></router-link
              >
              <router-link to=""><span>0 followers</span></router-link>
            </div>
            <router-link to=""><span><i class="fa fa-star" aria-hidden="true"></i> 0</span></router-link>
          </div>
        </template>
      </card-widget>
      <card-widget class="max-w-lg" />
    </div>
  </div>
</template>

<script>
import CardWidget from "../components/widgets/CardWidget.vue";
export default {
  name: "Home",
  components: { CardWidget },
  data() {
    return {
      userBio:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco",
    };
  },
};
</script>

<style scoped>
.home div.card:hover {
  transition: 0.5s;
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

/* p  */
</style>