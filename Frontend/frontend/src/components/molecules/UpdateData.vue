<template>
    <div class="update-data">
        <h1>Atualize seu e-mail</h1>
        <form class="update-data-form">
            <h2 class="update-data-form-h2">Seu email atual</h2>
            <h4 class="update-data-form-h4">{{$getEmail}}</h4>

            <input v-model="form.email" class="update-data-form-input" type="text" placeholder="novo email: novo@email.com" required>
            <input v-model="form.confirm" class="update-data-form-input" type="text" placeholder="Confirme Email: novo@email.com" required>
            <input v-model="form.senha" class="update-data-form-input" type="password" placeholder="Senha: **********" required>

            <ButtonStyled @eventClick="UpdateUser" text="Atualizar" bgColor="primary-color" textColor="white"/>
            
        </form>
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { ButtonStyled} from '../atoms'
import axios from '../../Utils/axios'
import store from '../../store'

export default defineComponent({

    data(){
        return {
            form: {
                email:'',
                confirm:'',
                senha: '',
                CPF: store.getters.$getCPF
            }
        }
    },
    components: {
        ButtonStyled
    },

    computed: {
        $getEmail(): string{
            return store.getters.$getEmail
        },
    },

    methods: {
        async UpdateUser() {
            if(this.form.email == '' || this.form.confirm == '' || this.form.senha == '') {
                alert('Preencha todos os campos')
            }
            else {

                if(this.form.email != this.form.confirm ) {
                    alert('Verifique se os E-mails são iguais')
                }
                else {
                    const { data } = await axios.put('/users', this.form)
    
                    if(data == 'Houve um problema ao atualizar o usuário') {
                        alert('Houve um problema ao atualizar o usuário')
                    }
                    else {
                        store.commit('VERIFY_USER', data)
                        store.state.popups.popupMeusDados = true
                        this.form.email = ''
                        this.form.confirm = ''
                        this.form.senha =  ''                    
                    }
                }

            }
        },
    }
})
</script>

<style scoped>
.update-data {
    width: 100%;
    display: flex;
    flex-direction: column;
    margin: 0 auto;
    padding: 1rem;
}

.update-data h1
 {
    text-align: center;
    margin-bottom: 2rem;
    font-weight: lighter;
}

.update-data-form {
    width: 100%;
    text-align: center;
}

.update-data-form-h2 {
    font-weight: lighter;
}

.update-data-form-h4 {
    margin-bottom: 2rem;
    color: var(--color-primary)
}

.update-data-form-input {
    width: 100%;
    border: 1px solid var(--bg-gray);
    padding: 1rem;
    margin-bottom: 1rem;
    outline: none;
    border-radius: 5px;
    font-size: 1rem;
}

.update-data-form-input:focus {
    border: 1px solid var(--color-primary);
    box-shadow: 0 0 5px 0 var(--color-primary) ;
}



</style>