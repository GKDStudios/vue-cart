<template>
	<nav class="navBar">

      <img class="symbol" src="https://image.flaticon.com/icons/png/512/17/17479.png" />

      <span class="gs"><strong>GS Rações</strong></span>

       <ul class="bar"> <li> <router-link :to=" { name: 'home' } "> <strong> Home </strong> </router-link> </li> </ul>

      <router-link class="cartBuy" to="#"><img src="https://image.flaticon.com/icons/png/512/34/34562.png" /></router-link>
    </nav>
</template>

<script>

export default {

};

</script>
<style lang="scss">
$Preto : #000;
$Amarelo : #FFD700;
$Branco : #FFF;
$Cinza : #808080;


  .navBar {
    background-color: $Amarelo;
    color: $Preto;
    font-size: 40px;
    font-family: arial;

    .symbol {
      margin-top: 7px;
      margin-left: 7px;
      margin-right: 7px;
      float: left;
      width: 40px;
      height: auto;
    }

    .gs {
      margin-top: 10px;
      margin-left: 4px;
      margin-right: 6px;
    }

    .bar {
      font-size: 15px;
      padding: 2px;
      border: solid 2px $Preto;
      border-radius: 5px;
      position: absolute;
      top: 20px;
      left: 290px;
    }

    .bar:hover{
      color: $Branco;
      border: solid 2px $Branco;
      background-color: $Cinza; 
    }

    .cartBuy {
      margin-top: 7px;
      margin-right: 7px;
      margin-left: 7px;
      float: right;
      position: absolute;
      right: 4px;
      top: 10px;
      width: 30px;
      height: auto;
    }
}
   
</style>