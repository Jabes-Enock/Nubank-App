<template>
    <div class="container">
        <div class="container" @click="$emit('changePopupState')">
        </div>
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
        left: 0;
        z-index: 0;
    }

    .popup {
        width: 80%;
        max-width: 400px;
        background: white;
        text-align: center;
        padding: 2rem;
        border-radius: 10px;
        z-index: 10;
        margin-bottom: 2rem;
    }

    .popup-h2 {
        margin: 1.5rem 0;
        letter-spacing: 1px;
        font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
        color: var(--color-primary);
    }

    .popup-p {
        margin: 1.5rem 0;
        letter-spacing: 1px;
        font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
        color: gray;
        font-size: 1rem;
    }
</style>