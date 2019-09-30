<template>

    <div class="painel">

      <h2 class="painel-titulo" @dblclick="visivel = !visivel">{{ titulo }}</h2>


      <transition name="painel-fade">

          <div class="painel-conteudo" v-show="visivel">
              <slot></slot>
          </div>

      </transition>


    </div>

</template>

<script>

export default {

  props: ['titulo', 'descricao'],

  data() {

    return { visivel: true }
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

 .painel {
    padding: 0 auto;
    border: solid 2px $Preto;
    display: inline-block;
    margin: 5px;
    box-shadow: 2px 2px 2px $Cinza;
    width: 200px;
    height: 299px;
    vertical-align: top;
    text-align: center;
  }

  .painel .painel-titulo {
    text-align: center;
    border-bottom: solid 2px $Preto;
    background: $Amarelo;
    margin: 0 0 15px 0;
    padding: 10px;
    text-transform: uppercase;
  }

  .painel-fade-enter, .painel-fade-leave-active {
    opacity: 0;
  }

  .painel-fade-enter-active, .painel-fade-leave-active {
    transition: opacity .2s;
  }


</style>