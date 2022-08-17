<template>

    <div class="w-[100%] h-[100px] bg-[#111111]">
        <p class="text-white font-bold float-left text-[30px] mt-[25px] ml-5 hover:cursor-pointer">CineMax</p>
        <nav class="text-white text-center text-[20px] pt-[30px]  hover:cursor-pointer space-x-10 mr-[400px]">
            <a href="#">Action</a>
            <a href="#">Comedy</a>
            <a href="#">Drama</a>
            <a href="#">Fantasy</a>
        </nav>
        <div class="mr-10">
            <img src="@/resources/search.png" alt="" class="w-[30px] h-[30px] absolute right-10 top-9 hover:cursor-pointer">
            <input type="text" class="w-[200px] h-[20px] bg-[#333333] rounded-md mr-5 absolute right-20 top-10 text-white pl-[3px] font-semibold">
        </div>
    </div>

</template>

<script>
export default {
    name:'AppNav',
}
</script>

