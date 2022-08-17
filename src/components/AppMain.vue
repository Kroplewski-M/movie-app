<template>
  <div class="h-[100%] w-[100%] bg-red-400">
  </div>
</template>

<script>
export default {
    name:'AppMain',
    props:['API_KEY'],
    data(){
        return{
            trendingMovies:'',
        };
    },
    methods:{
        async getFavoriteMovies(){
            const data = await fetch("https://api.themoviedb.org/3/trending/all/day?api_key=ee82108c7a30e37aeeb33fdac873495a");
            this.trendingMovies = await data.json();
            console.log(this.trendingMovies.results[0]);
        }
    },
    mounted(){
        this.getFavoriteMovies();
    }
}
</script>

