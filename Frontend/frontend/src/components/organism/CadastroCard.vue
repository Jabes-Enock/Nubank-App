<template>
    <div class="cadastro-data">
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

.cadastro-data-logo-nubank {
    max-width: 120px;
    margin: 3rem auto;
}

.cadastro-data-inputs {
    width: 100%;
    background: var(--color-second);
    padding: 4rem 0;
    border-top-left-radius: 10rem;
    margin: auto;
}

@media only screen and (min-width: 700px) {
    .cadastro-data-inputs {
        border-radius: 0.7rem;
    }
}

</style>