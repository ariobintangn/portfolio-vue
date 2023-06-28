<script>
import LinkSvg from '../assets/visit-link.svg'
export default {
    data() {
        return {
            linkSvg: LinkSvg,
        };
    }
}
</script>

<template>
    <div class="flex flex-col justify-center">
        <a href="https://irwanclaudia.com/" target="_blank">
            <img src="../assets/irwan-claudia2.png" alt="irwan-claudia image" class="h-[476px] w-full object-cover">
        </a>
        <div class="px-[24px] py-[56px] flex flex-col lg:flex-row lg:items-center">
            <div class="lg:w-1/2">
                <div class="flex flex-row">
                    <a href="https://irwanclaudia.com/" target="_blank"
                        class="text-off-white  text-opacity-50 mr-2 mb-[12px] hover:underline">IRWAN AND CLAUDIA </a>
                    <svg width="16px" height="16px" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg" stroke-width="3"
                        stroke="#FFFFFFcc" fill="none">
                        <path
                            d="M55.4,32V53.58a1.81,1.81,0,0,1-1.82,1.82H10.42A1.81,1.81,0,0,1,8.6,53.58V10.42A1.81,1.81,0,0,1,10.42,8.6H32" />
                        <polyline points="40.32 8.6 55.4 8.6 55.4 24.18" />
                        <line x1="19.32" y1="45.72" x2="54.61" y2="8.91" />
                    </svg>
                </div>
                <p class="text-off-white text-xl font-bold">A Custom made wedding invitation website with intricate
                    responsive design and animation</p>
            </div>
            
            <div class="mt-[80px] flex flex-wrap justify-center h-[300px]">
                <div class="w-1/2">
                    <h1 class="text-off-white  text-opacity-50 mr-2 mb-[12px]">CLIENT </h1>
                    <p class="text-off-white text-xl font-bold">Private</p>
                </div>
                <div class="0 w-1/2">
                    <h1 class="text-off-white  text-opacity-50 mr-2 mb-[12px]">ROLE </h1>
                    <p class="text-off-white text-xl font-bold">Front-end Engineer</p>
                </div>
                <div class=" w-1/2">
                    <h1 class="text-off-white  text-opacity-50 mr-2 mb-[12px]">INDUSTRY</h1>
                    <p class="text-off-white text-xl font-bold">Event Planning</p>
                </div>
                <div class="00 w-1/2">
                    <h1 class="text-off-white  text-opacity-50 mr-2 mb-[12px]">DURATION</h1>
                    <p class="text-off-white text-xl font-bold">2 Months</p>
                </div>
            </div>
        </div>
    </div>
</template>