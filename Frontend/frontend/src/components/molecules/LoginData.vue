<template>
    <div class="login-data">
        <h1>Faça seu login</h1>
        <form class="login-data-form">
            <input v-model="form.CPF" class="login-data-form-input" type="number" placeholder="CPF" required>
            <input v-model="form.senha" class="login-data-form-input" type="password" placeholder="Senha" required>
            <ButtonStyled @eventClick="verifyUser" text="Entrar" bgColor="primary-color" textColor="white" typeText="submit"/>
            <div class="login-data-link-to-cadastro">
                <LinkStyled  path="/cadastro" textColor="purple" text="Cadastrar Usuário"/>
            </div>
        </form>
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { ButtonStyled, LinkStyled } from '../atoms'
import store from '../../store'

export default defineComponent({

    data(){
        return {
            form: {
                CPF: '',
                senha: ''
            }
        }
    },
    components: {
        ButtonStyled,
        LinkStyled
    },

    methods: {
        verifyUser(){
            store.dispatch('verifyUser', this.form)    
        }
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
    font-weight: lighter;
}

.login-data-form {
    max-width: 100%;
    text-align: center;
}

.login-data-form-input {
    width: 100%;
    border: 1px solid var(--bg-gray);
    padding: 1rem;
    margin-bottom: 1rem;
    outline: none;
    border-radius: 5px;
    font-size: 1rem;
}

.login-data-form-input:focus {
    border: 1px solid var(--color-primary);
    box-shadow: 0 0 5px 0 var(--color-primary) ;
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