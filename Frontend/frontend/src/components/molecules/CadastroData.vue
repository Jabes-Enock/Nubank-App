<template>
    <div class="cadastro-data">
        <h1>Faça seu Cadastro</h1>
        <form class="cadastro-data-form">
            <InputItem type="text" placeholderData="Nome" />
            <InputItem type="text" placeholderData="Sobrenome" />
            <InputItem type="number" placeholderData="CPF" />
            <InputItem type="text" placeholderData="E-mail" />
            <InputItem type="password" placeholderData="Senha" />

            <ButtonStyled text="Cadastrar" bgColor="primary-color" textColor="white"/>
            
        </form>
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { InputItem, ButtonStyled} from '../atoms'


export default defineComponent({
    components: {
        InputItem,
        ButtonStyled
    }
})
</script>

<style scoped>
.cadastro-data {
    width: 100%;
    display: flex;
    flex-direction: column;
    margin: 0 auto;
}

.cadastro-data h1
 {
    text-align: center;
    margin-bottom: 3rem;
}

.cadastro-data-form {
    width: 100%;
    text-align: center;
}



</style>