<template>
    <input :type="textType" :placeholder="placeholderData" class="input-item">
</template>

<script lang="ts"> 
import { defineComponent } from 'vue'

export default defineComponent({
    props: {
        placeholderData: {
            type: String,
            required: true
        },
        textType: {
            type: String,
            required: true
        }
    }
})
</script>

<style scoped>
.input-item {
  width: 100%;
  border: none;
  border-bottom: 1px solid rgb(86, 86, 86, 0.3);
  outline: none;
  padding: 8px 10px;
  margin-bottom: 30px;
  font-size: 1.5rem;
}

.input-item:focus {
  border-bottom: 1px solid rgb(240, 41, 41,0.5);
}
</style>