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
        <img src="../assets/irwan-claudia.png" alt="irwan-claudia image" class="h-[476px] object-cover">
        <div class="px-[24px] py-[56px]">
            <div class="flex flex-row">
                    <a href="https://irwanclaudia.com/" target="_blank" class="text-off-white  text-opacity-50 mr-2 mb-[12px] hover:underline">Irwan and Claudia </a> 
                    <svg width="16px" height="16px" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg" stroke-width="3"
                        stroke="#FFFFFFcc" fill="none">
                        <path
                            d="M55.4,32V53.58a1.81,1.81,0,0,1-1.82,1.82H10.42A1.81,1.81,0,0,1,8.6,53.58V10.42A1.81,1.81,0,0,1,10.42,8.6H32" />
                        <polyline points="40.32 8.6 55.4 8.6 55.4 24.18" />
                        <line x1="19.32" y1="45.72" x2="54.61" y2="8.91" />
                    </svg>
            </div>
            <p class="text-off-white">A Custom made wedding invitation website where you can</p>
        </div>
    </div>
</template>