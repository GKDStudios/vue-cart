<template>
	<div>
		
		<navBar></navBar>

    <h2 class="centralizado">{{ mensagem }}</h2>

		<painel class="painel" :titulo="foto.titulo">
			
				<imgResponsiva class="imgResponsiva" :url="foto.url" :titulo="foto.titulo" />
				<p class="desc">{{ descricao }}</p>
        <router-link :to="{ name: 'carrinho'}"><botao estilo="adcCarrinho" class="adcCart" rotulo="Adicionar ao carrinho" tipo="button"/></router-link>

		</painel>

    <div class="botoes">

		  <router-link :to="{ name: 'home'}"><botao estilo="volta" rotulo="Voltar" tipo="button"/></router-link>

    </div>

	</div>

</template>

<script>
import painel from '../shared/painel/painel.vue';
import ImagemResponsiva from '../shared/img-responsiva/ImagemResponsiva.vue';
import navBar from '../shared/navBar/navBar.vue';
import Botao from '../shared/botao/Botao.vue';
import Foto from '../../domain/foto/Foto';
import FotoService from '../../domain/foto/fotoService';

export default {


  components: {

  	'painel' : painel,
    'imgResponsiva' : ImagemResponsiva,
    'navBar' : navBar, 
    'botao' : Botao, 
  
  },

  data() {

    return {

      foto: new Foto(),
      id: this.$route.params.id,
      descricao: '',
      mensagem: '',

    }
  },

  created() {

  	if(this.id) {

      this.service.busca(this.id).then(foto => this.foto = foto);

    }
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

	.centralizado {
      margin-top: 7px;
      text-align: center;
      font-size: 25px;
      font-weight: bold;
      font-color: $Vermelho;
    }

	.painel {
	  width: 60%;
	  margin-left: 20%;
	  margin-right: 10%;
	  margin-top: 5%;
	  margin-bottom: 10%;
	  border: solid 2px $Verde;

	  .imgResponsiva{
	  	width: 35%;
      height: auto;
      position: absolute;
	  }

    .desc {
      float: right;
      margin-right: 3%;
      clear: both;
    }

    .adcCart {
      float: right;
      margin-right: 2%;
      clear: both;
      margin-top: 19%;
    }
	}

  .botoes {
    margin-left: 40%;
    margin-right: 0;
  }

	
</style>