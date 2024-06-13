<script setup>
import { RouterLink, RouterView } from 'vue-router'
import Navbar from './components/Navbar.vue';
import Footer from './components/Footer.vue';
</script>

<template>
  <header class="sticky top-0 z-50">
    <Navbar />
  </header>
  <div class="h-[74px] w-full absolute top-0 from-[#323232B2] to-[#202020] bg-gradient-to-b"></div>
  <main class="bg-primary-gray-2 relative">
    <RouterView />
  </main>
  <footer>
    <Footer/>
  </footer>
</template>
