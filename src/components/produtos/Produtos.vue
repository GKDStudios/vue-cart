<template>
	<div>
		
		<navBar></navBar>

		<h1 class="centralizado">{{ foto.titulo }}</h1>

		<div class="Painel">
			
			<imgResponsiva class="imgResponsiva" :url="foto.url" :titulo="foto.titulo" />
			<p class="desc" v-model="foto.descricao" />

		</div>

	</div>

</template>

<script>
import ImagemResponsiva from '../shared/img-responsiva/ImagemResponsiva.vue';
import navBar from '../shared/navBar/navBar.vue';
import Botao from '../shared/botao/Botao.vue';
import Foto from '../../domain/foto/Foto';
import FotoService from '../../domain/foto/fotoService';

export default {


  components: {

    'imgResponsiva' : ImagemResponsiva,
    'navBar' : navBar, 
    'botao' : Botao, 
  
  },

  data() {

    return {

      foto: new Foto(),
      id: this.$route.params.id

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
    }

	.Painel {
	  margin-left: 30%;
	  margin-right: 10%;
	  margin-top: 5%;
	  margin-bottom: 10%;
	  border: solid 2px $Verde;
	  border-radius: 10px;

	  .imgResponsiva{
	  	width: 50%;
	  }
	}

	
</style>