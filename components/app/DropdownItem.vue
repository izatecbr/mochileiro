<template>
  <div 
    class="dropdown-item-container"
    @mouseenter="openSubMenu"
    @mouseleave="scheduleClose"
  >
    <div 
      :class="['dropdown__item', { 
        'is-selected': isSelected(item), 
        'has-children': hasChildren 
      }]"
      @click="handleClick"
    >
      <span>{{ item?.label ?? item }}</span>
      <Icon 
        v-if="hasChildren" 
        name="lucide:chevron-right" 
        class="dropdown-submenu-icon" 
        :class="{ rotated: isSubMenuOpen }" 
      />
    </div>

    <div 
      v-if="isSubMenuOpen && hasChildren" 
      class="dropdown-submenu"
      @mouseenter="cancelClose"
      @mouseleave="scheduleClose"
    >
      <DropdownItem 
        v-for="(child, childIndex) in item.children" 
        :key="childIndex"
        :item="child"
        :is-selected="isSelected"
        @select="emitSelect"
      />
    </div>
  </div>
</template>

<script setup>
import { computed, ref } from 'vue'


const props = defineProps({
  item: { type: [Object, String], required: true },
  isSelected: { type: Function, default: () => false }
})

const emit = defineEmits(['select'])

const isSubMenuOpen = ref(false)
const closeTimer = ref(null)

const hasChildren = computed(() => 
  Array.isArray(props.item?.children) && props.item.children.length > 0
)

const openSubMenu = () => {
  cancelClose()
  isSubMenuOpen.value = true
}

const scheduleClose = () => {
  closeTimer.value = setTimeout(() => {
    isSubMenuOpen.value = false
  }, 200)
}

const cancelClose = () => {
  if (closeTimer.value) {
    clearTimeout(closeTimer.value)
    closeTimer.value = null
  }
}

const handleClick = (e) => {
  e.stopPropagation()
  
  if (hasChildren.value) {
    openSubMenu()
  } else {
    emitSelect(props.item)
  }
}

const emitSelect = (item) => {
  emit('select', item)
}
</script>

<style scoped>
.dropdown-item-container {
  position: relative;
  width: 100%;
}

.dropdown__item {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 16px;
  cursor: pointer;
  font-size: 14px;
  line-height: 1;
  color: #333;
  transition: background 0.2s;
  width: 100%;
  box-sizing: border-box;
}

.dropdown__item:hover {
  background-color: #f2f2f2;
}

.dropdown__item.is-selected {
  background-color: #e8f5e9;
  font-weight: bold;
}

.dropdown-submenu {
  width: 100%;
  background-color: #f9f9f9;
  border-left: 3px solid #e0e0e0;
  padding-left: 16px;
  box-sizing: border-box;
  position: static;
  overflow: hidden;
  transition: max-height 0.3s ease, opacity 0.2s ease;
  max-height: 500px;
  opacity: 1;
}

.dropdown-submenu[hidden] {
  display: block;
  max-height: 0;
  opacity: 0;
  padding: 0;
  margin: 0;
  border: 0;
}

.dropdown-submenu-icon {
  width: 16px;
  height: 16px;
  margin-left: 8px;
  transition: transform 0.2s;
  flex-shrink: 0;
}

.dropdown-submenu-icon.rotated {
  transform: rotate(90deg);
}
</style>