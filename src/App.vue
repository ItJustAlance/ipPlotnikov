<template>
  <div id="app">
    <header class="header">
      <h1>Документы</h1>
      <div class="header__right">
        <div class="header__icons">
          <a href="" class="favorite"></a>
          <a href="" class="btn-add">Новый тип</a>
          <a href="" class="btn-add">Новый документ</a>
        </div>
      </div>
    </header>

    <nested-example />
  </div>
</template>

<script>
import nestedExample from "./components/nested-example";

export default {
  name: 'App',
  components: {
    nestedExample
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
