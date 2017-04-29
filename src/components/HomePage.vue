<template>
  <div class="page page--home">
    <div class="site-list">
      <div class="container">
        <div class="row">
          <div :class="columnClass" v-for="site in activatedSites" :key="site.id">
            <site-block :site="site"></site-block>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import SiteBlock from './SiteBlock.vue'
import DeveloperPick from './DeveloperPickBlock.vue'
import { mapGetters } from 'vuex'
import isEmpty from 'lodash/isEmpty'

export default {
  components: {
    SiteBlock,
    DeveloperPick
  },
  beforeMount () {
    if (isEmpty(this.siteList)) {
      this.$store.dispatch('site/FETCH')
    }
  },
  computed: {
    ...mapGetters({
      siteList: 'site/siteList',
      activatedSites: 'site/activatedSites',
      layout: 'preference/layout'
    }),
    columnClass () {
      return this.layout === 'CLEAN' ? 'gr-12' : 'gr-6'
    }
  }
}
</script>
<style lang="scss" scoped>
  @import "../assets/scss/variables";
  @import "../assets/scss/mixins/mixins-master";
  .page--home{
    .site-list{
      .container{
        .row{
          display: flex;
          flex-wrap: wrap;
          justify-content: flex-start;
          margin-left: -($gutter-width/2);
          margin-right: -($gutter-width/2);
          .gr-12, .gr-6{
            width: 100%;
            padding-left: ($gutter-width/2);
            padding-right: ($gutter-width/2);
          }
          .gr-12{
            width: 100%;
          }
          .gr-6{
            width: 50%;
            @include media-breakpoint-down('sm'){
              width: 100%;
            }
          }
        }
      }
      .site-block{
        margin-top: 40px;
      }
    }
  }
</style>
