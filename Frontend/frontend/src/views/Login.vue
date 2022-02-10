<template>
  <div class="container">
      <div class="login">
        <div class="logo-nubank">
            <Logo />
        </div>
        <div class="campo-dados">
          <h2>Faça seu login</h2>
          <form class="campo-dados-inputs" @submit.prevent="verifiqueUser">
                <input v-model="form.CPF" type="text" placeholder="CPF">
                <input v-model="form.senha" type="password" placeholder="Senha" >
                <button class="button-continuar" type="submit">Continuar</button>
          </form>
        </div>
      </div>

  </div>
  
</template>

<script lang="ts">

import { defineComponent} from 'vue'
import axios from '../Utils/axios'
import { Logo} from '../components/atoms'

export default defineComponent({
  name: 'Login',
  data() {
    return {
      form: {
        CPF: '',
        senha: ''
      }
    }
  }, 

  components: {
    Logo
  },

  methods: {
    async verifiqueUser () {
      try {
        const  { data }  = await axios.post('/users', this.form)
      
        this.form.CPF = ''
        this.form.senha = ''

        if(data == 'Usuário autorizado') {
          this.$router.push('/')
          console.log(data)
          
        }

      } catch (error) {
        console.warn(error)
      }
      
    }
  }
})

</script>

<style scoped>

.container {
  
  min-height: 100vh;
  background: rgb(132, 9, 204);

}

.login {
  width: 100%;
  max-width: 700px;
  height: 100vh;
  max-height: 500px;
  display: flex;

 
}

.logo-nubank {
  max-width: 100px;
}

.campo-dados {
  width: 80%;
  max-width: 400px;
  background: white;
  height: 100vh;
  max-height: 600px;
  padding: 40px 20px 20px;
  border-radius: 10px;
}

.campo-dados h2 {
  margin-bottom: 5rem;
}

.campo-dados-inputs {
  width: 80%;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
}

.campo-dados-inputs input {
  border: none;
  border-bottom: 1px solid rgb(86, 86, 86, 0.3);
  outline: none;
  padding: 8px 10px;
  margin-bottom: 30px;
  font-size: 1.5rem;
}

.campo-dados-inputs input:focus {
  border-bottom: 1px solid rgb(240, 41, 41,0.5);
}

.campo-dados-inputs input::placeholder {
  font-size: 1rem;
}



.campo-dados-inputs .button-continuar {
  border: 1px solid rgb(86, 86, 86, 0.3);
  outline: none;
  padding: 1.5rem 10px;
  margin-top: 2rem;
  border-radius: 5px;
  background: rgba(212, 212, 212, 0.3) ;
  cursor: pointer;
  font-size: 1rem;
  font-weight: bold;
}

.campo-dados-inputs .button-continuar:hover {
  background: rgba(212, 212, 212, 0.7);
}

</style>
