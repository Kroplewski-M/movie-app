<template>
    <div class="w-[100%] h-[100vh] bg-[#111111] text-center">
        <p class="font-bold text-green-400 text-[100px] pt-[30vh] animate-pulse">CineMax</p>
        <p class="text-green-400 text-[20px] font-light">All the movies in one place</p>
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

