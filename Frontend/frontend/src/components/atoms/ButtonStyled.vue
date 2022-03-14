<template>
    <button @click.prevent="$emit('eventClick')" :class="['button-styled', bgColor, textColor]" :type="typeText">
        {{text}}
    </button>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

type bgColor = 'primary-color' | 'gray-color' | 'white-color'
type textColor = 'Black' | 'white' | 'purple'

export default defineComponent({
    props: {
        text: {
            type: String,
            required: true,
        },
        typeText: {
            type: String,
            default: 'submit'
        },
        bgColor: {
            type: String,
            default: 'primary-color',
            validator: (value: bgColor) => {
                return ['primary-color', 'gray-color', 'white-color'].includes(value)
            }
        },
        textColor: {
            type: String,
            default: 'black',
            validator: (value: textColor) => {
                return ['black', 'white', 'purple'].includes(value)
            }
        }
    }
})
</script>

<style scoped>
.button-styled {
  border: 1px solid rgb(86, 86, 86, 0.3);
  outline: none;
  padding: 1rem 10px;
  margin-top: 2rem;
  border-radius: 5px;
  background: rgba(212, 212, 212, 0.3) ;
  cursor: pointer;
  font-size: 1.5rem;
  font-weight: bold;
  width: 100%;
}

.button-styled:hover {
    opacity: 0.9;
}

.primary-color {
    background: var(--color-primary);
}

.gray-color {
    background: var(--bg-gray);
}

.white-color {
    background: white;
}

.black {
    color: black;
}
.white {
    color: white;
}
.purple {
    color: var(--color-primary);
}


</style>