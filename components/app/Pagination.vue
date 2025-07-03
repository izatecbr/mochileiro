<template>
  <div class="pagination">
    <button class="pagination__nav" :class="{ disabled: currentPage === 1 }"
      @click="$emit('update:modelValue', currentPage - 1)" :disabled="currentPage === 1">
      <Icon name="lucide:arrow-left" />
    </button>
    <span class="label">Anterior</span>

    <div class="pagination__pages">
      <button v-for="page in pages" :key="page" class="pagination__page" :class="{ active: page === currentPage }"
        @click="$emit('update:modelValue', page)">
        {{ page }}
      </button>
      <span v-if="totalPages > 10">...</span>
    </div>
    <span class="label">Próximo</span>
    <button class="pagination__nav" :class="{ disabled: currentPage === totalPages }"
      @click="$emit('update:modelValue', currentPage + 1)" :disabled="currentPage === totalPages">

      <Icon name="lucide:arrow-right" />
    </button>
  </div>
</template>

<script setup>
const { totalPages, modelValue } = defineProps({
  modelValue: { type: Number, default: 1 },
  totalPages: { type: Number, required: true }
})


const emit = defineEmits(['update:modelValue'])

const currentPage = defineModel()

const pages = computed(() => {
  const range = []
  for (let i = 1; i <= Math.min(10, totalPages); i++) {
    range.push(i)
  }
  return range
})
</script>

<style scoped>
.pagination {
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 2rem;
  gap: 1rem;
}

.pagination__nav {
  display: flex;
  align-items: center;
  border: 1px solid var(--color-accent-1);
  border-radius: 50%;
  padding: 0.6rem;
  background: white;
  color: var(--color-accent-1);
  cursor: pointer;
  transition: background 0.2s;
}

.pagination__nav.disabled {
  opacity: 0.4;
  pointer-events: none;
}

.pagination__nav .label {
  margin-left: 0.5rem;
  font-weight: bold;
  font-size: 14px;
}

.pagination__pages {
  display: flex;
  align-items: center;
  gap: 0.6rem;
}

.pagination__page {
  border: none;
  background: none;
  font-size: 14px;
  cursor: pointer;
  padding: 0.5rem;
  border-radius: 999px;
}

.pagination__page.active {
  background-color: var(--color-accent-1);
  height: fit-content;
  padding: 0.2rem 0.8rem;
  color: white;
  font-weight: bold;
}
</style>
