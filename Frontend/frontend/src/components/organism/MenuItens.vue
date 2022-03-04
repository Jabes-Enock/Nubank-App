<template>
    <div class="container">
        <MenuLinkStyled MenuPath="Exemplo De Rota">
            <svg xmlns="http://www.w3.org/2000/svg" width="30" fill="none" viewBox="0 0 24 24" stroke="black">
                <path stroke-linecap="round" stroke="black" stroke-linejoin="round" stroke-width="1" d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
        </MenuLinkStyled>
        <MenuLinkStyled MenuPath="Meus dados">
            <svg xmlns="http://www.w3.org/2000/svg" width="30" viewBox="0 0 24 24" >
                <path fill="none" stroke="black" stroke-linecap="round" stroke-linejoin="round"  d="M16 7a4 4 0 11-8 0 4 4 0 018 0 M12 14a7 7 0 00-7 7h14a7 7 0 00-7-7"/>
            </svg>
        </MenuLinkStyled>
        <MenuLinkStyled MenuPath="Exemplo De Rota">
            <svg xmlns="http://www.w3.org/2000/svg" width="30" fill="none" viewBox="0 0 24 24" stroke="black">
                <path stroke-linecap="round" stroke="black" stroke-linejoin="round" stroke-width="1" d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
        </MenuLinkStyled><MenuLinkStyled MenuPath="Exemplo De Rota">
            <svg xmlns="http://www.w3.org/2000/svg" width="30" fill="none" viewBox="0 0 24 24" stroke="black">
                <path stroke-linecap="round" stroke="black" stroke-linejoin="round" stroke-width="1" d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
        </MenuLinkStyled><MenuLinkStyled MenuPath="Exemplo De Rota">
            <svg xmlns="http://www.w3.org/2000/svg" width="30" fill="none" viewBox="0 0 24 24" stroke="black">
                <path stroke-linecap="round" stroke="black" stroke-linejoin="round" stroke-width="1" d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
        </MenuLinkStyled>
        <div class="menu-itens">
            <a href="/" class="menu-itens-a">Sair do app</a>
        </div>
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

import { MenuLinkStyled } from '../molecules'

export default defineComponent({
    
   components: {
       MenuLinkStyled
   }
})
</script>

<style scoped>
.menu-itens {
    width: 100%;
    text-align: center;
    margin: 4rem 0 ;
    
}

.menu-itens-a {
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    font-weight: 500;
    font-size: 1.3rem;
    border: 1px solid var(--color-primary);
    border-radius: 0.5rem;
    padding: 0.5rem;
}
</style>