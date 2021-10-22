<template>
  <div class="home sm:mt-4 space-y-10 max-w-7xl">
    <div>
      <div class="flex flex-col w-full">
        <h1 class="title">Profile</h1>
        <card class="bio">
          <template v-slot:cardHeader>
            <h1 class="font-bold">{{ basicInfo.user.name }}</h1>
            <button
              class="h-7 px-3 text-indigo-100 bg-green-600 rounded-lg text-sm"
            >
              <span class="mr-2">{{ basicInfo.user.login }}</span>
            </button>
          </template>
          <template v-slot:cardBody>
            <p class="overflow-y-auto">
              {{ basicInfo.user.bio }}
            </p>
            <p class="space-x-4">
              <i class="fa fa-map-marker" aria-hidden="true"></i>
              <span>{{ basicInfo.user.location }}</span>
            </p>
            <div class="flex space-x-3">
              <div class="space-x-1 text-sm">
                <router-link to=""
                  ><span
                    ><i class="fa fa-users" aria-hidden="true"></i>
                    {{ basicInfo.user.followers.totalCount }} followers</span
                  ></router-link
                >
                <router-link to=""
                  ><span
                    >{{ basicInfo.user.following.totalCount }} followers</span
                  ></router-link
                >
              </div>
              <router-link to=""
                ><span
                  ><i class="fa fa-star" aria-hidden="true"></i>
                  {{ basicInfo.user.starredRepositories.totalCount }}</span
                ></router-link
              >
            </div>
          </template>
        </card>
        <div class="flex flex-col mt-4">
          <h1 class="title">Popular Repos</h1>
          <hollow-dots-spinner
            :animation-duration="1000"
            :dot-size="15"
            :dots-num="3"
            color="#ff1d5e"
            v-if="topRepositories.length<1"
          />
          <div
            v-else
            class="
              grid grid-cols-1
              space-y-2
              lg:grid-cols-2
              md:gap-5 md:space-y-0
            "
          >
            <card
              class="bg-white repo"
              v-for="(topRepository, i) in topRepositories"
              :key="i"
            >
              <template v-slot:cardHeader>
                <h1 class="font-bold">
                  <a :href="topRepository.node.url"
                    > {{ topRepository.node.name }}
                  </a>
                </h1>
              </template>
              <template v-slot:cardBody>
                <div class="space-y-2">
                  <p
                    class="repo-info text-gray-400"
                    v-if="topRepository.node.shortDescriptionHTML"
                  >
                    {{ topRepository.node.shortDescriptionHTML }}
                  </p>
                  <p class="repo-info text-gray-400 italic" v-else>
                    No description, website, or topics provided.
                  </p>
                  <div class="flex sm:space-x-4 space-x-0 sm:flex-row flex-col">
                    <small
                      ><i
                        class="fas fa-circle"
                        :style="{
                          color: topRepository.node.primaryLanguage.color,
                        }"
                      ></i>
                      {{ topRepository.node.primaryLanguage.name }}</small
                    >
                    <small
                      ><i class="fas fa-clock"></i>
                      {{ formatCreatedAt(topRepository.node.createdAt) }}
                    </small>
                    <small class="flex items-baseline"
                      ><i class="fa fa-star" aria-hidden="true"></i>
                      <span> 1</span></small
                    >
                  </div>
                </div>
              </template>
            </card>
          </div>
        </div>
      </div>
      <div class="w-full border-none rounded-md flex flex-col">
        <div class="flex flex-col">
          <div class="flex">
            <h1 class="title">Open</h1>
          </div>
          <div class="space-y-2">
            <hollow-dots-spinner
              v-if="topRepositories.length<1"
              :animation-duration="1000"
              :dot-size="15"
              :dots-num="3"
              color="#ff1d5e"
            />
            <card
              :key="i"
              :isBigCard="false"
              :hasHeader="false"
              :hasFooter="true"
              v-else
              v-for="(repository, i) in repositories"
            >
              <template v-slot:cardBody>
                <div class="flex space-x-2">
                  <h1 class="font-bold">
                    <a :href="repository.node.url"
                      >{{ repository.node.name }}
                    </a>
                  </h1>
                  <small
                    class="text-xs border border-gray-600 rounded-2xl px-2 py-1"
                    >Private</small
                  >
                </div>
                <div class="space-y-1 pb-2">
                  <p
                    class="repo-info text-gray-400 h-12"
                    v-if="repository.node.shortDescriptionHTML"
                  >
                    {{ repository.node.shortDescriptionHTML }}
                  </p>
                  <p class="repo-info text-gray-400 italic" v-else>
                    No description, website, or topics provided.
                  </p>
                  <div class="flex space-x-4">
                    <small
                      ><i
                        class="fas fa-circle"
                        :style="{
                          color: repository.node.primaryLanguage.color,
                        }"
                      ></i>
                      {{ repository.node.primaryLanguage.name }}</small
                    >
                    <small
                      ><i class="fas fa-clock"></i>
                      <span class="text-gray-300"> {{
                        formatCreatedAt(repository.node.createdAt)
                      }}</span></small
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
import { format } from "date-fns";
import { HollowDotsSpinner } from "epic-spinners";
import CardPaginate from "../components/widgets/card-paginate.vue";
import Card from "../components/widgets/card.vue";

export default {
  name: "UserProfile",
  props: {
    basicInfo: { type: Object },
    topRepos: { type: Object },
    repos: { type: Object },
  },
  methods: {
    formatCreatedAt(createdAt) {
      return `${format(createdAt, "MMMM")} ${format(createdAt, "DD")}, ${format(
        createdAt,
        "YYYY"
      )}`;
    },
  },
  components: {
    Card,
    CardPaginate,
    HollowDotsSpinner,
  },
  computed: {
    repositories() {
      let repos = [];
      if (this.repos.user) {
        repos = this.repos.user.repositories.edges;
        return repos;
      }
      repos = [];
      return repos;
    },
    topRepositories() {
      let repos = [];
      if (this.topRepos.user) {
        repos = this.topRepos.user.topRepositories.edges;
        return repos;
      }
      repos = [];
      return repos;
    },
  },
};
</script>

<style scoped>
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
}

.repo {
  background-image: url("../assets/repo.svg");
  background-size: 560%;
  background-position: left;
}

.repo-info {
  @apply lg:text-base md:text-sm text-xs;
}
</style>