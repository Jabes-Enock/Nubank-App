<template>
    <div class="container meus-dados">
        <div class="meus-dados-message">
            <div class="meus-dados-message-chevron">
                <router-link to="/home">
                    <svg xmlns="http://www.w3.org/2000/svg" width="30px" fill="none" viewBox="0 0 24 24" stroke="white" stroke-width="5">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M15 19l-7-7 7-7" />
                    </svg>
                </router-link>
            </div>
            
            <div class="meus-dados-message-logo">
               <Logo /> 
            </div>
            
            <div class="custom-shape-divider-bottom-1646260020">
                <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
                    <path d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z" opacity=".25" class="shape-fill"></path>
                    <path d="M0,0V15.81C13,36.92,27.64,56.86,47.69,72.05,99.41,111.27,165,111,224.58,91.58c31.15-10.15,60.09-26.07,89.67-39.8,40.92-19,84.73-46,130.83-49.67,36.26-2.85,70.9,9.42,98.6,31.56,31.77,25.39,62.32,62,103.63,73,40.44,10.79,81.35-6.69,119.13-24.28s75.16-39,116.92-43.05c59.73-5.85,113.28,22.88,168.9,38.84,30.2,8.66,59,6.17,87.09-7.5,22.43-10.89,48-26.93,60.65-49.24V0Z" opacity=".5" class="shape-fill"></path>
                    <path d="M0,0V5.63C149.93,59,314.09,71.32,475.83,42.57c43-7.64,84.23-20.12,127.61-26.46,59-8.63,112.48,12.24,165.56,35.4C827.93,77.22,886,95.24,951.2,90c86.53-7,172.46-45.71,248.8-84.81V0Z" class="shape-fill"></path>
                </svg>
            </div>
        </div>
        <div class="meus-dados-section">
          <UpdateData />  
        </div>
        <AlertCard @changePopupState="changePopupState" statusMessage="Atualizado com sucesso!!" explicationMessage="Seu email foi alterado" v-if="$openPopupMeusDados">
            <svg xmlns="http://www.w3.org/2000/svg" width="100" fill="none" viewBox="0 0 24 24" stroke="gray" stroke-width="1">
            <path stroke-linecap="round" stroke-linejoin="round" d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12" />
            </svg>
        </AlertCard>
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import {  UpdateData, AlertCard } from '../molecules'
import { Logo } from '../atoms'
import  store  from '../../store'

export default defineComponent({
    data() {
        return {
            store
        }
    },

    components: {
       UpdateData,
       Logo,
       AlertCard
    },

    
   methods: {
       changePopupState() {
           store.commit('CLOSE_POPUP_MEUS_DADOS')
       }
   },

   computed: {
       $openPopupMeusDados(){
           return store.getters.$openPopupMeusDados
       }
   }

})
</script>

<style scoped>
.meus-dados {
    height: 100%;
    min-height: 100vh;
}

.meus-dados-message {
    position: relative;
    background: var(--color-primary);
    display: grid;
    place-items: center;
    padding-top: 2rem;
}

.meus-dados-message-chevron {
    width: 100%;
    margin-left: 1.5rem;
}

.meus-dados-message-logo {
    width: 50%;
    max-width: 200px;
    margin: 2rem 0 7rem;
}

.custom-shape-divider-bottom-1646260020 {
    position: absolute;
    bottom: -10px;
    left: 0;
    width: 100%;
    overflow: hidden;
    line-height: 0;
    transform: rotate(180deg);
}

.custom-shape-divider-bottom-1646260020 svg {
    position: relative;
    display: block;
    width: calc(132% + 1.3px);
    height: 63px;
}

.custom-shape-divider-bottom-1646260020 .shape-fill {
    fill: #FFFFFF;
}

.meus-dados-section {
    width: 100%;
    max-width: 400px;
    margin: 0 auto
}
</style>