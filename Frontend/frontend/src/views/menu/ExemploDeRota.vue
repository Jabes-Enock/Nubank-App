<template>
    <div class="container">
        <transition>
            <div class="exemplo-de-rota">
            <div class="exemplo-de-rota-header">
                <router-link to="/home">
                    <svg xmlns="http://www.w3.org/2000/svg" width="30px" fill="none" viewBox="0 0 24 24" stroke="black" stroke-width="5">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M15 19l-7-7 7-7" />
                    </svg>
                </router-link>
                <h1>Rota Qualquer</h1>
            </div>

            </div>
        </transition>
    </div>    
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({

})
</script>

<style scoped>
.exemplo-de-rota-header {
    display: flex;
    align-items: center;
    width: 100%;
}

.exemplo-de-rota-header h1 {
    width: 100%;
    text-align: center;
}

@media only screen and (max-width: 800px){
.v-enter-from,
.v-leave-to {
    transform: translateX(100%);
}
.v-enter-active {
    transition: 0.25s ease-out 0.25s;
}

.v-leave-active {
    transition: ease-out ;
}
}
</style>