<template>
    <div class="menu-link-styled">
        <div>
            <router-link :to="`/${MenuPath}`"> 
                <div>
                    <slot />
                    <div>{{MenuPath}}</div>  
                </div>
                
                <div>
                    <svg xmlns="http://www.w3.org/2000/svg" width="30" fill="none" viewBox="0 0 24 24" stroke="black">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
                    </svg>
                </div>
            </router-link>
        </div>
    </div>
      
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
    props: {
        MenuPath: {
            type: String,
            required: true
        }
    }
})
</script>

<style scoped>
.menu-link-styled {
    width: 100%;
    border-top: 1px solid rgb(86, 86, 86, 0.3)
}

.menu-link-styled a {
    display: flex;
    justify-content: space-between;
    padding: 1rem;
    align-items: center;
    color: black;
    font-weight: bold;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    font-size: 1rem;
    outline: none;
}

.menu-link-styled a div {
    display: flex;
    align-items: center;
}

.menu-link-styled a div div {
    margin-left: 1rem;
} 
</style>