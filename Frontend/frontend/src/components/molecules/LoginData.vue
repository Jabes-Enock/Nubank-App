<template>
    <div class="login-data">
        <h1>Faça seu login</h1>
        <InputItem type="number" placeholderData="CPF" />
        <InputItem type="text" placeholderData="Senha" />

        <ButtonStyled text="Entrar" bgColor="primary-color" textColor="white"/>
        <div class="login-data-link-to-cadastro">
           <LinkStyled  to="/cadastro" textColor="purple" text="Cadastrar Usuário"/> 
        </div>
        
        
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
    display: flex;
    flex-direction: column;
}

.login-data h1
 {
    text-align: center;
}

.login-data-link-to-cadastro {
    text-align: center;
    margin: 2rem;
}

.login-data-link-to-cadastro .link-styled {
    font-size: 1rem;
}

.login-data-link-to-cadastro .link-styled:hover {
    color: black;
}
</style>