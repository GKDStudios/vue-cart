<template>
    <button :class="estiloDoBotao" :type="tipo" @click="disparaAcao()">{{rotulo}}</button>
</template>
<script>
export default {

    props: {
       tipo: {
           type: String, 
           required: true
       },

       rotulo: {
           type: String, 
           required: true
       },

       confirmacao: Boolean,
       estilo: String
    },

    methods: {

        disparaAcao() {

            console.log(typeof(this.confirmacao));

           if(this.confirmacao) {

               if(confirm('Confirma operacao?')) {
                    this.$emit('botaoAtivado');
               }
               return;
           }
           this.$emit('botaoAtivado');
       }
    },

    computed: {

        estiloDoBotao() {

           if(this.estilo == 'padrao') return 'botao botao-padrao';

           if(this.estilo == 'alterar') return 'botao botao-alterar';

           if(this.estilo == 'deleta') return 'botao botao-deleta';

           if(this.estilo == 'grava') return 'botao botao-grava';

           if(this.estilo == 'volta') return 'botao botao-volta';
        },
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
$Laranja:   #FF8C00;

    .botao {
        display: inline-block;
        padding: 5px;
        width: 100%;
        font-size: 1.2em;
    }

    .botao-padrao {
        background: $Amarelo;
        color: $Branco;
        opacity: 0;
    }

        .botao-padrao:hover {
        opacity: 1;
    }

    .botao-alterar {
        width: 100%;
        height: auto;
        background: $Azul;
        color: $Branco;            
    }

    .botao-deleta {
        width: 100%;
        height: auto;
        background: $Vermelho;
        color: $Branco;
    }

    .botao-grava {
        width: 10%;
        height: auto;
        background: $Verde;
        color: $Branco;
        border-radius: 10px;
    }

    .botao-volta {
        width: 10%;
        height: auto;
        background: $Laranja;
        color: $Branco;
        border-radius: 10px;
    }

</style>