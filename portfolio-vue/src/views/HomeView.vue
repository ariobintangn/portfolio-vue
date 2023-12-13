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
  <div class="lg:px-24 lg:py-8">
    <ProfileCard />
    <FeaturedWork />
  </div>
</template>
