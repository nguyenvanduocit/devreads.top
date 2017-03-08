<template>
  <section class="site-preference">
    <div class="header">
      <h1 class="title">Site Preferences</h1>
    </div>
    <div class="body">
      <table class="site-table">
        <thead>
          <tr>
            <th>Name</th>
            <th class="status">Activated</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="site in siteList">
            <td v-text="site.attributes.title"></td>
            <td class="status"><switcher @on="onActivated(site.id)" @off="onDeactivated(site.id)" :checked="isActivated(site.id)"></switcher></td>
          </tr>
        </tbody>
      </table>
    </div>
  </section>
</template>
<script>
import Switcher from './Switcher.vue'
import { mapGetters } from 'vuex'
import {isEmpty, indexOf, toNumber} from 'lodash'
export default {
  components: {
    Switcher
  },
  beforeMount () {
    if (isEmpty(this.siteList)) {
      this.$store.dispatch('site/FETCH')
    }
  },
  computed: {
    ...mapGetters({
      activatedSiteIds: 'preference/activatedSiteIds',
      siteList: 'site/siteList'
    })
  },
  methods: {
    onActivated (siteId) {
      this.$store.commit('preference/ADD_ACTIVATED_SITE', siteId)
    },
    onDeactivated (siteId) {
      this.$store.commit('preference/REMOVE_ACTIVATED_SITE', siteId)
    },
    isActivated (siteId) {
      return indexOf(this.activatedSiteIds, toNumber(siteId)) > -1
    }
  }
}
</script>
<style lang="scss" scoped>
  .site-preference{
    .header{
      .title{
        font-size: 20px;
        line-height: 30px;
        font-style: normal;
        font-weight: 500;
        display: block;
        margin: 0;
      }
    }
    .body{
      .site-table{
        width: 100%;
        margin-top: 20px;
        empty-cells: show;
        border: 1px solid #eeeeee;
        thead{
          background-color: #e0e0e0;
          color: #000;
          text-align: left;
          vertical-align: bottom;
          th{
            padding: 0.5em 1em;
            border-left: 1px solid #dadada;
            font-size: inherit;
            margin: 0;
            overflow: visible;
          }
        }
        tbody{
          tr{
            td{
              padding: 0.5em 1em;
              border-left: 1px solid #eeeeee;
              border-bottom: 1px solid #eeeeee;
              font-size: inherit;
              margin: 0;
              &.status{

              }
            }
          }
        }
        .status{
          text-align: center;
        }
      }
    }
  }
</style>
