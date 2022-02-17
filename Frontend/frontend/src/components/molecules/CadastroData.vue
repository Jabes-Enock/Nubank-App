<template>
    <div class="cadastro-data">
        <h1>Faça seu Cadastro</h1>
        <form class="cadastro-data-form">
            <input v-model="form.nome" class="cadastro-data-form-input" type="text" placeholder="Digite seu nome">
            <input v-model="form.sobrenome" class="cadastro-data-form-input" type="text" placeholder="Digite seu sobrenome">
            <input v-model="form.CPF" class="cadastro-data-form-input" type="number" placeholder="CPF: xxxxxxxxxxx">
            <input v-model="form.email" class="cadastro-data-form-input" type="text" placeholder="Email: fulanodetal@email.com">
            <input v-model="form.senha" class="cadastro-data-form-input" type="password" placeholder="Senha: **********">

            <ButtonStyled @click="registerUser" text="Cadastrar" bgColor="primary-color" textColor="white"/>
            
        </form>
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { ButtonStyled} from '../atoms'
import axios from '../../Utils/axios'

export default defineComponent({

    data(){
        return {
            form: {
                nome:'',
                sobrenome:'',
                CPF:'',
                email:'',
                senha: ''
            }
        }
    },
    components: {
        ButtonStyled
    },

    methods: {
        async registerUser() {
           await axios.post('/cadastrar', this.form)
        },
    }
})
</script>

<style scoped>
.cadastro-data {
    width: 100%;
    display: flex;
    flex-direction: column;
    margin: 0 auto;
    padding: 1rem;
}

.cadastro-data h1
 {
    text-align: center;
    margin-bottom: 3rem;
    font-weight: lighter;
}

.cadastro-data-form {
    width: 100%;
    text-align: center;
}

.cadastro-data-form-input {
    width: 100%;
    border: 1px solid var(--bg-gray);
    padding: 1rem;
    margin-bottom: 1rem;
    outline: none;
    border-radius: 5px;
    font-size: 1rem;
}

.cadastro-data-form-input:focus {
    border: 1px solid var(--color-primary);
    box-shadow: 0 0 5px 0 var(--color-primary) ;
}



</style>