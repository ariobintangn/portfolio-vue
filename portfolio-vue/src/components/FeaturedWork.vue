<script>
import websites from '../assets/websites';

export default {
  data() {
    return {
      images: [
        {
          image: './src/assets/pikkat.png',
          name: 'Pikkat',
          short_description: 'Company profile for Pikkat, a collaboration with Smartek'
        },
        {
          image: './src/assets/cmsindonesia.png',
          name: 'CoinMarketScore ID',
          short_description: 'A collaboration with Singaporean based company, Vallidge PTE.'
        },
        { image: './src/assets/irwan-claudia2.png', name: 'Irwan Claudia', short_description: '' },
        {
          image: './src/assets/company-clone.png',
          name: 'Company Clone',
          short_description: `Clone of a company's dashboard with graphs and charts`
        },
        { image: './src/assets/met-digital.png', name: 'MET Digital', short_description: '' }
      ],
      websites
    }
  },
  methods: {
    changePage(index) {
      this.$router.push(`/project/${index}`)
    },
    openGmail() {
      const email = 'ariobintangn@gmail.com';
      const subject = encodeURIComponent('Hello Ario!'); // You can set a default subject if needed
      const body = encodeURIComponent(`Woohoo! you're hired!`); // You can set a default body if needed
      const mailtoLink = `https://mail.google.com/mail/?view=cm&fs=1&to=${email}&su=${subject}&body=${body}`;
      window.open(mailtoLink, '_blank');
    }
  }
}
</script>

<template>
  <div class="px-[24px]">
    <div class="flex justify-start mb-[23px]">
      <img src="../assets/arrow-1.svg" class="mr-3" alt="arrow down" />
      <h1 class="text-off-white">MY PROJECTS</h1>
    </div>

    <!-- <div class="w-full flex flex-row justify-evenly">
      <div>
        <div
          class="w-full flex flex-col justify-center items-center text-off-white text-end"
          v-for="(image, index) in images"
          :key="index"
        >
          <div @click="changePage(index)" class="mb-[15px]">
            <h1
              class="pr-[48px] pt-[6px] mr-[px] ml-36 h-10 bg-gradient-to-l from-transparent to-[#323232B2] bg-opacity-40 text-lg"
            >
              {{ image.name }}
            </h1>

            <img
              :src="image.image"
              alt="project image"
              class="hover:scale-110 duration-500 h-[600px] w-[366px] object-cover p-[24px] rounded-[36px] opacity-80 hover:opacity-100"
            />
          </div>
        </div>
      </div>

      <div>
        <div class="h-[12rem]"></div>
        <div
          class="w-full flex flex-col justify-center items-center text-off-white text-end"
          v-for="(image, index) in images"
          :key="index"
        >
          <div @click="changePage(index)" class="mb-[15px]">
            <h1
              class="pr-[48px] pt-[6px] mr-[px] ml-36 h-10 bg-gradient-to-l from-transparent to-[#323232B2] bg-opacity-40 text-lg"
            >
              {{ image.name }}
            </h1>

            <img
              :src="image.image"
              alt="project image"
              class="hover:scale-110 duration-500 h-[600px] w-[366px] object-cover p-[24px] rounded-[36px] opacity-80 hover:opacity-100"
            />
          </div>
        </div>
      </div>
    </div> -->
    <div
      class="grid md:grid-cols-2 lg:grid-cols-3 text-5xl text-white items-center gap-6 gap-y-8 py-12"
    >
      <div
        v-for="(website, index) in websites"
        :key="index"
        @click="changePage(index)"
        class="border-2 border-off-white/60 rounded-xl p-2 min-h-[280px] hover:scale-105 duration-300"
      >
        <div class="flex flex-col gap-1 transition-all group duration-200">
          <h1 class="bg-gradient-to-l from-transparent to-[#323232B2] bg-opacity-40 text-lg font-medium">
            {{ website.name }}
          </h1>
          <p class="text-[12px] pt-1 pb-2">
          {{ website.year }}
          </p>

          <img :src="website.image" class="h-[200px] object-cover rounded-lg" />
          <p class="text-[12px] lg:text-[16px] text-justify p-3 bg-white/20 group-hover:bg-gradient-to-br group-hover:from-white/30 group-hover:from-20% hover:to-transparent duration-200">
            {{ website.short_description }}
          </p>
        </div>
      </div>
    </div>
  </div>
</template>
