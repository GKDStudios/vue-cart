<template>
  <div>
  	<navBar></navBar>
    <h1 class="centralizado"><strong>Cadastro de Rações</strong></h1> <br>
    <h2 class="centralizado">{{ foto.titulo }}</h2>

    <h2 v-if="foto._id"class="centralizado t1">Alterando</h2>
    <h2 v-else class="centralizado t2">Incluindo</h2>
    <br>

    <form align="center" @submit.prevent="grava()">

        <div>

          <input data-vv-as="título" name="titulo" v-validate data-vv-rules="required|min:3|max:40" class="frml" v-model="foto.titulo" id="titulo" placeholder="Nome produto"> <br>

          <span class="erro" v-show="errors.has('titulo')">{{ errors.first('titulo') }}</span>
 
        </div> <br>

        <div>

          <input name="url" v-validate data-vv-rules="required" class="frml" v-model="foto.url" id="url" placeholder="URL imagem produto" autocomplete="off"> <br>

          <span class="erro" v-show="errors.has('url')">{{ errors.first('url') }}</span>

          <imgResponsiva class="ftCentro" v-show="foto.url" :url="foto.url" :titulo="foto.titulo" />

        </div> <br>

        <div>

          <input data-vv-as="descrição" name="descricao" v-validate data-vv-rules="required" class="frml" v-model="foto.descricao" id="descricao" placeholder="Descrição produto" autocomplete="off">  <br>

          <span class="erro" v-show="errors.has('descricao')">{{ errors.first('descricao') }}</span>

        </div> <br>

      <botao estilo="grava" rotulo="Gravar" tipo="submit" />

      <router-link :to="{ name: 'home2'}"><botao estilo="volta" rotulo="voltar" tipo="button"/></router-link>

    </form>
  </div>
</template>

<script>
import navBar from '../shared/navBar/navBar.vue';
import Botao from '../shared/botao/Botao.vue';
import ImagemResponsiva from '../shared/img-responsiva/ImagemResponsiva.vue'
import Foto from '../../domain/foto/Foto';
import FotoService from '../../domain/foto/fotoService';

export default {

  components: {

    'navBar' : navBar, 
    'botao' : Botao,
    'imgResponsiva' : ImagemResponsiva,

  },

  data() {

    return {

      foto: new Foto(),
      id: this.$route.params.id

    }
  },

  methods: {

    grava() {

      this.$validator.validateAll()
      .then(success => { if(success) 

        this.service.cadastra(this.foto)
        .then(() => {
        if(this.id) this.$router.push({ name: 'home2' });
        this.foto = new Foto();
      }, err => console.log(err));

      });

    }
  },

  created() {

    this.service = new FotoService(this.$resource);

    if(this.id) {

      this.service.busca(this.id).then(foto => this.foto = foto);

    }

  }

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

    .t1 {
      color: $Azul;
    }

    .t2 {
      color: $Verde;
    }

    .frml {
      border: solid 2px $Roxo;
      border-radius: 10px;
      width: 40%;
      text-align: center;
    }

    .ftCentro {
      margin-left: 43%;
    }

    .erro {
      color: $Vermelho;
    }
</style>