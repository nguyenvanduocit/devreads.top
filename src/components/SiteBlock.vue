<template>
  <section class="site-block">
    <div class="header">
      <img :alt="site.attributes.title" class="icon" :src="iconURL">
      <h1 class="title"><a rel="noopener" target="_blank" :href="site.attributes.url" v-text='site.attributes.title'></a></h1>
    </div>
    <div class="body">
      <news-list :newsList="newsList"></news-list>
    </div>
    <div class="footer"></div>
  </section>
</template>
<script>
import NewsList from './NewsList.vue'
export default {
  components: {
    NewsList
  },
  props: ['site'],
  computed: {
    iconURL () {
      return this.site.attributes.icon ? './static/images/site-icons/' + this.site.attributes.icon : false
    },
    newsList () {
      let newsList = {}
      for (let newsRelationship of this.site.relationships.news.data) {
        // Avoid auto sorting
        newsList['_' + newsRelationship.id] = this.$store.getters['news/newsList'][newsRelationship.id]
      }
      return newsList
    }
  }
}
</script>
<style lang="scss" scoped>
  @import "./../assets/scss/variables";
  @import "./../assets/scss/mixins/mixins-master";
  .site-block{
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
        a{
          text-decoration: none;
          color: $brand-primary;
        }
      }
    }
  }
</style>
