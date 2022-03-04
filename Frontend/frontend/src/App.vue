<template>
  <router-view v-slot="{ Component }">
    <transition>
    <component :is="Component" />
    </transition>
  </router-view>
</template>

<script lang="ts">

import { defineComponent} from 'vue'

export default defineComponent({
  
})

</script>

<style scoped>


@media only screen and (max-width: 500px){
.v-enter-from {
    transform: translateX(100%);
}

.v-enter-active {
    transition: 0.25s ease-out;
}


} 

@media only screen and (min-width: 800px){
.v-enter-from,
.v-leave-to {
  opacity: 0;
}

.v-enter-active,
.v-leave-active {
  transition: opacity 0.1s ease;
}
} 
</style>
