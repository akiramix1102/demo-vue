import Vue from 'vue'
import Vuex from 'vuex'
import logo_1 from '../src/assets/imgs/1.jpg'
import logo_2 from '../src/assets/imgs/2.jpg'
import logo_3 from '../src/assets/imgs/3.jpg'
import logo_4 from '../src/assets/imgs/4.jpg'
import logo_5 from '../src/assets/imgs/5.jpg'
import logo_6 from '../src/assets/imgs/6.jpg'
import logo_7 from '../src/assets/imgs/7.jpg'
import logo_8 from '../src/assets/imgs/8.jpg'
import logo_9 from '../src/assets/imgs/9.jpg'
import logo_10 from '../src/assets/imgs/10.jpg'
import logo_11 from '../src/assets/imgs/11.jpg'
import logo_12 from '../src/assets/imgs/12.jpg'
import logo_13 from '../src/assets/imgs/13.jpg'

Vue.use(Vuex);

export const store = new Vuex.Store({
    state:{
        products:[
            {
                id:1,
                name: "Antipasto",
                price: 23,
                des: 'Phô mai, hải sản, rau xà lách...',
                img: logo_1,
                feature:true,
                category:"breakfast"
                
            },
            {
                id:2,
                name: "Arancini ",
                price: 15,
                des: 'Phô mai, hải sản, rau xà lách...',
                img: logo_2,
                feature:true,
                category:"breakfast"
            },
            {
                id:3,
                name: "Bruschetta ",
                price: 13,
                des: 'Phô mai, hải sản, rau xà lách...',
                img: logo_3,
                category:"breakfast"
            },
            {
                id:4,
                name: "Cannelloni ",
                price: 65,
                des: 'Phô mai, hải sản, rau xà lách...',
                img: logo_4,
                feature:true,
                category:"breakfast",
            },
            {
                id:5,
                name: "Cannoli ",
                price: 28,
                des: 'Phô mai, hải sản, rau xà lách...',
                img: logo_5,
                category:"lunch"
            },
            {
                id:6,
                name: "Antipasto",
                price: 23,
                des: 'Phô mai, hải sản, rau xà lách...',
                img: logo_6,
                feature:true,
                category:"lunch"
            },
            {
                id:7,
                name: "Espresso ",
                price: 10,
                des: 'Phô mai, hải sản, rau xà lách...',
                img: logo_7,
                category:"lunch"
            },
            {
                id:8,
                name: "Fettuccine ",
                price: 23,
                des: 'Phô mai, hải sản, rau xà lách...',
                img: logo_8,
                feature:true,
                category:"lunch"
            },
            {
                id:9,
                name: "Focaccia ",
                price: 15,
                des: 'Phô mai, hải sản, rau xà lách...',
                img: logo_9,
                feature:true,
                category:"dinner"
            },
            {
                id:10,
                name: "Gnocchi ",
                price: 35,
                des: 'Phô mai, hải sản, rau xà lách...',
                img: logo_10,
                category:"dinner"
            },
            {
                id:11,
                name: "Lasagne ",
                price: 22,
                des: 'Phô mai, hải sản, rau xà lách...',
                img: logo_11,
                category:"dinner"
            },
            {
                id:12,
                name: "mozzarella ",
                price: 23,
                des: 'Phô mai, hải sản, rau xà lách...',
                img: logo_12,
                category:"dinner"
            },
            {
                id:13,
                name: "Ossobuco ",
                price: 65,
                des: 'Phô mai, hải sản, rau xà lách...',
                img: logo_13,
                category:"dinner"
            },
        ],

        cart:[],
        total:0
    },
    mutations:{
        addToCart(state,id){
            
            let product = state.products.find(product=>product.id===id)
            let exits=state.cart.find(product=>product.id===id);
            if(!exits){
                product.quantity=1;
                let newTotal=state.total+product.price;
                state.cart.push(product);
                state.total=newTotal;
            }
            else{
                product.quantity+=1;
                state.total+=product.price;
                
            }
           
        }
    }
})