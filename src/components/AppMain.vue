<template>
  <section class="w-[100%] h-[auto] bg-[#121212]">
    <div class="w-[100%] h-[200px]">
        <img :src="heroBg" alt="" class="w-[50%] h-[300px] hover:shadow-xl hover:shadow-white hover:cursor-pointer absolute left-[25%] rounded-md">
        <p class="text-center relative z-50 text-white font-bold text-[3em] pt-[100px]">{{this.heroName}}</p>
        <p class="text-center relative z-50 text-white font-bold text-[1.5em] pt-[10px]">Now in cinemas!</p>

    </div>
    <div class="text-green-400 mt-[200px] ml-10">
        <p class="font-bold text-[20px] ml-[11%]">Trending-</p>
        <div class="flex flex-wrap w-[80%] mx-auto">
            <div v-for="movie in trendingArray.slice(0,12)" :key="movie.title">
                <div class="w-[220px] h-[180px] rounded-md bg-white ml-5 mt-[50px] hover:cursor-pointer hover:shadow-white hover:shadow-lg shadow-md shadow-green-400">
                    <img :src="this.getImage(movie)" alt="" class="rounded-md w-[100%] h-[100%]">
                    <p class="font-bold">{{movie.title}}</p>
                </div>
            </div>
        </div>
    </div>

    <div class="text-green-400 mt-[200px] ml-10">
        <p class="font-bold text-[20px] ml-[11%]">Upcoming-</p>
        <div class="flex flex-wrap w-[80%] mx-auto">
            <div v-for="movie in upcomingArray.slice(0,12)" :key="movie.title">
                <div class="w-[220px] h-[180px] rounded-md bg-white ml-5 mt-[50px] hover:cursor-pointer hover:shadow-white hover:shadow-lg shadow-md shadow-green-400">
                    <img :src="this.getImage(movie)" alt="" class="rounded-md w-[100%] h-[100%]">
                    <p class="font-bold">{{movie.title}}</p>
                </div>
            </div>
        </div>
    </div>

    <div class="h-[500px]"></div>
  </section>

</template>

<script>
export default {
    name:'AppMain',
    props:['API_KEY'],
    data(){
        return{
            trendingMovies:'',
            upcomingMovies:'',
            trendingArray: [],
            upcomingArray:[],
            heroBg:``,
            heroName: ``,
            bgPath:"https://image.tmdb.org/t/p/w500",
        };
    },
    methods:{
        async getFavoriteMovies(){
            const data = await fetch("https://api.themoviedb.org/3/trending/all/day?api_key=ee82108c7a30e37aeeb33fdac873495a");
            this.trendingMovies = await data.json();
            this.heroBg = `https://image.tmdb.org/t/p/w500${this.trendingMovies.results[0].backdrop_path}`;
            this.heroName = this.trendingMovies.results[0].name;
            this.getTrendingMovies();
        },
        async getUpcomingMovies(){
            const data = await fetch("https://api.themoviedb.org/3/movie/upcoming?api_key=ee82108c7a30e37aeeb33fdac873495a&language=en-US&page=1");
            this.upcomingMovies = await data.json();
            this.sortUpcomingMovies();
        },
        getTrendingMovies(){
            for(let i = 0; i < 20; i++){
                if(this.trendingMovies.results[i].title == undefined){
                    continue;
                }else{
                    this.trendingArray.push(this.trendingMovies.results[i]);
                }
            }
        },
        sortUpcomingMovies(){
            for(let i = 0;i<20;i++){
                if(this.upcomingMovies.results[i].title == undefined){
                    continue;
                }else{
                    this.upcomingArray.push(this.upcomingMovies.results[i]);
                }
            }
        },
        getImage(movie){
            let image = this.bgPath + movie.backdrop_path;
            return image;
        }
    },
    created(){
        this.getFavoriteMovies();
        this.getUpcomingMovies();
    }
}
</script>
