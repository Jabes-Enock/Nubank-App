<template>
    <div class="cadastro-card-done">
        <CadastroCard />
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { CadastroCard } from '../organism'

export default defineComponent({
    components: {
        CadastroCard
    }
})
</script>

<style scoped>
.cadastro-card-done {
    width: 100%;
    min-height: 100vh;
    display: grid;
    place-items: center;
    background: var(--color-primary);
}
</style>