<template>
  <div id="app">
    <HelloWorld /> <el-button size="mini" type="primary">button</el-button
    ><br />
    <el-tag>tag</el-tag>
    <!-- <el-tree :data="[{ label: '1-1' }]" highlight-current=""></el-tree> -->
  </div>
</template>

<script>
import HelloWorld from "./components/HelloWorld";

export default {
  name: "App",
  components: {
    HelloWorld
  }
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
