<template>
    <section class=" w-[100%] h-[110vh] md:h-[110vh] bg-[#121212] text-green-400">
        <router-link to="/"><img src="@/resources/back.png" alt="" class="w-[50px] h-[50px] ml-5 mt-[20px] absolute"></router-link>
        <div class="md:w-[1500px] md:h-[1000px] mx-auto pt-[80px]">
            <div class="w-[100%] md:h-[750px] h-[auto] bg-[#232323] rounded-md">
                <img :src="this.movieImage" alt="" class="md:w-[500px] w-[350px] md:h-[700px] rounded-md md:float-left mr-5 ml-5 mt-5">
                <p class="font-bold text-[50px] ml-10 pt-5">{{this.movie}}</p>
                <img src="@/resources/calender.png" alt="" class="w-[25px] h-[25px] float-left mt-[49px] mr-[5px]">
                <p class="mt-[50px] float-left text-green-500 mr-5">Release date: <span class="font-bold">{{this.movieRelease}}</span></p>
                <img src="@/resources/vote.png" alt="" class="w-[25px] h-[25px] float-left mt-[49px] mr-[5px]">
                <p class="mt-[50px] float-left text-green-500">Vote Average: <span class="ml-[10px] font-bold">{{this.movieAverage}} </span></p>
                <p class="font-bold mt-[90px] text-green-500 text-[30px]">Description:</p>
                <p class="md:float-left w-[300px] md:w-[700px] mt-[20px] text-[17px] text-green-500 italic pb-10 md:pb-0">{{this.movieDesc}}</p>
            </div>
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
        window.scrollTo(0, 0);  
    },
}
</script>

