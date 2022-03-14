<template>
    <div class="cadastro-data">
        <div class="cadastro-data-message-chevron">
                <router-link to="/">
                    <svg xmlns="http://www.w3.org/2000/svg" width="30px" fill="none" viewBox="0 0 24 24" stroke="white" stroke-width="5">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M15 19l-7-7 7-7" />
                    </svg>
                </router-link>
        </div>
        <div class="cadastro-data-logo-nubank">
          <Logo />  
        </div>
        <div class="cadastro-data-inputs">
            <CadastroData />
        </div>
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { CadastroData } from '../molecules'
import { Logo } from '../atoms'


export default defineComponent({
    components: {
        Logo,
        CadastroData
    }
})
</script>

<style scoped>
.cadastro-data {
    width: 100%;
    max-width: 400px;
}
.cadastro-data-message-chevron {
    margin: 1rem 0.3rem;
}
.cadastro-data-logo-nubank {
    max-width: 120px;
    margin: 1rem auto 3rem;
}

.cadastro-data-inputs {
    width: 100%;
    background: var(--color-second);
    padding: 4rem 0;
    border-radius: 0.7rem;
    margin: auto;
    margin-bottom: 2rem;
}


</style>