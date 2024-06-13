<script>
import ProfileCard from '../components/ProfileCard.vue'
import FeaturedWork from '../components/FeaturedWork.vue';

export default {
  components: {
    ProfileCard,
    FeaturedWork,
  }
}
</script>

<template>
  <div class="container mx-auto">
    <ProfileCard />
    <FeaturedWork />
  </div>
</template>
