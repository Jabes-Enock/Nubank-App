<template>
    <div class="container">
        <LoginCardDone />
        <AlertCard @changePopupState="changePopupState" v-if="$openPopupLogin" statusMessage="Oooops!!!!" explicationMessage="Usuário ou senha inválido ou ainda usuário não cadastrado"> 
            <div class="icon">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="gray">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
                </svg>
            </div>
        </AlertCard>
    </div>
</template>
 
<script lang="ts">
import { defineComponent } from 'vue'
import {LoginCardDone } from '../components/template'
import { AlertCard } from '../components/molecules'
import store from '../store'

export default defineComponent({
    data(){
        return { store}
    },

   components: {
       LoginCardDone,
       AlertCard
   },
   
   methods: {
       changePopupState() {
           store.commit('CLOSE_POPUP')
       }
   },

   computed: {
       $openPopupLogin(){
           return store.getters.$openPopupLogin
       }
   }
})
</script>

<style scoped>
    .icon {
        width: 50px;
        height: 50px;
        border: 3px solid gray;
        margin: 0 auto;
        border-radius: 50%;
        padding:0.3rem
    }
</style>