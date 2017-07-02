<template>
  <div id="app">
    <Dynamics></Dynamics>
    <router-view></router-view>
  </div>
</template>

<script>
  import Dynamics from './components/Dynamics'

  export default {
    components: {
      Dynamics
    }
  }
</script>

<style>
</style>
