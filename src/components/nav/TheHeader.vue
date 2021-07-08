<template>
  <header
    class="
      border-b
      md:flex
      md:items-center
      md:justify-between
      p-4
      pb-0
      shadow-lg
      md:pb-4
      dark:bg-gray-800
      text-white
      px-7
    "
  >
    <!-- Logo text or image -->
    <div class="flex items-center justify-between mb-4 md:mb-0">
      <h1 class="leading-none text-2xl text-grey-darkest cursor-pointer">
        <router-link to="/">Github</router-link>
      </h1>

      <a class="text-black hover:text-orange md:hidden" href="#">
        <i class="fa fa-2x fa-bars"></i>
      </a>
    </div>
    <!-- END Logo text or image -->

    <nav>
      <ul class="list-reset md:flex md:items-center">
        <li class="md:ml-4">
          <form class="mb-4 w-full md:mb-0">
            <label class="hidden" for="search-form">Search</label>
            <input
              class="
                border border-gray-700
                focus:outline-none
                focus:ring-2 focus:ring-green-500
                focus:border-transparent
                rounded-lg
                shadow-inner
                w-full
                py-1
                px-3
                bg-gray-900
              "
              placeholder="Search or jump to..."
              type="text"
            />
            <button class="hidden">Submit</button>
          </form>
        </li>
        <li class="md:ml-4">
          <router-link
            class="
              block
              no-underline
              py-2
              text-grey-darkest
              hover:text-gray-300
              md:border-none
              md:p-0
            "
            to=""
          >
            <button>
              <i class="fas fa-bell"></i>
            </button>
          </router-link>
        </li>
        <li class="md:ml-4">
          <router-link to="" class="flex items-center">
            <img
              src="https://bedramtamang.com.np/img/profile.jpg"
              alt="Avatar of Jonathan Reinink"
              class="w-8 h-8 rounded-full"
            />
          </router-link>
        </li>
      </ul>
    </nav>
  </header>
</template>

<script>
export default {
  name: "TheHeader",
};
</script>

<style>
</style>