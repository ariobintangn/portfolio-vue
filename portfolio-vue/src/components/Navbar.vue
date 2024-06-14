<script>
export default {
  data() {
    return {
      showMenu: false
    }
  },
  methods: {
    toggleMenu() {
      this.showMenu = !this.showMenu
    }
  }
}
</script>
<template>
  <div
    class="h-[74px] from-[#323232B2] to-[#202020] bg-gradient-to-b backdrop-blur-sm md:px-6 px-4"
  >
  <div class="h-[74px] mx-auto container items-center flex flex-row justify-between">
  
    <router-link to="/">
      <div class="">
        <img src="../assets/icons/logo.png" alt="logo" class="h-[31px]" />
      </div>
    </router-link>
    <div class="md:flex flex-row text-white gap-4 pr-4 hidden">
      <a href="https://github.com/ariobintangn" target="blank"
        ><p class="hover:font-semibold duration-200 cursor-pointer">Github</p></a
      >
      <a href="https://www.linkedin.com/in/ario-bintang-nugraha-22a04b179/" target="blank"
        ><p class="hover:font-semibold duration-200 cursor-pointer">LinkedIn</p></a
      >
      <a href="https://www.youtube.com/@ariobintangnugraha1916" target="blank"
        ><p class="hover:font-semibold duration-200 cursor-pointer">Youtube</p></a
      >
    </div>
    <div class="md:hidden" @click="toggleMenu()" v-show="!showMenu">
      <img src="../assets/ham.svg" alt="ham svg" />
    </div>
    <transition name="slide">
      <div
        class="absolute right-0 top-0 flex flex-col bg-primary-gray-2/90 min-h-screen w-1/2 min-w-[200px] py-20"
        v-show="showMenu"
      >
        <h1
          class="m-[20px] bg-white w-[30px] h-[30px] text-center rounded-full font-bold absolute flex items-center justify-center -top-[12px] -right-[12px] cursor-pointer"
          @click="toggleMenu()"
        >
          x
        </h1>
        <div class="min-h-[200px] flex flex-col gap-2 text-center text-off-white text-2xl">
          <a href="https://github.com/ariobintangn" target="blank"
            ><p class="hover:font-semibold duration-200 cursor-pointer">Github</p></a
          >
          <a href="https://www.linkedin.com/in/ario-bintang-nugraha-22a04b179/" target="blank"
            ><p class="hover:font-semibold duration-200 cursor-pointer">LinkedIn</p></a
          >
          <a href="https://www.youtube.com/@ariobintangnugraha1916" target="blank"
            ><p class="hover:font-semibold duration-200 cursor-pointer">Youtube</p></a
          >
        </div>
      </div>
    </transition>
  </div>
</div>
</template>

<style>
.slide-enter-active,
.slide-leave-active {
  transition: transform 0.5s ease, opacity 0.5s ease;
}

.slide-enter-from,
.slide-leave-to {
  transform: translateX(100%);
  opacity: 0;
}

.slide-enter-to,
.slide-leave-from {
  transform: translateX(0);
  opacity: 1;
}
</style>
