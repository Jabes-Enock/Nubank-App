<template>
    <div class="login-data">
        <h1>Faça seu login</h1>
        <InputItem type="number" placeholderData="CPF" />
        <InputItem type="text" placeholderData="Senha" />

        <ButtonStyled text="Entrar" bgColor="primary-color" textColor="white"/>
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { InputItem, ButtonStyled } from '../atoms'


export default defineComponent({
    components: {
        InputItem,
        ButtonStyled
    }
})
</script>

<style scoped>
.login-data {
    width: 100%;
    display: flex;
    flex-direction: column;
}

.login-data h1 {
    text-align: center;
}
</style>