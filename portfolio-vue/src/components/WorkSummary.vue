<script>
import websites from "../assets/websites";
export default {
  data() {
    return {
      websites,
    };
  },
  computed: {
    id() {
      return this.$route.params.id;
    },
  },
  methods: {
    getFileName(tech) {
      const fileName = tech.split("/").pop(); // Extract the file name from the path
      const imageName = fileName.split(".")[0]; // Remove the file extension
      const desiredString =
        imageName.charAt(0).toUpperCase() + imageName.slice(1).toLowerCase();

      return desiredString;
    },
    removeAfterHyphen(str) {
      const hyphenIndex = str.indexOf("-");
      if (hyphenIndex === -1) {
        // If there is no hyphen in the string, return the original string
        return str;
      }
      // Return the substring before the hyphen
      return str.substring(0, hyphenIndex);
    },
  },
};
</script>

<template>
  <div
    class="flex flex-col lg:grid lg:grid-flow-col lg:grid-cols-12 justify-center lg:h-screen"
  >
    <a :href="websites[id].url" target="_blank" class="lg:col-span-5">
      <img
        :src="websites[id].image2"
        alt="image"
        class="h-[476px] lg:h-screen w-full object-cover"
      />
    </a>
    <div
      class="px-[24px] py-[56px] lg:px-20 flex flex-col lg:col-span-7 lg:flex lg:items-center lg:justify-center"
    >
      <div class="flex flex-col lg:border-b lg:pb-12 lg:border-[#dadada] lg:items-center">
        <div class="">
          <div class="flex flex-row">
            <a
              :href="websites[id].url"
              target="_blank"
              class="text-off-white text-opacity-50 mr-2 mb-[24px] hover:underline text-2xl font-bold"
              >{{ websites[id].name }}
            </a>
            <svg
              width="16px"
              height="16px"
              viewBox="0 0 64 64"
              xmlns="http://www.w3.org/2000/svg"
              stroke-width="3"
              stroke="#FFFFFFcc"
              fill="none"
            >
              <path
                d="M55.4,32V53.58a1.81,1.81,0,0,1-1.82,1.82H10.42A1.81,1.81,0,0,1,8.6,53.58V10.42A1.81,1.81,0,0,1,10.42,8.6H32"
              />
              <polyline points="40.32 8.6 55.4 8.6 55.4 24.18" />
              <line x1="19.32" y1="45.72" x2="54.61" y2="8.91" />
            </svg>
          </div>
          <p class="text-off-white text-xl font-bold">{{ websites[id].description }}</p>
        </div>

        <div class="mt-[40px]">
          <h1 class="text-off-white text-opacity-50 mr-2 mb-[12px]">TECH USED</h1>
          <div class="flex flex-row flex-wrap">
            <div
              class="text-white mr-2 text-center object-cover"
              v-for="(tech, index) in websites[id].techUsed"
              :key="tech"
            >
              <img :src="tech" alt="tech image" class="h-[54px] rounded-full" />
              <h1>{{ websites[id].techUsedName[index] }}</h1>
            </div>
          </div>
        </div>
      </div>

      <div
        class="mt-[40px] flex flex-wrap lg:pl-12 justify-center lg:bg-gradient-to-b lg:from-transparent lg:to-[#323232B2] lg:bg-opacity-20"
      >
        <div class="w-1/2">
          <h1 class="text-off-white text-opacity-50 mr-2 mb-[12px]">CLIENT</h1>
          <p class="text-off-white text-xl font-bold">{{ websites[id].client }}</p>
        </div>
        <div class="0 w-1/2">
          <h1 class="text-off-white text-opacity-50 mr-2 mb-[12px]">ROLE</h1>
          <p class="text-off-white text-xl font-bold">{{ websites[id].role }}</p>
        </div>
        <div class="w-1/2">
          <h1 class="text-off-white text-opacity-50 mr-2 mb-[12px]">INDUSTRY</h1>
          <p class="text-off-white text-xl font-bold">{{ websites[id].industry }}</p>
        </div>
        <div class="w-1/2">
          <h1 class="text-off-white text-opacity-50 mr-2 mb-[12px]">DURATION</h1>
          <p class="text-off-white text-xl font-bold">{{ websites[id].duration }}</p>
        </div>
      </div>
    </div>
  </div>
</template>
