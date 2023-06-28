<script>
export default {
    data(){
        return {
                images: ['./src/assets/irwan-claudia2.png', './src/assets/met-digital.png']
        }
    },
    methods: {
        changePage(index){
            this.$router.push(`/work-view/${index}`)
        }
    }
}
</script>

<template>
    <div class="px-[24px]">
        <div class="flex justify-start mb-[23px]">
            <img src="../assets/Arrow 1.svg" class="mr-3" alt="arrow down">
            <h1 class="text-off-white">FEATURED WORK</h1>
        </div>

        <div class="w-full flex flex-col justify-center items-center" v-for="(image, index) in images" :key="index">
            <!-- <router-link :to="{ name: 'work-view', params: { index: index } }"> -->
                <div @click="changePage(index)"> <img :src="image" alt="project image" class="hover:scale-125 duration-500 h-[600px] w-[366px] object-cover p-[24px] rounded-[36px]"></div>
            <!-- </router-link> -->
        </div>

    </div>
</template>
