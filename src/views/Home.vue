<template>
  <div class="home sm:mt-4 space-y-10 max-w-7xl">
    <div>
      <div class="flex flex-col">
        <h1 class="title">Profile</h1>
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
            <p class="space-x-4">
              <i class="fa fa-map-marker" aria-hidden="true"></i>
              <span>Nigeria</span>
            </p>
            <div class="flex space-x-3">
              <div class="space-x-1 text-sm">
                <router-link to=""
                  ><span
                    ><i class="fa fa-users" aria-hidden="true"></i> 0
                    followers</span
                  ></router-link
                >
                <router-link to=""><span>0 followers</span></router-link>
              </div>
              <router-link to=""
                ><span
                  ><i class="fa fa-star" aria-hidden="true"></i> 0</span
                ></router-link
              >
            </div>
          </template>
        </card-widget>
        <div class="flex flex-col mt-4">
          <h1 class="title">Popular Repos</h1>
          <div
            class="
              grid
              sm:grid-cols-2
              sm:gap-5
              sm:space-y-0
              grid-cols-1
              space-y-2
            "
          >
            <card-widget
              class="bg-white"
              v-for="card in [1, 2, 1, 2]"
              :key="card"
            >
              <template v-slot:cardHeader>
                <h1 class="font-bold">Github GraphQl</h1>
              </template>
              <template v-slot:cardBody>
                <div class="space-y-2">
                  <p class="text-gray-400">Desktop App</p>
                  <div class="flex space-x-4">
                    <small><i class="fas fa-laptop"></i> Vue</small>
                    <small
                      ><i class="fas fa-clock"></i> Updated 21 hours ago</small
                    >
                    <small
                      ><i class="fa fa-star" aria-hidden="true"></i
                      ><span> 1</span></small
                    >
                  </div>
                </div>
              </template>
            </card-widget>
          </div>
        </div>
      </div>
      <div
        class="
          w-full
          cursor-pointer
          border-none
          rounded-md
          flex flex-col
          max-w-lg
        "
      >
        <div class="flex flex-col">
          <div class="flex">
            <h1 class="title">Open</h1>
          </div>
          <div class="space-y-2 h-full overflow-auto" style="max-height: 30rem">
            <card-widget
              v-for="i in [1, 2, 3, 4, 5, 6]"
              :key="i"
              :isBigCard="false"
              :hasHeader="false"
              :hasFooter="true"
            >
              <template v-slot:cardBody>
                <h1 class="font-bold">Github GraphQl</h1>
                <div class="space-y-1 pb-2">
                  <p class="text-gray-400">Desktop App</p>
                  <div class="flex space-x-4">
                    <small><i class="fas fa-laptop"></i> Vue</small>
                    <small
                      ><i class="fas fa-clock"></i> Updated 21 hours ago</small
                    >
                    <small
                      ><i class="fa fa-star" aria-hidden="true"></i
                      ><span> 1</span></small
                    >
                  </div>
                </div>
              </template>
              <template v-slot:>
              </template>
            </card-widget>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import CardWidget from "../components/widgets/CardWidget.vue";
export default {
  name: "Home",
  components: {
    CardWidget,
  },
  data() {
    return {
      userBio:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco",
    };
  },
};
</script>

<style scoped>
/* .home div.card:hover {
  transition: 0.5s;true
  background-color: rgba(41, 31, 45);
} */

div.home > div:first-of-type {
  @apply flex sm:space-x-8 space-x-0 items-start sm:flex-row flex-col sm:space-y-0 space-y-2;
}

h1.title {
  @apply text-lg py-2 text-gray-300;
}
/* p  */
</style>