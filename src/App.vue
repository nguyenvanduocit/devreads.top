<template>
  <div id="app">
    <div class="top">
      <site-header></site-header>
      <router-view></router-view>
    </div>
    <site-footer></site-footer>
  </div>
</template>

<script>
import SiteHeader from './components/SiteHeader.vue'
import SiteFooter from './components/SiteFooter.vue'
export default {
  name: 'app',
  components: {
    SiteHeader,
    SiteFooter
  },
  created () {
    this.$store.dispatch('preference/LOAD_PREFERENCE')
  }
}
</script>

<style lang="scss">
@import "./assets/scss/global";
#app{
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  .top{
    flex: 1;
  }
}
</style>
