<template>
  <div class="news-item">
    <a target="_blank" rel="noopener"  :href="news.attributes.url" class="title" v-text="news.attributes.title"></a>
  </div>
</template>
<script>
export default {
  props: {
    news: {
      default () {
        return {
          title: 'Unknown title',
          icon: 'noicon.svg'
        }
      }
    }
  }
}
</script>
<style lang="scss" scoped>
  @import "./../assets/scss/variables";
  @import "./../assets/scss/mixins/mixins-master";
  .news-item{
    padding: 5px 0;
    .title{
      text-decoration: none;
      margin: 0;
      font-size: 15px;
      line-height: 23px;
      font-style: normal;
      display: inline-block;
      color: $brand-primary;
      transition: $transition-base;
      &:visited{
        color: $link-visited-color;
      }
      &:hover{
        color: $link-hover-color;
      }
    }
  }
</style>
