<template>
  <section class="w-[100%] h-[100vh] bg-[#121212]">
    
  </section>

</template>

<script>
export default {
    name:'AppMain',
    props:['API_KEY'],
    data(){
        return{
            trendingMovies:'',
            heroBg:``,
        };
    },
    methods:{
        async getFavoriteMovies(){
            const data = await fetch("https://api.themoviedb.org/3/trending/all/day?api_key=ee82108c7a30e37aeeb33fdac873495a");
            this.trendingMovies = await data.json();
            this.heroBg = `https://image.tmdb.org/t/p/w500${this.trendingMovies.results[0].backdrop_path}`;
            console.log(this.trendingMovies.results[0]);
            console.log(this.heroBg);
        }
    },
    mounted(){
        this.getFavoriteMovies();
    }
}
</script>

