<template>
  <el-container>
    <Feature/>
  </el-container>
</template>
<script>


import Feature from './FeatureProducts/index';
export default {
  name: "home",
  
  components:{
      Feature,
  }
 
};
</script>

<style scoped>
.el-container{
    max-width: 1200px;
    margin: auto;
}
.row {
  width: 100%;
  text-align: center;
}
h1{
    background-color: red;
}
</style>
