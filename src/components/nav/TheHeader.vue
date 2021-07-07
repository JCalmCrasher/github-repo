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
    "
  >
    <!-- Logo text or image -->
    <div class="flex items-center justify-between mb-4 md:mb-0">
      <h1 class="leading-none text-2xl text-grey-darkest cursor-pointer">
          <router-link to='/'>Github</router-link>
      </h1>

      <a class="text-black hover:text-orange md:hidden" href="#">
        <i class="fa fa-2x fa-bars"></i>
      </a>
    </div>
    <!-- END Logo text or image -->

    <!-- Search field -->
    <form class="mb-4 w-full md:mb-0 md:w-1/4">
      <label class="hidden" for="search-form">Search</label>
      <input
        class="
          bg-grey-lightest
          border-2
          focus:border-orange
          p-2
          rounded-lg
          shadow-inner
          w-full
        "
        placeholder="Search"
        type="text"
      />
      <button class="hidden">Submit</button>
    </form>
    <!-- END Search field -->

    <!-- Global navigation -->
    <nav>
      <ul class="list-reset md:flex md:items-center">
        <li class="md:ml-4">
          <a
            class="
              block
              no-underline
              hover:underline
              py-2
              text-grey-darkest
              hover:text-black
              md:border-none
              md:p-0
            "
            href="#"
          >
            Products
          </a>
        </li>
        <li class="md:ml-4">
          <a
            class="
              border-t
              block
              no-underline
              hover:underline
              py-2
              text-grey-darkest
              hover:text-black
              md:border-none
              md:p-0
            "
            href="#"
          >
            About
          </a>
        </li>
        <li class="md:ml-4">
          <a
            class="
              border-t
              block
              no-underline
              hover:underline
              py-2
              text-grey-darkest
              hover:text-black
              md:border-none
              md:p-0
            "
            href="#"
          >
            Contact
          </a>
        </li>
      </ul>
    </nav>
    <!-- END Global navigation -->
  </header>
</template>

<script>
export default {
  name: "TheHeader",
};
</script>

<style>
</style>