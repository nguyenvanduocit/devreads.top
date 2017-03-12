<template>
  <div class="page page--home">
    <div class="site-list">
      <div class="container">
        <div class="row">
          <div :class="columnClass">
            <developer-pick></developer-pick>
          </div>
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
import DeveloperPick from './DeveloperPickBlock.vue'
import { mapGetters } from 'vuex'
import {isEmpty} from 'lodash'

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
