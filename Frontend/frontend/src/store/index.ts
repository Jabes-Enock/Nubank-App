
import router from '@/router'
import axios from '@/Utils/axios'
import { createStore } from 'vuex'

export default createStore({
  state: {
    user: {
      nome: '',
      CPF: '',
      senha: '',
      logado: false
    }
      
    
  },
  mutations: {
    VERIFY_USER(state, payload) {
      const { nome, CPF , senha} = payload
      
      state.user.nome = nome
      state.user.CPF = CPF
      state.user.senha = senha
      state.user.logado = true
      console.log(state.user.CPF)
      console.log(state.user.senha)

    }
  },
  actions: {
    async verifyUser(context, payload) {
      const { data } = await axios.post('/users', payload)
 
      if( data == 'Usuário não encontrado' ) {
        console.log('CPF ou senha inválido')
      }
      else{
        context.commit('VERIFY_USER', data)
        router.push('/home')
      }

      

    }
  },
})
