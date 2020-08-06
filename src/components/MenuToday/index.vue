<template>
    <el-row class="menu-today row" gutter="30">
        <h2>Menu Today</h2>
        <el-col span="24" class="btn-action">
            <ul class="menu-action">
                <li @click="getProduct(1)" :class="{highlight:selected==1}">All</li>
                <li @click="getProduct(2)" :class="{highlight:selected==2}">Breakfast</li>
                <li @click="getProduct(3)" :class="{highlight:selected==3}">Lunch</li>
                <li @click="getProduct(4)" :class="{highlight:selected==4}">Dinner</li>
            </ul>
        </el-col>
        <el-col span="6" v-for="product in products" :key="product.id">
        <div class="product">
            <div class="wrapper">
                <img :src="product.img" alt="product.name" class="product-img" />
                <h3 class="product-name">{{ product.name }}</h3>
            </div>
            <span class="product-price">${{ product.price }}.00</span>
            <button class="btn-buy" @click="addToCart(product.id)">Add to cart</button>
        </div>
        </el-col>
    </el-row>
</template>

<script>
export default {
    name:'menu',
    data(){
        return{
            selected:1,
            products:[]
        }
    },
    methods:{
        getProduct(n){
            this.selected=n;
            switch(n)
            {
                // case 1:
                //     this.products=this.$store.state.filterAll;
                //     break;
                case 2:
                    this.products=this.$store.getters.filterBf;
                    break;
                case 3:
                    this.products=this.$store.getters.filterLunch;
                    break;
                case 4:
                    this.products=this.$store.getters.filterDinner;
                    break;
                default:
                    return this.products=this.$store.state.products;
            }
        },
        addToCart(id){
            return this.$store.commit('addToCart',id)
        }
    },

    created(){
        return this.products=this.$store.state.products
    },

    
}
</script>

<style>
.menu-today{
    display: flex;
    flex-wrap: wrap;
    margin-top: 50px;
}
.menu-today h2{
    margin: auto;
    margin-bottom: 20px;
}
    .menu-action{
        list-style: none;
        display: flex;
        justify-content: center;
        margin-bottom: 30px;
    }
    .menu-action li{
        padding: 10px 15px;
        margin: 0 10px;
        background-color: #ccc;
        cursor: pointer;
    }
    .menu-action .highlight{
        background-color: red;
        color: #fff;
    }
    .product-img{
        width: 100%;
    }
    .product{
       animation: aniscale .4s;
       margin-bottom: 20px;
    }
    @keyframes aniscale {
        from{
            transform: scale(0.9);
        }
        to{
            transform: scale(1);
        }
    }

    .wrapper{
            position: relative;
    overflow: hidden;
    }
    .product-name{
        position: absolute;
    bottom: 0;
    text-align: center;
    padding: 10px;
    background: #226f14;
    color: #fff;
    }
    .product-price{
        font-size: 24px;
    font-weight: bold;
    }
    .btn-buy{
        padding: 10px 15px;
    margin-left: 20px;
    }
    button{
        cursor: pointer;
    }
</style>