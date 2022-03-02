<template>
  <div class="container" v-if="store.state.user.logado">
    <div class="header-items">
      <div class="header-items-icons">
        <div class="icon icon-perfil" @click="showMenu = true" cursor-pointer>
          <svg xmlns="http://www.w3.org/2000/svg" class="fill-svg" viewBox="0 0 24 24" >
            <path stroke-linecap="round" stroke-linejoin="round"  d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
          </svg>
        </div>
        <div class="header-items-icons-group">
          <div class="eye-icon icon">
            <svg xmlns="http://www.w3.org/2000/svg" class="fill-svg" viewBox="0 0 24 24" >
              <path stroke-linecap="round" stroke-linejoin="round"  d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
              <path stroke-linecap="round" stroke-linejoin="round"  d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
            </svg>
          </div>
          <div class="icon icon-question">
            <svg xmlns="http://www.w3.org/2000/svg" class="fill-svg" viewBox="0 0 24 24" >
              <path stroke-linecap="round" stroke-linejoin="round"  d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
          </div>
          <div class="icon icon-letter">
            <svg xmlns="http://www.w3.org/2000/svg" class="fill-svg"  viewBox="0 0 24 24" >
              <path stroke-linecap="round" stroke-linejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
            </svg>
          </div>
        </div>
      </div>
      <div >
        <h2 class="hi">Olá, {{$name}}</h2>
        
      </div>
    </div>
    <div class="data-account">
      <div class="data-account-info">
        <div><h2>Conta</h2></div>
        <a href="#" class="data-account-link">
          <div class="icon">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="black">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
          </svg>
        </div>
        </a>
      </div>
      <div>
        <div>
          <h1>R$ {{valueAccount}}</h1> 
        </div>
      </div>
    </div>
    <div class="nav-options">
      <div>
        <div class="icon">
          <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
        </div>
        <span>Pix</span>
      </div>
      <div>
        <div class="icon">
          <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 9V7a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2m2 4h10a2 2 0 002-2v-6a2 2 0 00-2-2H9a2 2 0 00-2 2v6a2 2 0 002 2zm7-5a2 2 0 11-4 0 2 2 0 014 0z" />
        </svg>
        </div>
        <span>Pagar</span>
      </div>
      <div>
        <div class="icon">
          <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M9 19l3 3m0 0l3-3m-3 3V10" />
          </svg>
        </div>
        <span>Transferir</span>
      </div>
      <div>
        <div class="icon">
          <svg xmlns="http://www.w3.org/2000/svg"  fill="none" viewBox="0 0 24 24" stroke="black">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12" />
          </svg>
        </div>
        <span>Depositar</span>
      </div>
      <div>
        <div class="icon">
          <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 11.5V14m0-2.5v-6a1.5 1.5 0 113 0m-3 6a1.5 1.5 0 00-3 0v2a7.5 7.5 0 0015 0v-5a1.5 1.5 0 00-3 0m-6-3V11m0-5.5v-1a1.5 1.5 0 013 0v1m0 0V11m0-5.5a1.5 1.5 0 013 0v3m0 0V11" />
          </svg>
        </div>
        <span>Pegar <br>empréstimo</span>
      </div>
      <div>
        <div class="icon">
          <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
        </svg>
        </div>
        <span>Recarga de <br> celular </span>
      </div>
      <div>
        <div class="icon">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
          </svg>
        </div>
        <span>Doações</span>
      </div>
      <div>
        <div class="icon">
          <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
          </svg>
        </div>
        <span>Transferir <br> Internacionalmente</span>
      </div>
    </div>
    <div class="my-cards">
      <div class="icon">
          <svg xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 20 20" fill="black">
            <path d="M4 4a2 2 0 00-2 2v1h16V6a2 2 0 00-2-2H4z" />
            <path fill-rule="evenodd" d="M18 9H2v5a2 2 0 002 2h12a2 2 0 002-2V9zM4 13a1 1 0 011-1h1a1 1 0 110 2H5a1 1 0 01-1-1zm5-1a1 1 0 100 2h1a1 1 0 100-2H9z" clip-rule="evenodd" />
          </svg>
      </div>
      <div>
          <h2>Meus Cartões</h2>
      </div>
    </div>
    <div class="credit-card">
      <div >
        <div class="icon">
          <svg xmlns="http://www.w3.org/2000/svg"  fill="none" viewBox="0 0 24 24" stroke="black">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
          </svg>
        </div>
        <div class="credit-card-link">
          <div><h2>Cartão de crédito</h2></div>
          <div class="icon">
            <svg xmlns="http://www.w3.org/2000/svg"  fill="none" viewBox="0 0 24 24" stroke="black">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
          </svg>
          </div>
        </div>
      </div>
      <div class="creditToPay">
        <div><p>Fatura Atual</p></div>
        <div><h2>{{creditToPay}}</h2></div>
        <div><p>Limite disponível: <span>{{availableLimit}}</span></p></div>
      </div>
    </div>
    <transition>
      <Menu @closeMenu="showMenu = false" v-if="showMenu" :name="$name"/>
    </transition>
  </div>
  <div class="container" v-else>
    <div class="container-nao-logado">
      <div>
        <h1 class="container-nao-logado-h1">Faça seu login</h1>
        <LinkStyled path="/" text="Click aqui para fazer o login" textColor="purple"/>
      </div>
    </div>
  </div>

  
