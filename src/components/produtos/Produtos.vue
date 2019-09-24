<template>
	<div>
		
		<navBar></navBar>


		<div class="foto">
			<botao rotulo="Alterar" tipo="button" @botaoAtivado="" estilo="alterar" /> <br>


			<botao rotulo="Deleta" tipo="button" confirmacao="false" @botaoAtivado="remove(foto)" estilo="deleta" /> <br>

		</div>
	</div>
</template>

<script>
import ImagemResponsiva from '../shared/img-responsiva/ImagemResponsiva.vue';
import navBar from '../shared/navBar/navBar.vue';
import Botao from '../shared/botao/Botao.vue';

export default {


  components: {

    'imgResponsiva' : ImagemResponsiva,
    'navBar' : navBar, 
    'botao' : Botao, 
  
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

.foto{
	margin-top: 20%;
	margin-left: 30%;
	margin-right: 1%;
	margin-bottom: 20px;
	width: 400px;
	height: 600px;
}
	
</style>