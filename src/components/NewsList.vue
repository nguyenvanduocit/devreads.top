<template>
  <div class="news-list">
    <div class="list">
      <news-item v-for="news in newsList" :key="news.id" :news="news"></news-item>
    </div>
  </div>
</template>
<script>
import NewsItem from './NewsItem.vue'
export default {
  props: {
    newsList: {}
  },
  components: {
    NewsItem
  }
}
</script>
<style lang="scss" scoped>
  @import "./../assets/scss/variables";
  .news-list{
    .list{
      counter-reset: news-list-counter;
      .news-item{
        position: relative;
        padding-left: 25px;
        &:before{
          top:50%;
          transform: translateY(-50%);
          left: 0;
          position: absolute;
          content: counter(news-list-counter);
          counter-increment: news-list-counter;
          display: block;
          font-size: 15px;
          line-height: 15px;
          color: $brand-primary;
        }
      }
    }
  }
</style>
