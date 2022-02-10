<template>
    <div class="login-card-done">
        <LoginCard />
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { LoginCard } from '../organism'

export default defineComponent({
    components: {
        LoginCard
    }
})
</script>

<style scoped>
.login-card-done {
    width: 100%;
    min-height: 100vh;
    display: grid;
    place-items: center;
    background: var(--color-primary);
}
</style>