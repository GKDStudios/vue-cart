<template>
	<div>
		
		<navBar></navBar>

		<painel class="painel" :titulo="foto.titulo">
			
				<imgResponsiva class="imgResponsiva" :url="foto.url" :titulo="foto.titulo" />
				<p class="desc">{{ descricao }}</p>

		</painel>

		<botao rotulo="Remover" tipo="button" estilo="deleta" @click.native="remove(foto)" />

		 <router-link :to="{ name: 'home'}"><botao estilo="volta" rotulo="voltar" tipo="button"/></router-link>

		  <router-link :to="{ name: 'home'}"><botao estilo="volta" rotulo="voltar" tipo="button"/></router-link>

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
      descricao: 'url.descricao',

    }
  },

   methods: {

    remove(foto) {

      this.service.apaga(foto._id).then(() => {

        let indice =this.fotos.indexOf(foto); 
        this.fotos.splice(indice, 1);
        this.mensagem = 'Foto removida com sucesso!';

      }, err => {

        console.log(err);
        this.mensagem = 'Não foi possivel remover a foto!';

      });
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

	.painel {
	  width: 60%;
	  margin-left: 20%;
	  margin-right: 10%;
	  margin-top: 5%;
	  margin-bottom: 10%;
	  border: solid 2px $Verde;

	  .imgResponsiva{
	  	width: 50%;
	  }
	}

	
</style>