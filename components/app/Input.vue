<template>
  <div class="iz-input-wrapper">
    <label v-if="label" class="iz-input-label">{{ label }}</label>

    <div class="iz-input-container">
      <input v-bind="attrs" :disabled="disabled || loading" class="iz-input"
        :class="[sizeClass, paddingClass, radiusClass, { 'is-disabled': disabled || loading }]" />

      <button type="button" :disabled="disabled || loading" class="iz-input-button"
        :class="[paddingClass, radiusClass, { 'is-disabled': disabled || loading }]">
        <template v-if="loading">
          <Icon name="lucide:loader" class="iz-loading-icon" />
        </template>
        <template v-else>
          <Icon v-if="icon" :name="icon" class="iz-icon-left" />
          <slot />
          <Icon v-if="trailingIcon" :name="trailingIcon" class="iz-icon-right" />
        </template>
      </button>
    </div>
  </div>
</template>

<script setup>
import { computed, useAttrs } from 'vue'

const props = defineProps({
  label: String,
  size: {
    type: String,
    default: 'md',
    validator: v => ['sm', 'md', 'lg'].includes(v)
  },
  padding: {
    type: String,
    default: 'md',
    validator: v => ['xs', 'sm', 'md', 'lg'].includes(v)
  },
  radius: {
    type: String,
    default: 'md',
    validator: v => ['xs', 'sm', 'md', 'lg'].includes(v)
  },
  loading: Boolean,
  disabled: Boolean,
  icon: String,
  trailingIcon: String
})

const attrs = useAttrs()

const sizeClass = computed(() => ({
  sm: 'iz-size-sm',
  md: 'iz-size-md',
  lg: 'iz-size-lg'
})[props.size])

const paddingClass = computed(() => ({
  xs: 'iz-padding-xs',
  sm: 'iz-padding-sm',
  md: 'iz-padding-md',
  lg: 'iz-padding-lg'
})[props.padding])

const radiusClass = computed(() => ({
  xs: 'iz-radius-xs',
  sm: 'iz-radius-sm',
  md: 'iz-radius-md',
  lg: 'iz-radius-lg'
})[props.radius])
</script>

<style scoped>
/* Wrapper geral */
.iz-input-wrapper {
  margin-top: 10px;
  width: 100%;
}

/* Label */
.iz-input-label {
  display: block;
  margin-bottom: 6px;
  font-size: 14px;
  color: #333;
  font-weight: 500;
}

/* Container relativo para posicionar botão */
.iz-input-container {
  position: relative;
  width: 100%;
}

/* Estilo base do input */
.iz-input {
  width: 100%;
  background-color: white;
  border: 1px solid var(--Border, #E7E6E6);
  box-sizing: border-box;
  font-size: 15px;
}

/* Botão fixo à direita */
.iz-input-button {
  position: absolute;
  top: 0;
  bottom: 0;
  right: 0;
  background: transparent;
  border: none;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1;
}

/* Icones */
.iz-icon-left {
  font-size: larger;
  color: var(--Border, #727272);
  margin-right: 4px;
}

.iz-icon-right {
    font-size: larger;
  color: var(--Border, #727272);
  margin-left: 4px;
}

.iz-loading-icon {
  animation: spin 1s linear infinite;
}

/* Estados */
.is-disabled {
  opacity: 0.5;
  cursor: not-allowed;
}

/* Tamanhos */
.iz-size-sm {
  height: 40px;
}

.iz-size-md {
  height: 60px;
}

.iz-size-lg {
  height: 80px;
}

/* Padding */
.iz-padding-xs {
  padding: 0 6px;
}

.iz-padding-sm {
  padding: 0 12px;
}

.iz-padding-md {
  padding: 0 20px;
}

.iz-padding-lg {
  padding: 0 28px;
}

/* Radius */
.iz-radius-xs {
  border-radius: 4px;
}

.iz-radius-sm {
  border-radius: 8px;
}

.iz-radius-md {
  border-radius: 12px;
}

.iz-radius-lg {
  border-radius: 16px;
}

/* Animação loader */
@keyframes spin {
  to {
    transform: rotate(360deg);
  }
}
</style>