</template>

<script lang="ts">
import { defineComponent } from "vue"
import store from '../store'
import { LinkStyled } from '../components/atoms'
import { Menu } from '../components/template'

export default defineComponent({
  name: "Home",
  data(){
    return {
      valueAccount: '20.000,00',
      creditToPay: '500,00',
      availableLimit: '4.000,00',
      name: '',
      store,
      showMenu: false
    }
  },
  components: {
    LinkStyled,
    Menu
  },
  computed: {
    $name(){
      return store.getters.$name
    }
  }


});
</script>

<style scoped>
.header-items {
  background-color: var(--color-primary);
  padding: 1rem;
}

.header-items-icons {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 3rem;
  margin-top: 0.5rem;
}

.icon-perfil {
  width: 50px;
  height: 50px;
  border-radius: 50%;
  padding: 5px;
  background: rgba(166, 28, 246, 0.9);
  display: grid;
  place-items: center;
}

.header-items-icons-group {
  display: flex;
}

.header-items-icons-group div {
  margin-left: 1rem;
}

.icon svg {
  width: 30px;
}

.fill-svg {
  fill: none;
  stroke: white;
  stroke-width: 1.5 ;
}

.hi {
  color: var(--color-second);
}

/* =============== data-account ================= */
.data-account {
  margin: 2rem 1rem;
}

.data-account-info {
  display: flex;
  justify-content: space-between;
}

/* =============== Nav-options ================= */

.nav-options {
  display: flex;
  overflow-x: auto;
  padding-right: 1rem;
}

.nav-options > div {
  display: grid;
  grid-template-rows: repeat(2, 1fr );
  margin-left: 1.5rem;
}

.nav-options div div {
  margin: 0 auto;
  width: 80px;
  height: 80px;
  border-radius: 50%;
  background: var(--bg-gray);
  margin-bottom: 1rem;
  display: grid;
  place-items: center;
}

.nav-options div span {
  text-align: center;
  font-weight: bold;
  font-size: 0.8rem;
  font-family: Arial, Helvetica, sans-serif;

}

/* =============== My-cards ================= */
.my-cards {
  background: var(--bg-gray);
  margin: 0 1rem;
  padding: 1rem;
  display: flex;
  align-items: center;
  border-radius: 0.5rem;
}

.my-cards :nth-child(2) {
  margin-left: 2rem;
}

/* =============== Credit-card ================= */
.credit-card {
  margin: 2rem 1rem;
}

.credit-card div.credit-card-link {
  display: flex;
  justify-content: space-between;
  margin: 0.5rem 0;
  align-items: center;
}

.credit-card div.creditToPay {
  margin: 1rem 0;
}

.credit-card div.creditToPay > div {
  margin: 0.5rem 0;
}

.credit-card div.creditToPay h2 {
  font-size: 2rem;
}

.credit-card div.creditToPay p span {
  font-weight: bold;
  
}

/* =============== container-nao-logado =================== */
.container-nao-logado {
  width: 100vw;
  height: 100vh;
  display: grid;
  place-items: center;
}

.container-nao-logado-h1 {
  color: var(--color-primary);
  font-size: 2rem;
}

.v-enter-from,
.v-leave-to {
    top: 100%;
}
.v-enter-active,
.v-leave-active {
    transition: 0.25s ease-out;
}


</style>

