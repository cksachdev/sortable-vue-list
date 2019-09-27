<template>
  <div id="app">
    <Slist />
  </div>
</template>

<script>
import Slist from './components/Slist.vue'

export default {
  name: 'app',
  components: {
    Slist
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
