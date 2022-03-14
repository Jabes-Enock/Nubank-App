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
    width: 100%;
    max-width: 400px;
}

.login-data-logo-nubank {
    max-width: 120px;
    margin: 2rem auto;
}

.login-data-inputs {
    max-width: 100%;
    background: var(--color-second);
    border-top-left-radius: 5rem;
    border-bottom-right-radius: 5rem;
}

@media only screen and (min-width: 500px) {
    .login-data-inputs {
        border-radius: 0.7rem;
    }
}
</style>