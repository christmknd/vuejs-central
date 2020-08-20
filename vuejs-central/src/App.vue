<script>
import Contact from './components/Contact';

export default {
  name: 'App',
  components: {
    Contact
  }
}
</script>
<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/calcul">Calculator</router-link>
    </div>
    <router-view/>
    <div id="footer">
      <Contact/>
    </div>
  </div>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}

#footer{
  float:center;
  padding-top:150px;
}
</style>
