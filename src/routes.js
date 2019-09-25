import Home from './components/home/Home.vue';
import Cadastro from './components/cadastro/Cadastro.vue';
import Produtos from './components/produtos/Produtos.vue';
import Cart from './components/cart/Cart.vue';
import HomeAdmin from './components/home/HomeAdmin.vue'

export const routes = [

	{ path: '', name: 'home', component: Home, titulo: 'Home', menu: true },
    { path: '/home/admin', name: 'home2', component: HomeAdmin, titulo: 'Home-Admin', menu: true }, 
    { path: '/cadastro', name: 'cadastro', component: Cadastro, titulo: 'Cadastro', menu: true },
    { path: '/cadastro/:id', name: 'altera', component: Cadastro, titulo: 'Cadastro', menu: false },
    { path: '/produto/:id', name: 'produto', component: Produtos, titulo: 'Produto', menu: true },
    { path: '/carrinho', name: 'carrinho', component: Cart, titulo: 'Carrinho', menu: true },
    { path: '*', component: Home, menu: true }


];