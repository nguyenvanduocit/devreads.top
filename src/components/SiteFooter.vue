<template>
  <footer class="site-footer">
    <div class="container">
      <div class="inner">
        <p class="copy">&copy; 2017 <a href="https://senviet.org" target="_blank">Sen Việt</a>, nguyenvanduocit@gmail.com</p>
        <p class="tagline">Mãi mãi xin là ngọn gió nâng dậy cành hoa nơi bước chân Người.</p>
      </div>
    </div>
  </footer>
</template>
<style lang="scss" scoped>
  @import "./../assets/scss/variables";
  @import "./../assets/scss/mixins/mixins-master";
.site-footer{
  margin-top: 25px;
  border-top: 1px solid rgba(74, 82, 95, 0.1);
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 25px 0;
  color: $brand-primary;
  .inner{
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    text-align: center;
    @include media-breakpoint-up('lg'){
      justify-content: space-between;
    }
    .copy{
      margin: 0;
    }
    .tagline {
      margin: 10px 0 0;
      font-size: 14px;
      line-height: 20px;
      @include media-breakpoint-up('lg'){
        margin-top: 0;
        font-size: 16px;
        line-height: 24px;
      }
    }
  }

}
</style>
