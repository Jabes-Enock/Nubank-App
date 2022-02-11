<template>
    <div class="login-data">
        <div class="login-data-logo-nubank">
          <Logo />  
        </div>
        <div class="login-data-inputs">
            <LoginData />
        </div>
        
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { LoginData } from '../molecules'
import { Logo } from '../atoms'


export default defineComponent({
    components: {
        LoginData,
        Logo
    }
})
</script>

<style scoped>
.login-data {
    width: 90%;
    max-width: 400px;
    
}

.login-data-logo-nubank {
    max-width: 150px;
    margin: 1rem auto;
}

.login-data-inputs {
    background: var(--color-second);
    padding: 1rem;
    border-radius: 0.7rem;
}
</style>