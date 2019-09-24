import Home from './components/home/Home.vue';
import Cadastro from './components/cadastro/Cadastro.vue';
import Produtos from './components/produtos/Produtos.vue';

export const routes = [

	{ path: '', component: Home, titulo: 'Home' },
    { path: '/cadastro', component: Cadastro, titulo: 'Cadastro' },
    { path: '/produto', component: Produtos, titulo: 'Produto' },

];