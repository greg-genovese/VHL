<script setup lang="ts">
defineProps<{
  disabled: boolean,
  label: string,
  onClick: () => void
}>()
</script>

<template>
  <button @click="onClick" class="form-button" type="submit" :disabled="disabled">{{label}}</button>
</template>

<style scoped lang="scss">
.form-button {
  background-color: var(--color-primary);
  border: none;
  border-radius: 5px;
  color: var(--color-black);
  font-weight: bold;
  font-size: 1.5em;
  padding: calc(var(--base-unit) * 2);
  width: 100%;
  -webkit-transition: background-color 500ms linear;
  -ms-transition: background-color 500ms linear;
  transition: background-color 500ms linear;
  &:hover {
    background-color: var(--color-primary-bright);
  }
  &:disabled {
    background-color: var(--color-grey);
    color: var(--color-text);
  }
}
</style>
