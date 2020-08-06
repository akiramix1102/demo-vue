<template>
  <el-container>
    <el-row>
      <el-col :span="24"
        ><div class="grid-content bg-purple-dark">
          <el-menu
            :default-active="activeIndex"
            class="el-menu-demo"
            mode="horizontal"
            @select="handleSelect"
          >
            <el-menu-item index="1">
              <router-link to="/" tag="li">Home</router-link>
            </el-menu-item>
            <el-menu-item index="2">
              <router-link tag="li" to="/products">
                Products</router-link
              ></el-menu-item
            >
            <li class="el-menu-item" index="3" @click="toggle">
              <!-- <router-link to="/cart" tag="li"> -->
                <i class="el-icon-s-goods"></i>
                <span class="number-cart" v-if="cart.length">{{cart.length}}</span>
              <!-- </router-link> -->
            </li>
          </el-menu></div
      ></el-col>
    </el-row>
  </el-container>
</template>

<script>
export default {
  name: "header",
 
  methods:{
    toggle(){
      return this.$store.commit('toggleNav')
    }
  },
  computed:{
    cart(){
      return this.$store.state.cart;
    }
  }

};
</script>

<style scoped>
.el-container {
  max-width: 1200px;
  margin: auto;
  justify-content: center;
}
.is-active{
  border-bottom: none !important;
}
.el-menu-item{
  font-size: 24px;
  position: relative;
}
.el-icon-s-goods{
 
  font-size: 24px;
}
.number-cart{
   position: absolute;
    top: 4px;
    right: 15px;
    width: 25px;
    border-radius: 50%;
    height: 25px;
    background-color: red;
    display: flex;
    color: #fff;
    justify-content: center;
    align-items: center;
}

</style>
