
<script>

import Home from './components/Home.vue';
import Header from './components/Header.vue';
import Footer from './components/Footer.vue';



export default {
  name: 'App',
  components: {
    Home,
    Header,
    Footer
  }
}
</script>

<template>
  <div id="app">
    <Header/>
    <Home/>
    <Footer/>
  </div>
</template>


<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
