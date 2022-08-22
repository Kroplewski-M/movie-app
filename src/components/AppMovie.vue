<template>
    <section class=" w-[100vw] h-[100vh] bg-[#121212]">
        {{this.movie}}
    </section>
</template>

<script>
export default {
    name:["AppMovie"],
    data(){
        return{
            movie: this.$route.params.movie,
            movieDetails: '',
        }
    },
    methods:{
       async getMovie(){
            let name = this.movie.replace(/\s/g, " ");
            let call = `https://api.themoviedb.org/3/search/movie?api_key=ee82108c7a30e37aeeb33fdac873495a&language=en-US&query=${name}&page=1&include_adult=false`;
            const data = await fetch(call);
            let movieArray = await data.json();
            this.movieDetails = movieArray.results;
            console.log(this.movieDetails[0]);
       }
    },  
    mounted(){
        this.getMovie();
    },
}
</script>

