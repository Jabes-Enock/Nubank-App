<template>
    <div class="login-data">
        <h1>Faça seu login</h1>
        <form class="login-data-form">
            <InputItem type="number" placeholderData="CPF" />
            <InputItem type="password" placeholderData="Senha" />
            <ButtonStyled text="Entrar" bgColor="primary-color" textColor="white"/>
            <div class="login-data-link-to-cadastro">
                <LinkStyled  to="/cadastro" textColor="purple" text="Cadastrar Usuário"/> 
            </div>
        </form>
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { InputItem, ButtonStyled, LinkStyled } from '../atoms'


export default defineComponent({
    components: {
        InputItem,
        ButtonStyled,
        LinkStyled
    }
})
</script>

<style scoped>
.login-data {
    width: 100%;
    display: grid;
    place-items: center;
    padding: 0 1rem;
}

.login-data h1
 {
    text-align: center;
    margin-bottom: 3rem;
}

.cadastro-data-form {
    width: 50%;
    text-align: center;
}

.login-data-link-to-cadastro {
    text-align: center;
    margin: 2rem;
}

.login-data-link-to-cadastro .link-styled {
    font-size: 1rem;
    letter-spacing: 2px;
    border-bottom: 1px solid var(--color-primary);
    padding: 2px 5px;
}

.login-data-link-to-cadastro .link-styled:hover {
    color: black;
    border-bottom: 1px solid black;
}
</style>