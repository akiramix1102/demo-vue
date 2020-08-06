<template>
  <el-container>
    <Feature />
    <Menu/>
  </el-container>
</template>
<script>
import Feature from "./FeatureProducts/index";
import Menu from "../MenuToday"
export default {
  name: "home",

  components: {
    Feature,
    Menu
  },
};
</script>

<style scoped>
.el-container {
  max-width: 1200px;
  margin: auto;
  flex-wrap: wrap;
}
.row {
  width: 100%;
  text-align: center;
}
h1 {
  background-color: red;
}
</style>
