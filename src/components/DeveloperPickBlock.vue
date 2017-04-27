<template>
  <div class="site-block developer-pick">
    <div class="header">
      <img alt="Developer's pick" class="icon" src="static/images/logos/48x48.png">
      <h1 class="title">Developer's picks</h1>
    </div>
    <news-list :newsList="pickedNewsList"></news-list>
  </div>
</template>
<script>
import isEmpty from 'lodash/isEmpty'
import NewsList from './NewsList.vue'
import { mapGetters } from 'vuex'
export default {
  components: {
    NewsList
  },
  mounted () {
    if (isEmpty(this.pickedNewsList)) {
      this.$store.dispatch('news/FETCH_PICKED_NEWS')
    }
  },
  computed: {
    ...mapGetters({
      pickedNewsList: 'news/pickedNewsList'
    })
  }
}
</script>
<style lang="scss" scoped>
  @import "./../assets/scss/variables";
  @import "./../assets/scss/mixins/mixins-master";
  .developer-pick{
    .header{
      display: flex;
      justify-content: flex-start;
      align-items: center;
      margin-bottom: 15px;
      .icon{
        flex-shrink: 0;
        height: 20px;
        width: auto;
        margin-right: 10px;
      }
      .title{
        font-size: 20px;
        line-height: 30px;
        font-style: normal;
        font-weight: 500;
        display: block;
        margin: 0;
        color: $brand-primary;
      }
    }
  }
</style>
