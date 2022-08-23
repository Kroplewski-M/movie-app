<template>
    <AppNav @scroll="scroll"></AppNav>


    <section class="w-[100%] h-[auto] bg-[#121212]">
        <router-link :to="`/movie/${this.trendingMovies.results[0].title}`"><div class="w-[100%] h-[200px]">
            <img :src="heroBg" alt=""
                class="w-[50%] h-[300px] hover:shadow-xl hover:shadow-white hover:cursor-pointer absolute left-[25%] rounded-md">
            <p class="text-center relative z-50 text-white font-bold text-[3em] pt-[100px]">{{ this.heroName }}</p>
            <p class="text-center relative z-50 text-white font-bold text-[1.5em] pt-[10px]">Now in cinemas!</p>
        </div></router-link>

        <div class="mt-[150px] text-center text-green-400 font-bold">
            <a href="#" @click.prevent="this.changeFilter('All')" class="mr-[30px]"
                :style="[this.filter == 'All' ? { 'color': 'white' } : '']">All</a>
            <a href="#" @click.prevent="this.changeFilter('Trending')" class="mr-[30px]"
                :style="[this.filter == 'Trending' ? { 'color': 'white' } : '']">Trending</a>
            <a href="#" @click.prevent="this.changeFilter('Upcoming')" class="mr-[30px]"
                :style="[this.filter == 'Upcoming' ? { 'color': 'white' } : '']">Upcoming</a>
            <a href="#" class="mr-[50px]" @click.prevent="this.changeFilter('NowPlaying')"
                :style="[this.filter == 'NowPlaying' ? { 'color': 'white' } : '']">Now Playing</a>
            <input type="text" class="w-[200px] h-[30px] bg-[#232323] rounded-md mr-[10px] pl-[5px]" @keydown.enter="this.getSearch" v-model="search">
            <img src="@/resources/search.png" alt="" class="w-[20px] h-[20px] inline mb-[5px] hover:cursor-pointer"
                @click.prevent="this.getSearch">
        </div>

        <div v-if="this.filter == 'All' || this.filter == 'Trending'" class="text-green-400 mt-[200px] ml-10">
            <p class="font-bold text-[20px] ml-[11%]">Trending-</p>
            <div class="flex flex-wrap w-[80%] mx-auto">
                <div v-for="movie in trendingArray.slice(0, 8)" :key="movie.title">
                   <router-link :to="`/movie/${movie.title}`"> <div
                        class="w-[300px] h-[180px] rounded-md bg-white ml-5 mt-[50px] hover:cursor-pointer hover:shadow-white hover:shadow-lg shadow-md shadow-green-400">
                        <img :src="this.getImage(movie)" alt="" class="rounded-md w-[100%] h-[100%]">
                        <p
                            class="absolute -mt-[35px] w-[30px] h-[30px] rounded-full bg-blue-800 text-white shadow-xl pl-[9px] pt-[3px] font-bold">
                            {{ Math.round(movie.vote_average) }}</p>
                        <p class="font-bold">{{ movie.title }}</p>
                    </div></router-link>
                </div>
            </div>
        </div>

        <div v-if="this.filter == 'All' || this.filter == 'Upcoming'" class="text-green-400 mt-[200px] ml-10">
            <p class="font-bold text-[20px] ml-[11%]">Upcoming-</p>
            <div class="flex flex-wrap w-[80%] mx-auto">
                <div v-for="movie in upcomingArray.slice(0, 8)" :key="movie.title">
                  <router-link :to="`/movie/${movie.title}`"><div
                        class="w-[300px] h-[180px] rounded-md bg-white ml-5 mt-[50px] hover:cursor-pointer hover:shadow-white hover:shadow-lg shadow-md shadow-green-400">
                        <img :src="this.getImage(movie)" alt="" class="rounded-md w-[100%] h-[100%]">
                        <p
                            class="absolute -mt-[35px] w-[30px] h-[30px] rounded-full bg-blue-800 text-white shadow-xl pl-[9px] pt-[3px] font-bold">
                            {{ Math.round(movie.vote_average) }}</p>
                        <p class="font-bold">{{ movie.title }}</p>
                    </div></router-link>
                </div>
            </div>
        </div>

        <div v-if="this.filter == 'All' || this.filter == 'NowPlaying'" class="text-green-400 mt-[200px] ml-10">
            <p class="font-bold text-[20px] ml-[11%]">Now Playing-</p>
            <div class="flex flex-wrap w-[80%] mx-auto">
                <div v-for="movie in nowPlayingArray.slice(0, 8)" :key="movie.title">
                    <router-link :to="`/movie/${movie.title}`"><div
                        class="w-[300px] h-[180px] rounded-md bg-white ml-5 mt-[50px] hover:cursor-pointer hover:shadow-white hover:shadow-lg shadow-md shadow-green-400">
                        <img :src="this.getImage(movie)" alt="" class="rounded-md w-[100%] h-[100%]">
                        <p
                            class="absolute -mt-[35px] w-[30px] h-[30px] rounded-full bg-blue-800 text-white shadow-xl pl-[9px] pt-[3px] font-bold">
                            {{ Math.round(movie.vote_average) }}</p>
                        <p class="font-bold">{{ movie.title }}</p>
                    </div></router-link>
                </div>
            </div>
        </div>

        <div v-if="this.filter == 'search'" class="text-green-400 mt-[200px] ml-10">
            <div class="flex flex-wrap w-[80%] mx-auto">
                <div v-for="movie in SearchedMoviesArray.slice(0, 8)" :key="movie.title">
                    <router-link :to="`/movie/${movie.title}`"><div
                        class="w-[300px] h-[180px] rounded-md bg-white ml-5 mt-[50px] hover:cursor-pointer hover:shadow-white hover:shadow-lg shadow-md shadow-green-400">
                        <img :src="this.getImage(movie)" alt="" class="rounded-md w-[100%] h-[100%]">
                        <p
                            class="absolute -mt-[35px] w-[30px] h-[30px] rounded-full bg-blue-800 text-white shadow-xl pl-[9px] pt-[3px] font-bold">
                            {{ Math.round(movie.vote_average) }}</p>
                        <p class="font-bold">{{ movie.title }}</p>
                    </div></router-link>
                </div>
            </div>
        </div>

        <div class="h-[300px]"></div>
    </section>

