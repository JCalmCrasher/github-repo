<template>
  <div class="home sm:mt-4 space-y-10 max-w-7xl">
    <div>
      <div class="flex flex-col space-y-9">
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
        <div class="flex flex-col">
          <span class="my-4 text-gray-300">Repos </span>
          <div class="flex space-x-6 items-start">
            <card-widget class="bg-white grid grid-cols-2" v-for="card in [1, 2]" :key="card">
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
                  </div>
                </div>
              </template>
            </card-widget>
          </div>
        </div>
      </div>
      <card-widget class="max-w-lg">
        <template v-slot:cardHeader> Something </template>
        <template v-slot:cardBody>
          thingSomethingSomethingSomethingSomethingSomethingSomethingSomethingSomethingSomethingSomethingSomething
          thingSomethingSomethingSomethingSomethingSomethingSomethingSomethingSomethingSomethingSomethingSomething
          thingSomethingSomethingSomethingSomethingSomethingSomethingSomethingSomethingSomethingSomethingSomething
          thingSomethingSomethingSomethingSomethingSomethingSomethingSomethingSomethingSomethingSomethingSomethingthingSomethingSomethingSomethingSomethingSomethingSomethingSomethingSomethingSomethingSomethingSomething
          thingSomethingSomethingSomethingSomethingSomethingSomethingSomethingSomethingSomethingSomethingSomethingthingSomethingSomethingSomethingSomethingSomethingSomethingSomethingSomethingSomethingSomethingSomething
          thingSomethingSomethingSomethingSomethingSomethingSomethingSomethingSomethingSomethingSomethingSomethingthingSomethingSomethingSomethingSomethingSomethingSomethingSomethingSomethingSomethingSomethingSomething
          thingSomethingSomethingSomethingSomethingSomethingSomethingSomethingSomethingSomethingSomethingSomething
          thingSomethingSomethingSomethingSomethingSomethingSomethingSomethingSomethingSomethingSomethingSomething
          thingSomethingSomethingSomethingSomethingSomethingSomethingSomethingSomethingSomethingSomethingSomething
        </template>
      </card-widget>
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
.home div.card:hover {
  transition: 0.5s;
  background-color: rgba(41, 31, 45);
}

div.home > div:first-of-type {
  @apply flex sm:space-x-8 space-x-0 items-start sm:flex-row flex-col sm:space-y-0 space-y-2;
}

/* p  */
</style>