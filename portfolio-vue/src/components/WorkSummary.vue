<script>
export default {
    data() {
        return {
            website: [
                {
                    name: 'IRWAN AND CLAUDIA',
                    url: 'https://irwanclaudia.com/',
                    description: 'A Custom made wedding invitation website with intricate responsive design and animation',
                    image: "../src/assets/irwan-claudia2.png",
                    client: 'Private',
                    role: 'Front-end Engineer',
                    industry: 'Event Planning',
                    duration: '2 Months',
                    techUsed: ["../src/assets/vue.png", "../src/assets/tailwind.png", "../src/assets/pinia.png", '../src/assets/github.png'],
                },
                {
                    name: 'MET Museum',
                    url: 'https://ario-met-digital-2.web.app/',
                    description: 'My personal final project during studying at Hacktiv8. Awarded as the top 3 best personal project.',
                    image: "../src/assets/met-digital.png",
                    client: 'Hacktiv8',
                    role: 'Fullstack Engineer',
                    industry: 'Art and e-commerce',
                    duration: '2 Days',
                    techUsed: [" ../src/assets/node js.png"," ../src/assets/javascript.png"," ../src/assets/vue.png", "../src/assets/tailwind.png", "../src/assets/pinia.png", "../src/assets/midtrans.jpg", '../src/assets/github.png'],
                },
            ],
        };
    },
    computed: {
        id() {
            return this.$route.params.id;
        },
    },
    methods: {
        getFileName(tech) {
            const fileName = tech.split('/').pop(); // Extract the file name from the path
            const imageName = fileName.split('.')[0]; // Remove the file extension
            const desiredString = imageName.charAt(0).toUpperCase() + imageName.slice(1).toLowerCase()

            return desiredString
        }
    }
}
</script>

<template>
    <div class="flex flex-col justify-center">
        <a :href="website[id].url" target="_blank">
            <img :src="website[id].image" alt="image" class="h-[476px] lg:h-full w-full object-cover">
        </a>
        <div class="px-[24px] py-[56px] flex flex-col lg:flex-row lg:items-center">

            <div class="flex flex-col">

                <div class="lg:w-1/2">
                    <div class="flex flex-row">
                        <a :href="website[id].url" target="_blank"
                        class="text-off-white  text-opacity-50 mr-2 mb-[12px] hover:underline">{{ website[id].name }} </a>
                        <svg width="16px" height="16px" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg" stroke-width="3"
                        stroke="#FFFFFFcc" fill="none">
                        <path
                            d="M55.4,32V53.58a1.81,1.81,0,0,1-1.82,1.82H10.42A1.81,1.81,0,0,1,8.6,53.58V10.42A1.81,1.81,0,0,1,10.42,8.6H32" />
                            <polyline points="40.32 8.6 55.4 8.6 55.4 24.18" />
                            <line x1="19.32" y1="45.72" x2="54.61" y2="8.91" />
                        </svg>
                    </div>
                    <p class="text-off-white text-xl font-bold">{{ website[id].description }}</p>
                </div>
                
                <div class="mt-[40px]">
                    <h1 class="text-off-white  text-opacity-50 mr-2 mb-[12px]">TECH USED</h1>
                    <div class="flex flex-row flex-wrap">
                        <div class="text-white mr-2 text-center object-cover" v-for="tech in website[id].techUsed" :key="tech">
                            <img :src="tech" alt="tech image" class="h-[54px] rounded-full">
                            <h1>{{ getFileName(tech) }}</h1>
                        </div>
                    </div>
                </div>

            </div>
                
            <div class="mt-[40px] flex flex-wrap justify-center h-[300px]">
                
                <div class="w-1/2">
                    <h1 class="text-off-white  text-opacity-50 mr-2 mb-[12px]">CLIENT </h1>
                    <p class="text-off-white text-xl font-bold">{{ website[id].client }}</p>
                </div>
                <div class="0 w-1/2">
                    <h1 class="text-off-white  text-opacity-50 mr-2 mb-[12px]">ROLE </h1>
                    <p class="text-off-white text-xl font-bold">{{ website[id].role }}</p>
                </div>
                <div class=" w-1/2">
                    <h1 class="text-off-white  text-opacity-50 mr-2 mb-[12px]">INDUSTRY</h1>
                    <p class="text-off-white text-xl font-bold">{{ website[id].industry }}</p>
                </div>
                <div class=" w-1/2">
                    <h1 class="text-off-white  text-opacity-50 mr-2 mb-[12px]">DURATION</h1>
                    <p class="text-off-white text-xl font-bold">{{ website[id].duration }}</p>
                </div>
            </div>
            


        </div>
    </div>
</template>