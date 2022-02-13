<template>
    <div class="login-data">
        <h1>Faça seu login</h1>
        <form class="login-data-form">
            <InputItem textType="number" placeholderData="CPF" />
            <InputItem textType="password" placeholderData="Senha" />
            <ButtonStyled text="Entrar" bgColor="primary-color" textColor="white"/>
            <div class="login-data-link-to-cadastro">
                <LinkStyled  path="/cadastro" textColor="purple" text="Cadastrar Usuário"/>
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
    padding: 1.5rem;
}

.login-data h1
 {
    text-align: center;
    margin-bottom: 3rem;
}

.login-data-form {
    max-width: 100%;
    text-align: center;
}

.login-data-link-to-cadastro {
    text-align: center;
    margin: 2rem;
}



.login-data-link-to-cadastro .chevron-right {
    width: 30px;
}

.login-data-link-to-cadastro .link-styled {
    font-size: 1rem;
    letter-spacing: 2px;
    padding: 2px 5px;
    font-weight: bold;
}

.login-data-link-to-cadastro .link-styled:hover {
    color: black;
}



</style>