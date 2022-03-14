<template>
    <div class="container">
        <transition>
            <MeusDados />
        </transition>  
    </div>
    
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { MeusDados } from '../../components/organism'

export default defineComponent({
    components: {
        MeusDados
    }
})
</script>

<style scoped>
    
@media only screen and (max-width: 800px){
.v-enter-from,
.v-leave-to {
    transform: translateX(100%);
}
.v-enter-active {
    transition: 0.25s ease-out 0.25s;
}

.v-leave-active {
    transition: ease-out;
}
}
</style>