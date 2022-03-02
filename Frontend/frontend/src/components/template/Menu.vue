<template>
    <div class="container menu">
        <div class="menu-section-info">
            <div class="menu-close" @click="$emit('closeMenu')">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="#808080">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
                </svg>
            </div>
            <div class="menu-section-info-user">
                <div class="circle-user">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" >
                        <path fill="none" stroke="white" stroke-linecap="round" stroke-linejoin="round"  d="M16 7a4 4 0 11-8 0 4 4 0 018 0 M12 14a7 7 0 00-7 7h14a7 7 0 00-7-7"/>
                    </svg>
                </div>
                <div class="name">{{name}}</div>
            </div>
            <div class="menu-section-bank">
                <p class="data-bank">Agência xxxx &#8226; Conta xxxxxxxx-x</p>
                <p class="data-bank">Banco xxxx &#8226; Nu Pagamentos S.A. - Intituição de Pagamento</p>
            </div>
        </div>
        <div class="menu-section-options">
           <MenuItens />
        </div>
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { MenuItens } from '../organism'

export default defineComponent({
   props: {
       name: {
           type: String,
           required: true
       }
   },
    components: {
        MenuItens
    }
})
</script>

<style scoped>
.menu {
    width: 100vw;
    height: 100%;
    min-height: 100vh;
    position: fixed;
    top: 0;
    left: 0;
    background: var(--color-second);
}

.menu-section-info {
    width: 100%;
    padding: 1rem 1.5rem;
    background: var(--bg-gray);
}

.menu-close {
    width: 30px;
    margin-bottom: 1rem;
}

.menu-section-info-user {
    width: 100%;
    display: flex;
    align-items: center;

}

.circle-user {
    width: 50px;
    height: 50px;
    background: var(--color-primary);
    border-radius: 50%;
    padding:0.5rem;
    margin-right: 1rem;
}

.name {
    font-weight: bold;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
}

.menu-section-bank {
    margin-top: 1rem;
    line-height: 150%;
}

.data-bank {
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    font-weight: 500;
}

.menu-section-options {
    width: 100%;
}



</style>