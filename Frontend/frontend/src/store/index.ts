
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
    },
    popups: {
      popupLogin: false,
      popupCadastro: false,
    }
      
    
  },
  mutations: {
    VERIFY_USER(state, payload) {
      const { nome, CPF , senha} = payload
      
      state.user.nome = nome
      state.user.CPF = CPF
      state.user.senha = senha
      state.user.logado = true

    },
    USER_NOT_FOUND(state) {
      state.popups.popupLogin = true
    },
    CLOSE_POPUP(state){
      state.popups.popupLogin = false
    },
    CLOSE_POPUP_CADASTRO(state) {
      state.popups.popupCadastro = false
    },
  },
  actions: {
    async verifyUser(context, payload) {
      const { data } = await axios.post('/users', payload)
 
      if( data == 'Usuário não encontrado' ) {
        context.commit('USER_NOT_FOUND')
      }
      else{
        context.commit('VERIFY_USER', data)
        router.push('/home')
      }
    }
  },
})
