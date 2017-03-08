<template>
  <ul class="header-navigator no-style-list">
    <li><router-link to="/developer-pick">Dev's Pick</router-link></li>
  </ul>
</template>
<style lang="scss" scoped>
  @import "./../assets/scss/variables";
  @import "./../assets/scss/mixins/mixins-master";
  .header-navigator{
    margin: 0;
    li{
      a{
        font-size: 14px;
        line-height: 16px;
        border: none;
        background: $pink;
        color: #fff;
        display: block;
        padding: 5px 10px;
        border-radius: 4px;
        &:hover{
          background: lighten($pink, 12);
        }
      }
    }
  }
</style>
