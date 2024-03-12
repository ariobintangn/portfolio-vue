<script>
export default {
    data() {
        return {
            website: [
                {
                    name: 'Coin Market Score',
                    url: 'https://cmsindonesia.com/',
                    description: 'Partnership project with Coin Market Score, a Singaporean based crypto AI company. This is my primary work with Beever Indonesia, where I am responsible for developing the landing page, CMS, as well as the news and educational website for the product.',
                    image: "../src/assets/cms.png",
                    client: 'vallidge Consulting pte. ltd',
                    role: 'Front-end Engineer',
                    industry: 'Cryptocurrency',
                    duration: 'Ongoing',
                    techUsed: [" ../src/assets/node js.png", " ../src/assets/javascript.png", "../src/assets/vue.png", "../src/assets/tailwind.png", "../src/assets/pinia.png", '../src/assets/github.png'],
                },
                {
                    name: 'IRWAN AND CLAUDIA',
                    url: 'https://irwanclaudia.com/',
                    description: 'A Custom made wedding invitation website with intricate responsive design and animation. NOTE: Domain provided by client no longer available',
                    image: "../src/assets/irwan-claudia2.png",
                    client: 'Private',
                    role: 'Front-end Engineer',
                    industry: 'Event Planning',
                    duration: '1 Months',
                    techUsed: [" ../src/assets/node js.png", " ../src/assets/javascript.png", "../src/assets/vue.png", "../src/assets/tailwind.png", "../src/assets/pinia.png", '../src/assets/github.png'],
                },
                {
                    name: 'Company Clone',
                    url: 'https://company-clone.web.app/register',
                    description: 'A clone of a company to hone my skills in frontend engineering. I used ChartJs to represent data and build visually interesting charts.',
                    image: "../src/assets/company-clone.png",
                    client: 'Finance Company',
                    role: 'Frontend Engineer',
                    industry: 'HR and IT services',
                    duration: '1 Week',
                    techUsed: [" ../src/assets/node js.png", " ../src/assets/javascript.png", " ../src/assets/vue.png", "../src/assets/tailwind.png", "../src/assets/pinia.png", '../src/assets/chartjs.png', '../src/assets/github.png'],
                },
                {
                    name: 'MET Museum',
                    url: 'https://ario-met-digital-2.web.app/',
                    description: 'My personal final project during studying at Hacktiv8. Awarded as the top 3 best personal project. NOTE: DUE TO HEROKU NO LONGER FREE, SOME FEATURES WILL NOT WORK PROPERLY',
                    image: "../src/assets/met-digital.png",
                    client: 'Hacktiv8',
                    role: 'Fullstack Engineer',
                    industry: 'Art and e-commerce',
                    duration: '2 Days',
                    techUsed: [" ../src/assets/node js.png", " ../src/assets/javascript.png", " ../src/assets/vue.png", "../src/assets/tailwind.png", "../src/assets/pinia.png", "../src/assets/midtrans.jpg", '../src/assets/github.png'],
                },
                {
                    name: 'Vintager Store',
                    url: 'https://vintager-store-client.firebaseapp.com/',
                    description: 'My personal project during studying at Hacktiv8. This is a fullstack application which utilizes React and PostgreSQL for its database. NOTE: DUE TO HEROKU NO LONGER FREE, SOME FEATURES WILL NOT WORK PROPERLY',
                    image: "../src/assets/vintager-store.png",
                    client: 'Hacktiv8',
                    role: 'Fullstack Engineer',
                    industry: 'Music and e-commerce',
                    duration: '1 Week',
                    techUsed: [" ../src/assets/node js.png", " ../src/assets/javascript.png", " ../src/assets/vue.png", "../src/assets/tailwind.png", "../src/assets/pinia.png", "../src/assets/midtrans.jpg", '../src/assets/github.png'],
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
    <div class="flex flex-col lg:flex-row justify-center " v-if="this.$route.params.id">
        <a :href="website[id].url" target="_blank" class="">
            <img :src="website[id].image" alt="image"
                class="h-[476px] lg:h-full lg:max-w-[700px] w-full object-cover opacity-80">
        </a>
        <div
            class="px-[24px] py-[56px] lg:px-[12px] flex flex-col lg:flex lg:items-center lg:justify-center">

            <div class="flex flex-col lg:border-b lg:pb-20 lg:border-[#dadada] lg:items-center">

                <div class="lg:px-[32px] py-[24px]">
                    <div class="flex flex-row">
                        <a :href="website[id].url" target="_blank"
                            class="text-off-white  text-opacity-50 mr-2 mb-[24px] hover:underline text-2xl font-bold">{{
            website[id].name }} </a>
                        <svg width="16px" height="16px" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg"
                            stroke-width="3" stroke="#FFFFFFcc" fill="none">
                            <path
                                d="M55.4,32V53.58a1.81,1.81,0,0,1-1.82,1.82H10.42A1.81,1.81,0,0,1,8.6,53.58V10.42A1.81,1.81,0,0,1,10.42,8.6H32" />
                            <polyline points="40.32 8.6 55.4 8.6 55.4 24.18" />
                            <line x1="19.32" y1="45.72" x2="54.61" y2="8.91" />
                        </svg>
                    </div>
                    <p class="text-off-white text-xl font-bold py-[20px]">{{ website[id].description }}</p>
                </div>

                <div class="mt-[40px]">
                    <h1 class="text-off-white  text-opacity-50 mr-2 mb-[12px]">TECH USED</h1>
                    <div class="flex flex-row flex-wrap">
                        <div class="text-white mr-2 text-center object-cover" v-for="tech in website[id].techUsed"
                            :key="tech">
                            <img :src="tech" alt="tech image" class="h-[54px] rounded-full">
                            <h1>{{ getFileName(tech) }}</h1>
                        </div>
                    </div>
                </div>

            </div>

            <div
                class="mt-[40px] py-[40px] grid grid-cols-2 px-4 justify-center h-[300px] lg:h-full lg:bg-gradient-to-b lg:from-transparent lg:to-[#323232B2]  lg:bg-opacity-20 gap-24">
                <div>

                    <div class="py-4">
                        <h1 class="text-off-white  text-opacity-50 mr-2 mb-[12px]">CLIENT </h1>
                        <p class="text-off-white lg:text-xl font-bold">{{ website[id].client }}</p>
                    </div>
                    <div class="py-4">
                        <h1 class="text-off-white  text-opacity-50 mr-2 mb-[12px]">ROLE </h1>
                        <p class="text-off-white lg:text-xl font-bold">{{ website[id].role }}</p>
                    </div>
                </div>
                <div>

                    <div class="py-4">
                        <h1 class="text-off-white  text-opacity-50 mr-2 mb-[12px]">INDUSTRY</h1>
                        <p class="text-off-white lg:text-xl font-bold">{{ website[id].industry }}</p>
                    </div>
                    <div class="py-4">
                        <h1 class="text-off-white  text-opacity-50 mr-2 mb-[12px]">DURATION</h1>
                        <p class="text-off-white lg:text-xl font-bold">{{ website[id].duration }}</p>
                    </div>
                </div>
            </div>



        </div>
    </div>
</template>