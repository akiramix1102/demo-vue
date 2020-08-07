import Home from './components/Home';
import Products from './components/ListProducts'
import Cart from './components/Cart'

export const routes =[
    {
        path:'',
        name: 'homepage',
        component: Home
    },
    {
        path:'/products',
        name: 'products',
        component: Products
    },
    {
        path:'/cart',
        name: 'cart',
        component: Cart
    }
]