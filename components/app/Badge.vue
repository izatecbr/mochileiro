<template>
  <span
    :class="badgeClass"
    :style="badgeStyle"
  >
    <span v-if="label">{{ label }}</span>
    <slot v-else></slot>
  </span>
</template>

<script setup>
import { computed } from "vue";

const props = defineProps({
  label: {
    type: String,
    default: null,
  },
  color: {
    type: String,
    default: "var(--color-accent-1)",
  },
  variant: {
    type: String,
    default: "solid",
    validator: (value) => ["solid", "outline", "ghost"].includes(value),
  },
  radius: {
    type: String,
    default: "4px",
  },
  padding: {
    type: String,
    default: "4px 8px",
  },
});

const badgeClass = computed(() => {
  return {
    "badge-solid": props.variant === "solid",
    "badge-outline": props.variant === "outline",
    "badge-ghost": props.variant === "ghost",
  };
});

const badgeStyle = computed(() => {
  let backgroundColor = "transparent";
  let borderColor = props.color;
  let textColor = props.color;

  if (props.variant === "solid") {
    backgroundColor = props.color;
    textColor = "var(--color-white)";
  } else if (props.variant === "ghost") {
    backgroundColor = `rgba(from ${props.color} r g b / 0.2)`;
    textColor = props.color;
  }

  return {
    backgroundColor,
    borderColor,
    color: textColor,
    border: props.variant === "outline" || props.variant === "ghost" ? `1px solid ${borderColor}` : "none",
    borderRadius: props.radius,
    padding: props.padding,
    display: "inline-block",
    fontSize: "0.775rem",
    fontWeight: "500",
    lineHeight: "1",
    textAlign: "center",
    margin: "0",
  };
});
</script>

<style scoped>

span {
  box-sizing: border-box;
  padding: 0;
  margin: 0;
  line-height: inherit;
}
</style>
