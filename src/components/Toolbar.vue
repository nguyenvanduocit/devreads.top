<template>
  <div class="toolbar">
    <div class="toolbar-item extension">
      <a href="https://chrome.google.com/webstore/detail/bafkfaeaenpipjaenkipbfoacbjbnoal" target="_blank" class="toolbar-item chrome-extension">Chrome Extension</a>
    </div>
    <div class="toolbar-item layout-toogle" @click.prevent="toggleLayout">
      <i v-show="layout === 'CLEAN'" class="item-icon icon-two-column-layout"></i>
      <i v-show="layout === 'COMPACT'" class="item-icon icon-one-column-layout"></i>
    </div>
    <div class="toolbar-item site-manager">
      <router-link to="/preference"><i class="item-icon icon-preference"></i></router-link>
    </div>
  </div>
</template>
<script>
import { mapGetters, mapActions } from 'vuex'
export default {
  computed: {
    ...mapGetters({
      layout: 'preference/layout'
    })
  },
  methods: {
    ...mapActions({
      toggleLayout: 'preference/TOGGLE_LAYOUT'
    })
  }
}
</script>
<style lang="scss" scoped>
  @import "./../assets/scss/variables";
  @import "./../assets/scss/mixins/mixins-master";
  .toolbar{
    display: flex;
    justify-content: center;
    align-items: center;
    text-transform: uppercase;
    .toolbar-item{
      display: block;
      padding: 10px;
      cursor: pointer;
      a{
        color: $brand-primary;
        text-decoration: none;
      }
      &.layout-toogle{
        display: none;
        @include media-breakpoint-up('lg'){
          display: block;
        }
        .item-icon{
          font-size: 20px;
        }
      }
      .item-icon{
        font-size: 17px;
      }

    }
  }
</style>
