<template>
  <div class="home sm:mt-4 space-y-10 max-w-7xl">
    <div>
      <div class="flex flex-col">
        <h1 class="title">Profile</h1>
        <card class="bio">
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
        </card>
        <div class="flex flex-col mt-4">
          <h1 class="title">Popular Repos</h1>
          <div
            class="
              grid grid-cols-1
              space-y-2
              md:grid-cols-2
              md:gap-5
              md:space-y-0
            "
          >
            <card
              class="bg-white repo"
              v-for="(card, i) in [1, 2, 1, 2]"
              :key="i"
            >
              <template v-slot:cardHeader>
                <h1 class="font-bold">Github GraphQl</h1>
              </template>
              <template v-slot:cardBody>
                <div class="space-y-2">
                  <p class="text-gray-400">Desktop App</p>
                  <div class="flex sm:space-x-4 space-x-0 sm:flex-row flex-col">
                    <small><i class="fas fa-laptop"></i> Vue</small>
                    <small
                      ><i class="fas fa-clock"></i> Updated 21 hours ago</small
                    >
                    <small class="flex items-baseline"
                      ><i class="fa fa-star" aria-hidden="true"></i
                      ><span> 1</span></small
                    >
                  </div>
                </div>
              </template>
            </card>
          </div>
        </div>
      </div>
      <div class="w-full border-none rounded-md flex flex-col max-w-md">
        <div class="flex flex-col">
          <div class="flex">
            <h1 class="title">Open</h1>
          </div>
          <div class="space-y-2">
            <card
              v-for="(card, i) in [1, 2, 3, 4, 5, 6, 7, 8]"
              :key="i"
              :isBigCard="false"
              :hasHeader="false"
              :hasFooter="true"
            >
              <template v-slot:cardBody>
                <div class="flex space-x-2">
                  <h1 class="font-bold">Github GraphQl</h1>
                  <small
                    class="text-xs border border-gray-600 rounded-2xl px-2 py-1"
                    >Private</small
                  >
                </div>
                <div class="space-y-1 pb-2">
                  <p class="text-gray-400">Desktop App</p>
                  <div class="flex space-x-4">
                    <small
                      ><i class="fas fa-laptop text-green-600"></i> Vue</small
                    >
                    <small
                      ><i class="fas fa-clock"></i>
                      <span class="text-gray-300"
                        >Updated 21 hours ago</span
                      ></small
                    >
                    <small
                      ><i class="fa fa-star" aria-hidden="true"></i
                      ><span> 1</span></small
                    >
                  </div>
                </div>
              </template>
            </card>
          </div>
          <card-paginate />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import CardPaginate from "../components/widgets/card-paginate.vue";
import Card from "../components/widgets/card.vue";
export default {
  name: "Home",
  components: {
    Card,
    CardPaginate,
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

.bio {
  background-image: url("../assets/profile.svg");
  background-size: 300%;
  background-repeat: no-repeat;
  background-attachment: fixed;
  /* background-position: center; */
}

.repo {
  background-image: url("../assets/repo.svg");
  background-size: 560%;
  /* background-repeat: no-repeat; */
  /* background-attachment: fixed; */
  background-position: left;
}
/* p  */
</style>