<template>
  <AppNav></AppNav>
  <AppMain></AppMain>
</template>

<script>
import AppNav from './components/AppNav.vue';
import AppMain from './components/AppMain.vue';

export default {
    name: "App",
    components: { AppNav, AppMain }
}
</script>


