<template>
  <div id="app">
    <Mheader></Mheader>
    <tab></tab>
    <keep-alive>
      <router-view></router-view>
    </keep-alive>
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
#app {}
</style>
