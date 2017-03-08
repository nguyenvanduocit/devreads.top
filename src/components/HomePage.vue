<template>
  <div class="page page--home">
    <div class="site-list">
      <div class="container">
        <div class="row">
          <template v-for="site in activatedSites">
            <div :class="columnClass">

              <site-block :site="site"></site-block>
            </div>
          </template>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import SiteBlock from './SiteBlock.vue'
import { mapGetters } from 'vuex'
import {isEmpty} from 'lodash'

export default {
  components: {
    SiteBlock
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
      return this.layout === 'CLEAN' ? 'gr-12' : 'gr-12 gr-6@lg gr-6@xl'
    }
  }
}
</script>
<style lang="scss" scoped>
  .page--home{
    .site-list{
      .site-block{
        margin-top: 40px;
      }
    }
  }
</style>
