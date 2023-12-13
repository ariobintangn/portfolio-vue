<script>
export default {
    data() {
        return {
            images: [{ image: './src/assets/irwan-claudia2.png', name: 'Irwan Claudia' }, { image: './src/assets/company-clone.png', name: 'Company Clone' }, { image: './src/assets/met-digital.png', name: 'MET Digital' },{ image: './src/assets/vintager-store.png', name: 'Vintager Store' }]
        }
    },
    methods: {
        changePage(index) {
            this.$router.push(`/project/${index}`)
        }
    }
}
</script>

<template>
    <div class="px-[24px] lg:px-24">
        <div class="flex justify-start mb-[23px]">
            <img src="../assets/Arrow 1.svg" class="mr-3" alt="arrow down">
            <h1 class="text-off-white">MY PROJECTS</h1>
        </div>
        <div class="lg:grid lg:grid-cols-2">
            <div class="w-full flex flex-col justify-center items-center text-off-white text-end"
                v-for="(image, index) in images" :key="index">
                <div @click="changePage(index)" class="mb-[15px]">
                    <h1
                        class="pr-[48px] pt-[6px] mr-[px] ml-36 h-10 bg-gradient-to-l from-transparent to-[#323232B2] bg-opacity-40 text-lg">
                        {{ image.name }}</h1>

                    <img :src="image.image" alt="project image"
                        class="hover:scale-110 duration-500 h-[600px] w-[366px] object-cover p-[24px] rounded-[36px] lg:rounded-none opacity-80 hover:opacity-100 lg:w-[612px] lg:h-[888px]">
                </div>
            </div>
        </div>

    </div>
</template>
