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
.v-enter-from,
.v-leave-to {
  opacity: 0;
}

.v-enter-active,
.v-leave-active {
  transition: opacity 0.25s ease;
}
</style>
