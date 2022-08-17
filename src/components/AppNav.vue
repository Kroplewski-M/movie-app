<template>
    <div class="w-[100%] h-[100vh] bg-[#111111] text-center">
        <p class="font-bold text-white text-[100px] pt-[30vh] animate-pulse">CineMax</p>
        <p class="text-white text-[20px] font-light">one stop shop for movies</p>
        <img src="@/resources/down.png" alt="" class="absolute bottom-10 right-[49%] w-[50px] h-[50px] animate-bounce hover:cursor-pointer" @click="scroll">
    </div>

</template>

<script>
export default {
    name:'AppNav',
    methods:{
       scroll(){
        this.$emit('scroll');
       }
    }
}
</script>

