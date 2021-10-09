<template>
  <div id="app">

    <header class="header">
      <div class="container">
        <h1>Документы</h1>

        <div class="header__icons">
          <a href="" class="favorite"><svg-icon name="favorite"/></a>
          <a href="" class="btn-add"><svg-icon name="plus"/>Новый тип</a>
          <a href="" class="btn-add"><svg-icon name="plus"/>Новый документ</a>
        </div>
      </div>
    </header>
    <div class="main">
      <div class="container">
        <nested-example />
      </div>
    </div>
  </div>
</template>

<script>
import nestedExample from "./components/nested-example";
import SvgIcon from "./components/SvgIcon";
export default {
  name: 'App',
  components: {
    SvgIcon,
    nestedExample
  }
}
</script>

<style lang="scss">
@import "~@/assets/style/app.scss";
</style>
