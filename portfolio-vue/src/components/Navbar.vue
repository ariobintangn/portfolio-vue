<script>
export default {
    data() {
        return {
            showMenu: false
        }
    },
    methods: {
        toggleMenu() {
            this.showMenu = !this.showMenu
        }
    }
}
</script>
<template>
    <div class="h-[74px] bg-primary-gray-1 items-center flex flex-row justify-between sticky">
        <div class="m-[28px]">
            <img src="../assets/ab.ico" alt="logo" class="h-[31px]">
        </div>
        <div class="m-[28px]" @click="toggleMenu()" v-if="!showMenu"><img src="../assets/ham.svg" alt="ham svg"></div>
        <div class="m-[28px] absolute right-0 top-0 flex flex-col" v-if="showMenu">
            <h1 class="bg-white w-[30px] h-[30px] text-center rounded-full font-bold absolute -top-[12px] -right-[12px]" @click="toggleMenu()">x</h1>
            <div class="bg-primary-gray-1 w-[120px] px-[12px] py-[6px] rounded-lg text-white">
                <div>Close1</div>
                <div>Close2</div>
                <div>Close3</div>
            </div>
        </div>
    </div>
</template>