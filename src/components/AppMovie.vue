<template>
    <section class=" w-[100vw] h-[100vh] bg-[#121212] text-green-400">
        <div class="w-[1500px] h-[1000px] mx-auto pt-10">
            <img :src="this.movieImage" alt="" class="w-[500px] h-[700px] rounded-md float-left mr-5">
            <p class="font-bold text-[50px] ml-10 h-[10px]">{{this.movie}}</p>
            <p class="mt-[100px] float-left text-green-500 mr-5">Release date: <span class="font-bold">{{this.movieRelease}}</span></p>
            <p class="mt-[100px] float-left text-green-500">Vote Average: <span class="ml-[10px] font-bold">{{this.movieAverage}} </span></p>
            <p class="font-bold mt-[170px] text-green-500 text-[30px]">Description:</p>
            <p class="float-left w-[700px] mt-[20px] text-[17px] text-green-500">{{this.movieDesc}}</p>
        </div>
    </section>
</template>

<script>
export default {
    name:["AppMovie"],
    data(){
        return{
            movie: this.$route.params.movie,
            movieDetails: '',
            bgPath: "https://image.tmdb.org/t/p/w500",
            movieImage:'',
            movieAverage: '',
            movieRelease: '',
            movieDesc:'',
        }
    },
    methods:{
       async getMovie(){
            let name = this.movie.replace(/\s/g, " ");
            let call = `https://api.themoviedb.org/3/search/movie?api_key=ee82108c7a30e37aeeb33fdac873495a&language=en-US&query=${name}&page=1&include_adult=false`;
            const data = await fetch(call);
            let movieArray = await data.json();
            this.movieDetails = movieArray.results;
            this.movieImage = this.getImage(this.movieDetails[0]);
            this.movieAverage = this.movieDetails[0].vote_average;
            this.movieRelease = this.movieDetails[0].release_date;
            this.movieID = this.movieDetails[0].id;
            this.movieDesc = this.movieDetails[0].overview;
            console.log(this.movieDetails[0]);
       },
        getImage(movieImage) {
            let image = this.bgPath + movieImage.poster_path;
            return image;
        },
    },  
    mounted(){
        this.getMovie();    
    },
}
</script>

