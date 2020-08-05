<template>
  <div>
    <Header />
    <router-view />
    <Sidebar/>
  </div>
</template>

<script>
import Header from './components/CompHeader'
import Sidebar from './components/Sidebar'
export default {
  name: "App",
  data() {
    return {};
  },
  components:{
    Header,
    Sidebar
  }
};
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
