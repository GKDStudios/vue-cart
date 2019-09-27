<template>  
  <div>
    <navBar></navBar> 
    <main>

      <p v-show="mensagem" class="errMensage">{{ mensagem }}</p>

      <input type="search" class="filtro" @input="filtro = $event.target.value" placeholder="Busque pela sua ração">

      <ul class="lista-fotos">
        <li class="lista-fotos-item" v-for="foto in fotosComFiltro">

          <painel class="painel" :titulo="foto.titulo">

            <imgResponsiva :url="foto.url" :titulo="foto.titulo" />

            <botao rotulo="Remover" tipo="button" estilo="deleta" @click.native="remove(foto)" />

            <router-link :to="{ name: 'cadastro', params: { id: foto._id}}"><botao rotulo="Alterar" tipo="button" estilo="alterar" /></router-link>

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
import FotoService from '../../domain/foto/fotoService';

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
      mensagem: '',

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

    remove(foto) { 

      alert('*VOCÊ ESTÁ EXCLUINDO ESTE ITEM DE SUA LISTA!*');
       
      this.service.apaga(foto._id)
        .then(()=> {
          let indice = this.fotos.indexOf(foto);
          this.fotos.splice(indice, 1);
          this.mensagem = 'Foto removida com sucesso';
        }, err => {
          this.mensagem = err.message;
        });
    }
  },

  created() {


    this.service = new FotoService(this.$resource);

    this.service.lista().then(fotos => this.fotos = fotos, err => this.mensagem = err.message);

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
    margin-left: 4%;
    list-style: none;
  }

  .lista-fotos .lista-fotos-item {
    display: inline-block;
  }

  .filtro {
    margin-top: 7px;
    margin-left: 4%;
    margin-bottom: 7px;
    padding: 1px;
    display: block;
    width: 20%;
    border: solid 2px $Cinza;
    border-radius: 5px;
  }

  .errMensage {
    text-align: center;
    color: $Vermelho;  
    font-weight: bold;
  }

  .painel {
    height: 337px;
  }

}
</style>