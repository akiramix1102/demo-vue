<template>
  <el-row class="row" gutter="30">
    <h2>Feature Products</h2>
    <VueSlickCarousel :dots="true" :arrows="true" v-bind="settings">
      <el-col :span="6" v-for="product in products" :key="product.id">
        <div class="product">
          <div class="wrapper">
            <img :src="product.img" alt="product.name" class="product-img" />
            <h3 class="product-name">{{ product.name }}</h3>
          </div>
          <span class="product-price">${{ product.price }}.00</span>
          <button class="btn-buy" @click="addToCart(product.id)">Add to cart</button>
        </div>
      </el-col>
    </VueSlickCarousel>
  </el-row>
</template>

<script>
import VueSlickCarousel from "vue-slick-carousel";
import "vue-slick-carousel/dist/vue-slick-carousel.css";
import "vue-slick-carousel/dist/vue-slick-carousel-theme.css";
export default {
  name: "feature",
  data() {
    return {
      settings: {
        // focusOnSelect: true,
        infinite: true,
        // autoplay:true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        touchThreshold: 5,
      },
    };
  },
  methods: {
    addToCart(id) {
      this.$store.commit("addToCart", id);
    },
  },
  computed: {
    products() {
      let arr = this.$store.state.products;
      return arr.filter((product) => product.feature);
    },
  },
  components: { VueSlickCarousel },
};
</script>

<style scoped>
.wrapper {
  position: relative;
  overflow: hidden;
}
.product-name {
  position: absolute;
  bottom: 0;
  text-align: center;
  padding: 10px;
  background: red;
  color: #fff;
}
.product-img {
  max-width: 100%;
  transition: all 1s ease;
}
.product-img:hover {
  transform: scale(1.1);
}
.product-price{
  font-size: 24px;
  font-weight: bold;
}
.btn-buy{
  padding: 10px 15px;
  margin-left: 20px;

}
</style>
