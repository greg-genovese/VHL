<script setup lang="ts">
defineProps<{
  color: string,
  label: string
}>()
</script>

<template>
  <button class="icon-button">
    <span class="icon-button-ring">
      <span :style="{ backgroundColor: color }" class="icon-button-icon-container">
        <slot name="icon"></slot>
      </span>
    </span>
    <span class="icon-button-label">{{ label }}</span>
  </button>
</template>

<style lang="scss">
.icon-button {
  align-items: center;
  background: none;
  border: none;
  display: flex;
  flex-direction: column;
  height: 125px;
  justify-content: center;
  padding: 5px;
  position: relative;
  width: 140px;
  &:hover, &:focus {
    .icon-button-ring {
      border: 0.75em solid var(--color-text);
      border-radius: 50%;
      display: block;
      padding: 5px;
    }
  }
}
.icon-button-icon-container {
  border-radius: 50%;
  display: block;
  padding: 10px;
  height: 60px;
  width: 60px;
  svg {
    position:relative;
    top: calc(50% - 12.5px);
    height: 25px;
    width: 25px;
  }
}
.icon-button-label {
  bottom: 0;
  color: var(--color-text);
  position: absolute;
}
</style>
