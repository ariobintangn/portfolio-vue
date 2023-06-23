<script>
import Navbar from '../components/Navbar.vue';
import ProfileCard from '../components/ProfileCard.vue'
export default {
  components: {
    Navbar,
    ProfileCard
  }
}
</script>

<template>
  <header class="sticky top-0 z-50">
    <Navbar  />
  </header>
  <div class="h-[74px] w-full absolute top-0 bg-primary-gray-2"></div>
  <main class="bg-primary-gray-2 relative">
    <ProfileCard />
  </main>
</template>
