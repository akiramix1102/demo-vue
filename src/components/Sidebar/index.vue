<template>
  <div class="sidebar">
    
    <div
      class="sidebar-backdrop"
      @click="closeSidebarPanel"
      v-if="isNavOpen"
    ></div>
    <transition name="slide">
      <div v-if="isNavOpen" class="sidebar-panel">
        <ul class="cart">
          <li class="title">
            Shopping cart
          </li>
          <li v-for="item in cart" :key="item.id" class="item">
            <div class="item-img">
              <img :src="item.img" alt="item.name" class="img-fluid" />
            </div>
            <div class="detail">
              <span class="name">
                {{ item.name }}
              </span>
              <p class="price">
                <b>${{ item.price }}.00</b> x {{ item.quantity }}
              </p>
            </div>
          </li>
        </ul>
        <div class="total">
          <i>Total:</i>
          <b>${{ total }}</b>
        </div>
        <div class="btn-group">
          <router-link tag="span" to="/cart" @click.native="closeSidebarPanel"
            >View cart</router-link
          >
          <span>Check out</span>
        </div>
      </div>
    </transition>
  </div>
</template>

<script>
import { mapState } from "vuex";
export default {
  name: "side-bar",
  methods: {
    closeSidebarPanel() {
      return this.$store.commit("toggleNav");
    },
  },
  computed: mapState(["cart", "isNavOpen", "total"]),
};
</script>

<style scoped>
.cart {
  list-style: none;
  padding: 0;
  height: 70%;
  overflow: auto;
}
.title {
  font-size: 18px;
  font-weight: bold;
}
.item {
  display: flex;
  justify-content: inherit;
  align-items: center;
  margin: 15px 0;
}
.img-fluid {
  max-width: 58px;
  padding-right: 15px;
}
.name {
  color: #0063d1;
  font-weight: bold;
  font-size: 18px;
}
.total b {
  padding-left: 10px;
}
.btn-group {
  margin-top: 15px;
}
.btn-group span {
  padding: 10px 15px;
  background-color: #0063d1;
  border-radius: 5px;
  color: #fff;
  position: relative;
  cursor: pointer;
}

.btn-group span:last-child {
  margin-left: 15px;
}

.slide-enter-active,
.slide-leave-active {
  transition: transform 0.2s ease;
}

.slide-enter,
.slide-leave-to {
  transform: translateX(100%);
  transition: all 150ms ease-in 0s;
}

.sidebar-backdrop {
  background-color: rgba(0, 0, 0, 0.6);
  width: 100vw;
  height: 100vh;
  position: fixed;
  top: 0;
  left: 0;
  cursor: pointer;
}

.sidebar-panel {
  overflow-y: auto;
  background-color: #fff;
  box-shadow: 0 0.25rem 0.5625rem -0.0625rem rgba(0, 0, 0, 0.03),
    0 0.275rem 1.25rem -0.0625rem rgba(0, 0, 0, 0.05);
  position: fixed;
  right: 0;
  top: 0;
  height: 100vh;
  z-index: 999;
  padding: 3rem 20px 2rem 20px;
  width: 300px;
}
</style>
