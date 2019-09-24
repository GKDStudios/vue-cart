<template>
  <div>
  	<navBar></navBar>
    <h1 class="centralizado"><strong>Cadastro de Rações</strong></h1> <br>
    <h2 class="centralizado">{{ foto.titulo }}</h2>

    <form align="center" @submit.prevent="grava()">

        <div>

          <input class="frml" v-model="foto.titulo" id="titulo" placeholder="Nome produto">

        </div> <br>

        <div>

          <input class="frml" v-model.lazy="foto.url" id="url" placeholder="URL imagem produto" autocomplete="off">
          <imgResponsiva v-show="foto.url" :url="foto.url" :titulo="foto.titulo" />

        </div> <br>

        <div>

          <input class="frml" v-model="foto.descricao" id="descricao" placeholder="Descrição produto" autocomplete="off">

        </div> <br>

      <botao estilo="grava" rotulo="Gravar" tipo="submit" />

      <router-link to="/"><botao estilo="volta" rotulo="voltar" tipo="button"/></router-link>

    </form>
  </div>
</template>

<script>
import navBar from '../shared/navBar/navBar.vue';
import Botao from '../shared/botao/Botao.vue';
import ImagemResponsiva from '../shared/img-responsiva/ImagemResponsiva.vue'

export default {

  components: {

    'navBar' : navBar, 
    'botao' : Botao,
    'imgResponsiva' : ImagemResponsiva,

  },

  data() {

    return {

      foto: {
        titulo: '',
        url: '',
        descricao: ''

      }
    }
  },

  methods: {

    grava() {

      console.log(this.foto);
      this.foto = {
        titulo: '',
        url: '',
        descricao: '',
      };
    }
  },

};

</script>
<style scoped lang="scss">
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

    .centralizado {
      margin-top: 7px;
      text-align: center;
      font-size: 25px;
    }
    .frml {
      border: solid 2px $Roxo;
      border-radius: 10px;
      width: 40%;
      text-align: center;
  }
</style>