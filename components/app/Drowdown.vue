<template>
  <div class="iz-dropdown-wrapper">
    <label v-if="label" class="iz-dropdown-label">{{ label }}</label>

    <div ref="dropdownRef" class="dropdown-container">
      <div :class="['dropdown', { 'is-active': isOpen, 'is-disabled': disabled || loading }]">
        <div @click="toggle" class="dropdown__button">
          <span class="dropdown__text">
            {{ selectedLabel || placeholder }}
          </span>
          <Icon name="lucide:chevron-down" class="dropdown__icon" />
        </div>

        <div v-if="isOpen" class="dropdown__menu">
          <div v-for="(item, index) in items" :key="index" @click="selectItem(item)" class="dropdown__item"
            :class="{ 'is-selected': isSelected(item) }">
            {{ item?.label ?? item }}
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { computed, defineEmits, defineProps, onBeforeUnmount, onMounted, ref, useAttrs } from 'vue'

const emit = defineEmits(['update:modelValue', 'onSelect'])

const props = defineProps({
  modelValue: [String, Number, Object],
  items: {
    type: Array,
    default: () => []
  },
  label: String,
  placeholder: {
    type: String,
    default: 'Selecione'
  },
  disabled: Boolean,
  loading: Boolean,
  trackBy: {
    type: String,
    default: 'value'
  }
})

const attrs = useAttrs()
const isOpen = ref(false)
const dropdownRef = ref(null)

const selectedLabel = computed(() => {
  if (!props.modelValue) return null
  const found = props.items.find(i => isEqual(i, props.modelValue))
  return found?.label ?? found ?? null
})

const toggle = () => {
  if (props.disabled || props.loading) return
  isOpen.value = !isOpen.value
}

const close = () => {
  isOpen.value = false
}

const isEqual = (a, b) => {
  if (typeof a === 'object' && typeof b === 'object') {
    return a?.[props.trackBy] === b?.[props.trackBy]
  }
  return a === b
}

const isSelected = item => {
  return isEqual(item, props.modelValue)
}

const selectItem = item => {
  emit('update:modelValue', item)
  emit('onSelect', item)
  close()
}

const onClickOutside = e => {
  if (dropdownRef.value && !dropdownRef.value.contains(e.target)) {
    close()
  }
}

onMounted(() => {
  document.addEventListener('click', onClickOutside)
})

onBeforeUnmount(() => {
  document.removeEventListener('click', onClickOutside)
})
</script>

<style scoped>
.iz-dropdown-wrapper {
  margin-top: 10px;
  background-color: bluered;
  width: 100%;

}

.iz-dropdown-label {
  display: block;
  margin-bottom: 6px;
  font-size: 14px;
  color: #333;
  font-weight: 500;
}

.dropdown-container {
  position: relative;
    width: 100%;
 
}

.dropdown {
  width: 100%;
  position: relative;

  border: 1px solid var(--Border, #E7E6E6);
  border-radius: 12px;
  background-color: white;
  cursor: pointer;
  user-select: none;
}

.dropdown.is-disabled {
  opacity: 0.5;
  cursor: not-allowed;
}

.dropdown__button {
  height: 60px;
  padding: 0 20px;
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.dropdown__text {
  font-size: 15px;
  color: #333;
}

.dropdown__icon {
  width: 20px;
  height: 20px;
  color: #555;
}

.dropdown__menu {
  position: absolute;
  top: 100%;
  left: 0;
  right: 0;
  margin-top: 0.4rem;
  background-color: white;
  border: 1px solid var(--Border, #E7E6E6);
  border-radius: 12px;
  max-height: 220px;
  overflow-y: auto;
  z-index: 20;
}


.dropdown__item {
  padding: 12px 20px;
  cursor: pointer;
  font-size: 14px;
  color: #333;
  transition: background 0.2s;
}

.dropdown__item:hover {
  background-color: #f2f2f2;
}

.dropdown__item.is-selected {
  background-color: #e8f5e9;
  font-weight: bold;
}
</style>
