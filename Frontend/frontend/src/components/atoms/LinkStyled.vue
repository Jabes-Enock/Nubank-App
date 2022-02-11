<template>
   <router-link :class="['link-styled',textColor ]" :to="path">{{text}}</router-link>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

type textColor = 'Black' | 'white' | 'purple'

export default defineComponent({
   props: {
      path: {
         type: String,
         required: true
      },
      text: {
         type: String,
         required: true,
      },
      textColor: {
         type: String,
         default: 'black',
         validator: (value: textColor) => {
            return ['black', 'white', 'purple'].includes(value)
         }
      }
   }
})
</script>

<style scoped>
.link-styled {
   width: 100%;
}

.black {
    color: black;
}

.white {
    color: white;
}

.purple {
    color: var(--color-primary);
}
</style>