</template>

<script>
import AppNav from '@/components/AppNav.vue';

export default {
    name: "AppMain",
    components: { AppNav },
    props: ["API_KEY"],

    data() {
        return {
            trendingMovies: "",
            upcomingMovies: "",
            nowPlayingMovies: "",
            nowPlayingArray: [],
            trendingArray: [],
            upcomingArray: [],
            heroBg: ``,
            heroName: ``,
            bgPath: "https://image.tmdb.org/t/p/w500",
            filter: "All",
            search: "",
            getSearchedMovies: [],
            SearchedMoviesArray: [],
        };
    },
    methods: {
        async getFavoriteMovies() {
            const data = await fetch("https://api.themoviedb.org/3/trending/all/day?api_key=ee82108c7a30e37aeeb33fdac873495a");
            this.trendingMovies = await data.json();
            this.heroBg = `https://image.tmdb.org/t/p/w500${this.trendingMovies.results[0].backdrop_path}`;
            this.heroName = this.trendingMovies.results[0].name;
            this.getTrendingMovies();
        },
        async getUpcomingMovies() {
            const data = await fetch("https://api.themoviedb.org/3/movie/upcoming?api_key=ee82108c7a30e37aeeb33fdac873495a&language=en-US&page=1");
            this.upcomingMovies = await data.json();
            this.sortUpcomingMovies();
        },
        async getNowPlayingMovies() {
            const data = await fetch("https://api.themoviedb.org/3/movie/now_playing?api_key=ee82108c7a30e37aeeb33fdac873495a&language=en-US&page=1");
            this.nowPlayingMovies = await data.json();
            this.sortNowPlayingMovies();
        },
        async getSearch() {
            this.SearchedMoviesArray = [];
            this.filter = "search";
            let name = this.search.replace(/\s/g, " ");
            let call = `https://api.themoviedb.org/3/search/movie?api_key=ee82108c7a30e37aeeb33fdac873495a&language=en-US&query=${name}&page=1&include_adult=false`;
            const data = await fetch(call);
            this.getSearchedMovies = await data.json();
            this.sortSearchMovies();
        },
        sortSearchMovies() {
            for (let i = 0; i < 20; i++) {
                if (this.getSearchedMovies.results[i].title == undefined) {
                    continue;
                }
                else {
                    this.SearchedMoviesArray.push(this.getSearchedMovies.results[i]);
                }
            }
        },
        getTrendingMovies() {
            for (let i = 0; i < 20; i++) {
                if (this.trendingMovies.results[i].title == undefined) {
                    continue;
                }
                else {
                    this.trendingArray.push(this.trendingMovies.results[i]);
                }
            }
        },
        sortUpcomingMovies() {
            for (let i = 0; i < 20; i++) {
                if (this.upcomingMovies.results[i].title == undefined) {
                    continue;
                }
                else {
                    this.upcomingArray.push(this.upcomingMovies.results[i]);
                }
            }
        },
        sortNowPlayingMovies() {
            for (let i = 0; i < 20; i++) {
                if (this.nowPlayingMovies.results[i].title == undefined) {
                    continue;
                }
                else {
                    this.nowPlayingArray.push(this.nowPlayingMovies.results[i]);
                }
            }
        },
        getImage(movie) {
            let image = this.bgPath + movie.backdrop_path;
            return image;
        },
        changeFilter(name) {
            this.filter = name;
        },
        scroll(){
            window.scrollTo(0,1000);
        }
    },
    watch: {
        search() {
            if (this.search == "") {
                this.filter = "All";
            }
        }
    },
    created() {
        this.getFavoriteMovies();
        this.getUpcomingMovies();
        this.getNowPlayingMovies();
    },

}

</script>
