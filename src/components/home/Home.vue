<template>  
  <div>
    <navBar></navBar> 
    <main>

      <input type="search" class="filtro" @input="filtro = $event.target.value" placeholder="Busque pela sua ração">

      <ul class="lista-fotos">
        <li class="lista-fotos-item" v-for="foto in fotosComFiltro">

          <painel :titulo="foto.titulo">
            <imgResponsiva :url="foto.url" :titulo="foto.titulo" />
            <botao rotulo="Comprar" tipo="button" estilo="padrao" @click.native="comprar()" />
          </painel>

        </li>
      </ul>

    </main>
  </div>
</template>

<script>
import painel from '../shared/painel/painel.vue';
import ImagemResponsiva from '../shared/img-responsiva/ImagemResponsiva.vue';
import navBar from '../shared/navBar/navBar.vue';
import Botao from '../shared/botao/Botao.vue';

export default {


  components: {

    'painel' : painel,
    'imgResponsiva' : ImagemResponsiva,
    'navBar' : navBar, 
    'botao' : Botao, 
  },

  data () {
    return {
      titulo: "Alurapic",
      fotos: [],
      filtro: '',

    }
  },
  computed: {
    fotosComFiltro() {
      if (this.filtro) {

        let exp = new RegExp(this.filtro.trim(), 'i');

        return this.fotos.filter(foto => exp.test(foto.titulo));
      } else {
        return this.fotos;
      }

    }
  },

  methods: {
    comprar() {

      this.$router.push({ path: '/produto' })
    }
  },

  created() {

    this.$http.get('http://localhost:3000/v1/fotos')
      .then(res => res.json()).then(fotos => this.fotos = fotos, err => console.log(err));

  },

};

</script>

<style lang="scss">
$Preto : #000;
$Amarelo : #FFD700;
$Branco : #FFF;
$Cinza : #808080;
$Vermelho : #8B0000;
$Verde : #2E8B57;
$Azul : #4682B4;
$Roxo : #4B0082;
$Roxo2 : #7B68EE;
$Rosa:  #FF69B4;

main {
  .lista-fotos {
    list-style: none;
  }

  .lista-fotos .lista-fotos-item {
    display: inline-block;
  }

  .filtro {
    margin-top: 7px;
    margin-left: 7px;
    margin-bottom: 7px;
    padding: 1px;
    display: block;
    width: 20%;
    border: solid 2px $Cinza;
    border-radius: 5px;
  }

}
</style>