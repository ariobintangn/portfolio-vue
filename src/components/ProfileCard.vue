<script>
export default {
  methods: {
    openGmail() {
      const email = 'ariobintangn@gmail.com'
      const subject = encodeURIComponent('Hello Ario!')
      const body = encodeURIComponent(
        `Hi, we would like to inform you of a front-end developer position at our company!`
      ) // You can set a default body if needed
      const mailtoLink = `https://mail.google.com/mail/?view=cm&fs=1&to=${email}&su=${subject}&body=${body}`
      window.open(mailtoLink, '_blank')
    }
  }
}
</script>

<template>
  <div class="flex flex-col justify-center items-center py-8 gap-3 text-center">
    <img
      src="../assets/profilePic.jpeg"
      alt="profile picture"
      class="h-[240px] w-[240px] rounded-full"
    />
      <h1 class="text-off-white text-[36px] mb-4">Ario Bintang Nugraha</h1>
      <p class="text-gray-1 mb-8 md:max-w-[45%]">
        A front-end engineer with 2 years of working experience on several frameworks such as Vue 3, React JS, and Angular. I will help you execute pixel perfect design with emphasize on user experience.
      </p>
      <button
        class="w-[242px] h-[47px] flex items-center justify-center bg-button-gray rounded-md text-off-white text-sm self-center"
        @click="openGmail()"
      >
        <img src="../assets/email.svg" alt="email svg" class="mr-4" />ariobintangn@gmail.com
      </button>
  </div>
</template>
