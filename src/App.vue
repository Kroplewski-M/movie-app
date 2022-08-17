<template>
  <AppNav @scroll="scroll"></AppNav>
  <AppMain :API_KEY="API_KEY" ref="AppMain"></AppMain>

</template>

<script>
import AppNav from './components/AppNav.vue';
import AppMain from './components/AppMain.vue';

export default {
    name: "App",
    components: { AppNav, AppMain },
    data(){
      return{
        API_KEY: 'ee82108c7a30e37aeeb33fdac873495a',
      }
    },
    methods:{
      scroll(){

        window.scrollTo(0,1000);
      }
    }
}
</script>

<style>

</style>

