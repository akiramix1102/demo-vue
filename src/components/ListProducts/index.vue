<template>
  <el-container class="wrapp-all">
    <el-row :gutter="30">
      <el-col :span="6">
        <h3>Filter</h3>

        <div v-for="(category, index) in categorys" :key="index">
          <input
            type="checkbox"
            v-model="checkedCategorys"
            v-bind:value="category"
          />
          {{ category }}
        </div>
        <el-divider></el-divider>
        <div>
          <h3>Sort By:</h3>
          <select v-model="sortBy">
            <option value="name_a_z">Product Name A - Z</option>
            <option value="name_z_a">Product Name Z - A</option>
            <option value="price_low_high">Price Low - High</option>
            <option value="price_high_low">Price High - Low</option>
          </select>
        </div>
        <!-- <div v-for="(item, index) in range" :key="index">
          <input type="checkbox" v-model="checkedRange" v-bind:value="item" />
          {{ item }}
        </div> -->
      </el-col>
      <el-col :span="18">
        <el-row :gutter="30" class="list-products">
          <el-col :span="8" v-for="product in filterProduct" :key="product.id">
            <div class="product">
              <div class="wrapper">
                <img
                  :src="product.img"
                  alt="product.name"
                  class="product-img"
                />
                <h3 class="product-name">{{ product.name }}</h3>
              </div>
              <span class="product-price">${{ product.price }}.00</span>
              <button class="btn-buy" @click="addToCart(product.id)">
                Add to cart
              </button>
            </div>
          </el-col>
        </el-row>
      </el-col>
    </el-row>
  </el-container>
</template>

<script>
export default {
  name: "products",
  data() {
    return {
      products: [],
      checkedCategorys: [],
      categorys: ["breakfast", "lunch", "dinner"],
      sortBy: "name_a_z",
      // range: ["Under $15", "$15 to $25", "$25 to $50", "Over $50"],
      // checkedRange: [],
      // filtersAsNumbers: {
      //   "Under $15": [0, 15],
      //   "$15 to $25": [15, 25],
      //   "$25 to $50": [25, 50],
      //   "Over $50": [50, 1000000],
      // },
    };
  },

  methods:{
    addToCart(id){
      return this.$store.commit('addToCart',id)
    }
  },

  created() {
    return (this.products = this.$store.state.products);
  },

  computed: {
    filterProduct() {
      return this.products
        .filter((product) => {
          return (
            this.checkedCategorys.length === 0 ||
            this.checkedCategorys.includes(product.category)
          );
        })
        .sort((a, b) => {
          switch (this.sortBy) {
            case "name_z_a":
              return b.name.toString().localeCompare(a.name.toString());

            case "price_low_high":
              return a.price - b.price;

            case "price_high_low":
              return b.price - a.price;
            
            default:
              return a.name.toString().localeCompare(b.name.toString());
          }
        });

      // if(!this.checkedCategorys.length){
      //   return this.products
      // }
      // else{
      //   return this.products.filter((product) =>
      //       this.checkedCategorys.includes(product.category)
      //     );
      // }

      //   return this.products.filter((product) => {
      //     if (!this.checkedRange.length) {
      //       return product;
      //     }
      //     if (this.checkedRange.length) {
      //       let productReturn;
      //       Object.keys(this.filtersAsNumbers)
      //         .filter((priceRange) => this.checkedRange.includes(priceRange))
      //         .filter((priceRangeFiltered) => {
      //           let low = this.filtersAsNumbers[priceRangeFiltered][0];
      //           let high = this.filtersAsNumbers[priceRangeFiltered][1];
      //           if (product.price >= low && product.price <= high) {
      //             productReturn = product;
      //           }
      //         });
      //       return productReturn;
      //     }
      //   });
    },
  },
};
</script>

<style scoped>
.el-container {
  max-width: 1200px;
  margin: auto;
  flex-wrap: wrap;
}
.wrapp-all {
  margin-top: 50px;
}
.el-row {
  width: 100%;
}
.product-img {
  width: 100%;
}
.list-products {
  display: flex;
  flex-wrap: wrap;
}
</style>
