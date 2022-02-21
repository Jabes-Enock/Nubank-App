<template>
    <div class="container" @click="$emit('changePopupState')">
        <div class="popup">
            <div>
               <slot /> 
            </div>
            
            <h2 class="popup-h2">{{statusMessage}}</h2>
            <p class="popup-p">{{explicationMessage}}</p>
            <ButtonStyled @eventClick="$emit('changePopupState')" text="Ok" bgColor="primary-color" textColor="white" typeText="button"/>
        </div>
        
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { ButtonStyled } from '../atoms';

export default defineComponent({
    
   props: {
       statusMessage: {
           type: String,
           required: true,
       },
       explicationMessage: {
           type: String,
           required: true,
       },
   },

   components: {
       ButtonStyled
   }
})
</script>

<style scoped>
    .container {
        width: 100vw;
        min-height: 100vh;
        background: rgb(86,86,86, 0.3);
        backdrop-filter: blur(10px);
        display: grid;
        place-items: center;
        position: fixed;
        top: 0;
        left: 0
    }

    .popup {
        width: 80%;
        max-width: 400px;
        background: white;
        text-align: center;
        padding: 2rem;
        border-radius: 10px;
    }

    .popup-h2 {
        margin: 1.5rem 0;
        letter-spacing: 1px;
        font-weight: bold;
        font-family: 'Courier New', Courier, monospace;
        color: var(--color-primary);
    }

    .popup-p {
        margin: 1.5rem 0;
        letter-spacing: 1px;
        font-weight: bold;
        font-family: monospace;
        color: gray;
        font-size: 1rem;
    }
</style>