<script>
export default {
    methods: {
        date(){
            const fullDate = new Date()
            return fullDate.getFullYear()     
        }
    }
}
</script>

<template>
    <div class="flex flex-col h-[148px] bg-primary-gray-2 justify-center align-middle items-center border-t border-[#DEDEDE]">
        <div class="flex flex-row mb-4">
            <a href="https://github.com/ariobintangn" target="_blank">
                <img src="../assets/github.png" alt="github logo" class="mr-2 h-[30px]" >
            </a>
            <a href="https://www.linkedin.com/in/ario-bintang-nugraha-22a04b179/" target="_blank">
                <img src="../assets/linkedin.svg" alt="linkedin logo" class="ml-2 h-[30px]">
            </a>
        </div>
        <h1 class="text-off-white">©️ Ario B.N. {{ date() }}</h1>
    </div>
</template>
