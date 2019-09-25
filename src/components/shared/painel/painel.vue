<template>

    <div class="painel">

      <h2 class="painel-titulo">{{ titulo }}</h2>
      <slot class="painel-conteudo">

      </slot>
    </div>

</template>

<script>

export default {

  props: ['titulo', 'descricao']
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

</style>