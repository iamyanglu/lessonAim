<template>
  <div id="app">
    <navbar-use/>
    <router-view></router-view>
  </div>
</template>

<script>

import navbarUse from "./components/proUse/navbarUse";
export default {
  name: 'App',
  components: {
    navbarUse

  }
}
</script>

<style>
@import "./assets/css/baseCss.css";
</style>
