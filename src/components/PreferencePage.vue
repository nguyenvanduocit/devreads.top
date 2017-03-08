<template>
  <div class="page page--preference">
    <div class="container">
      <div class="body">
        <site-preference></site-preference>
      </div>
    </div>
  </div>
</template>
<script>
import SitePreference from './SitePreference.vue'
export default {
  components: {
    SitePreference
  }
}
</script>
<style lang="scss" scoped>
  @import "./../assets/scss/variables";
  @import "./../assets/scss/mixins/mixins-master";
  .page--preference{
    padding-top: 30px;
  }
</style>
