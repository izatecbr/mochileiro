<template>
  <div class="iz-dropdown-wrapper">
    <label v-if="label" class="iz-dropdown-label">{{ label }}</label>

    <div ref="dropdownRef" class="dropdown-container">
      <div
        :class="[
          'dropdown',
          radiusClass,
          { 'is-active': isOpen, 'is-disabled': disabled || loading }
        ]"
      >
        <div
          @click="toggle"
          class="dropdown__button"
          :class="[sizeClass, paddingClass]"
        >
          <span class="dropdown__text">
            {{ selectedLabel || placeholder }}
          </span>
          <Icon
            name="lucide:chevron-down"
            class="dropdown__icon"
            :class="{ rotated: isOpen }"
          />
        </div>

        <div v-if="isOpen" class="dropdown__menu">
          <div
            v-for="(item, index) in items"
            :key="index"
            @click="selectItem(item)"
            class="dropdown__item"
            :class="{ 'is-selected': isSelected(item) }"
          >
            {{ item?.label ?? item }}
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { computed, defineEmits, defineProps, onBeforeUnmount, onMounted, ref } from 'vue'

const emit = defineEmits(['update:modelValue', 'onSelect'])

const props = defineProps({
  modelValue: [String, Number, Object],
  items: { type: Array, default: () => [] },
  label: String,
  placeholder: { type: String, default: 'Selecione' },
  disabled: Boolean,
  loading: Boolean,
  trackBy: { type: String, default: 'value' },
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
  }
})

const isOpen = ref(false)
const dropdownRef = ref(null)

const selectedLabel = computed(() => {
  if (!props.modelValue) return null
  const found = props.items.find(i => isEqual(i, props.modelValue))
  return found?.label ?? found ?? null
})

const sizeClass = computed(() => ({
  sm: 'iz-size-sm',
  md: 'iz-size-md',
  lg: 'iz-size-lg'
}[props.size]))

const paddingClass = computed(() => ({
  xs: 'iz-padding-xs',
  sm: 'iz-padding-sm',
  md: 'iz-padding-md',
  lg: 'iz-padding-lg'
}[props.padding]))

const radiusClass = computed(() => ({
  xs: 'iz-radius-xs',
  sm: 'iz-radius-sm',
  md: 'iz-radius-md',
  lg: 'iz-radius-lg'
}[props.radius]))

const toggle = () => {
  if (props.disabled || props.loading) return
  isOpen.value = !isOpen.value
}

const close = () => { isOpen.value = false }

const isEqual = (a, b) => {
  if (typeof a === 'object' && typeof b === 'object') {
    return a?.[props.trackBy] === b?.[props.trackBy]
  }
  return a === b
}

const isSelected = item => isEqual(item, props.modelValue)

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

onMounted(() => document.addEventListener('click', onClickOutside))
onBeforeUnmount(() => document.removeEventListener('click', onClickOutside))
</script>

<style scoped>
.iz-dropdown-wrapper {
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
  background-color: white;
  cursor: pointer;
  user-select: none;
  transition: all 0.2s ease;
  border-radius: 12px;
}

.dropdown.is-disabled {
  opacity: 0.5;
  cursor: not-allowed;
}

/* botão SEMPRE é flex para manter centralização */
.dropdown__button {
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
}

/* md padrão */
.iz-size-md {
  height: 50px;
}
.iz-padding-md {
  padding: 0 20px;
}
.iz-radius-md {
  border-radius: 12px;
}

/* sm */
.iz-size-sm {
  height: 40px;
}
.iz-padding-sm {
  padding: 0 12px;
}
.iz-radius-sm {
  border-radius: 8px;
}

/* lg */
.iz-size-lg {
  height: 80px;
}
.iz-padding-lg {
  padding: 0 28px;
}
.iz-radius-lg {
  border-radius: 16px;
}

/* xs (só padding/radius se existir) */
.iz-padding-xs {
  padding: 0 6px;
}
.iz-radius-xs {
  border-radius: 4px;
}

.dropdown__text {
  font-size: 15px;
  color: #333;
}

.dropdown__icon {
  width: 20px;
  height: 20px;
  color: #555;
  transition: transform 0.2s ease;
}

.dropdown__icon.rotated {
  transform: rotate(180deg);
}

.dropdown__menu {
  position: absolute;
  top: 100%;
  left: 0;
  right: 0;
  margin-top: 0.4rem;
  background-color: white;
  border: 1px solid var(--Border, #E7E6E6);
  max-height: 220px;
  overflow-y: auto;
  z-index: 20;
  width: 100%;
  border-radius: 12px;
}

.dropdown__item {
  padding: 6px 16px;
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
