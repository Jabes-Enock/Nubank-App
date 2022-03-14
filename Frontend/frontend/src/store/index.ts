
import router from '@/router'
import axios from '@/Utils/axios'
import { createStore } from 'vuex'

export default createStore({
  state: {
    user: {
      nome: '',
      CPF: '',
      senha: '',
      email:'',
      logado: false
    },
    popups: {
      popupLogin: false,
      popupCadastro: false,
      popupMeusDados: false,
      popupDeleteAccount: false
    }
      
    
  },
  mutations: {
    VERIFY_USER(state, payload) {
      const { nome, CPF , senha, email } = payload
      
      state.user.nome = nome
      state.user.CPF = CPF
      state.user.senha = senha
      state.user.email = email
      state.user.logado = true

    },

    CHANGE_USER_LOGADO_FALSE(state) {
      state.user.logado = false
    },
    USER_NOT_FOUND(state) {
      state.popups.popupLogin = true
    },
    CHANGE_POPUP_DELETE_ACCOUNT_STATE_TRUE(state){
      state.popups.popupDeleteAccount = true
    },
    CLOSE_POPUP(state){
      state.popups.popupLogin = false
    },
    CLOSE_POPUP_CADASTRO(state) {
      state.popups.popupCadastro = false
      router.push('/')
    },
    CLOSE_POPUP_MEUS_DADOS(state) {
      state.popups.popupMeusDados = false
    },
    CLOSE_POPUP_DELETE_ACCOUNT_STATE(state) {
      state.popups.popupDeleteAccount = false
      router.push('/')
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
    },

  },
  getters: {
    //user

    $name(state){
      return state.user.nome
    },
    $getCPF(state){
      return state.user.CPF
    },
    $getEmail(state){
      return state.user.email
    },
    $getSenha(state){
      return state.user.senha
    },

    //popups

    $openPopupLogin(state){
      return state.popups.popupLogin
    },
    $openPopupCadastro(state){
      return state.popups.popupCadastro
    },
    $openPopupMeusDados(state){
      return state.popups.popupMeusDados
    },
    $openPopupDeleteAccount(state){
      return state.popups.popupDeleteAccount
    }


  }
})
