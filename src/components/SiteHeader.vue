<template>
  <header class="site-header">
    <div class="container">
      <nav class="inner">
        <div class="left">
          <router-link class="site-brand" to="/" exact><span class="hide@sm hide@xs">👩‍💻📰.🔝</span>Dev Reads</router-link>
          <header-navigator></header-navigator>
        </div>
        <toolbar></toolbar>
      </nav>
    </div>
  </header>
</template>

<script>
import Toolbar from './Toolbar.vue'
import HeaderNavigator from './HeaderNavigator.vue'
export default {
  components: {
    Toolbar,
    HeaderNavigator
  },
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  }
}
</script>

<style scoped lang="scss">
  @import "./../assets/scss/variables";
  @import "./../assets/scss/mixins/mixins-master";
  .site-header{
    border-bottom: 1px solid rgba(74, 82, 95, 0.1);
    .inner{
      display: flex;
      align-items: center;
      justify-content: space-between;
      .left{
        display: flex;
        align-items: center;
        justify-content: flex-start;
      }
      .site-brand{
        display: block;
        padding: 20px 0;
        text-decoration: none;
        font-family: $font__heading;
        color: $brand-primary;
        font-size: 20px;
        font-weight: 400;
        text-transform: uppercase;
      }
      .header-navigator{
        margin-left: 20px;
      }
    }
  }
</style>
