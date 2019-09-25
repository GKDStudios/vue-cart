<template>
	<div>

		<navBar></navBar>

		<painel class="painel-cart">

			<imgResposvisa class="img-pequena" :url="foto.url" :titulo="foto.titulo" />
			
		</painel>

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


};	
</script>

<style lang="scss">

	



	.painel-cart {
		margin-left: 10%;
		margin-right: 10%;
		margin-top: 10%;
		margin-bottom: 20%;
		width: 80%;
		height: 10%;

		.img-pequena {
			width: 15%;
			height: auto;
		}
	}
	
</style>