<template>
  <div id="app">
    <Mheader></Mheader>
    <tab></tab>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'app',
  components: {
    'Mheader': require('@/components/header/header.vue'),
    'tab': require('@/components/tab/tab.vue')
  }
}
</script>

<style>
#app {
}
</style>
