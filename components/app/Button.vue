<template>
  <button
    :class="[
      'app-button',
      `app-button--${variant}`,
      { 'app-button--disabled': disabled }
    ]"
    :disabled="disabled"
    @click="$emit('click', $event)"
  >
    <slot />
  </button>
</template>

<script setup lang="ts">
defineProps<{
  variant?: 'default' | 'outline' | 'ghost' | 'link' | 'destructive'
  disabled?: boolean
}>()

defineEmits(['click'])
</script>

<style scoped>
/* Variáveis de cor */
:root {
  --color-accent-1: #EB662B;
  --color-accent-1-dark: #CE5A25;
  --color-light: #ffffff;
  --color-dark: #222222;
  --color-muted: #f3f3f3;
  --color-border: #ddd;
  --color-destructive: #e53935;
}

/* Base */
.app-button {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 0.6rem 1.2rem;
  font-size: 14px;
  font-weight: 500;
  border-radius: 999px;
  border: 1px solid transparent;
  cursor: pointer;
  transition: background 0.2s ease, border-color 0.2s ease, color 0.2s ease;
  text-decoration: none;
  user-select: none;
}

/* Default */
.app-button--default {
  background-color: var(--color-accent-1);
  color: var(--color-light);
  border-color: var(--color-accent-1);
}
.app-button--default:hover {
  background-color: var(--color-accent-1-dark);
  border-color: var(--color-accent-1-dark);
}

/* Outline */
.app-button--outline {
  background-color: transparent;
  color: var(--color-accent-1);
  border-color: var(--color-accent-1);
}
.app-button--outline:hover {
  background-color: rgba(235, 102, 43, 0.1);
}

/* Ghost */
.app-button--ghost {
  background-color: transparent;
  color: var(--color-accent-1);
  border-color: transparent;
}
.app-button--ghost:hover {
  background-color: rgba(235, 102, 43, 0.1);
}

/* Link */
.app-button--link {
  background-color: transparent;
  color: var(--color-accent-1);
  padding: 0;
  border: none;
  font-weight: 500;
}
.app-button--link:hover {
  text-decoration: underline;
}

/* Destructive */
.app-button--destructive {
  background-color: var(--color-destructive);
  color: var(--color-light);
  border-color: var(--color-destructive);
}
.app-button--destructive:hover {
  background-color: #c62828;
  border-color: #c62828;
}

/* Disabled */
.app-button--disabled,
.app-button:disabled {
  background-color: var(--color-muted);
  color: #aaa;
  border-color: var(--color-border);
  cursor: not-allowed;
  pointer-events: none;
}
</style>
