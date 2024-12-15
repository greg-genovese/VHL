<script setup lang="ts">
import AppButton from './AppButton.vue';
</script>

<template>
  <form @submit.prevent="submitForm">
    <label class="form-text-area-label form-label" for="answer">Freeform Answer</label>
    <textarea
      :aria-invalid="textAreaError"
      :class="['form-text-area', { 'error': textAreaError }]" aria-errormessage="err1" v-model="answer" name="answer"
      id="answer"
      ref="answerInput"
      rows="4">
    </textarea>
    <span id="err1" class="form-error-message">Error: Enter a freeform answer</span>
    <fieldset class="form-field-set">
      <legend class="form-label">Is this your final answer?:</legend>
      <label class="form-label" v-for="option in options" :key="option.label">
        <input type="radio" v-model="selectedOption" :value="option.value" />
        {{ option.label }}
      </label>
    </fieldset>
    <AppButton :onClick="submitForm" label="Submit" :disabled="!selectedOption || selectedOption === 'false' || !answer" type="submit"></AppButton>
  </form>
</template>

<script lang="ts">
export default {
  props: {
    focusTextArea: Boolean,
    handleRecordingSubmited: Function
  },
  data() {
    return {
      answer: null,
      selectedOption: null,
      textAreaError: false,
      options: [
        { value: true, label: 'True' },
        { value: false, label: 'False' },
      ]
    };
  },
  mounted() {
    if (this.focusTextArea && this.$refs.answerInput) {
      (this.$refs.answerInput as HTMLInputElement).focus();
    }
  },
  watch: {
    focusTextArea: function(newValue) {
      if (newValue) {
        this.$nextTick(() => {
          (this.$refs.answerInput as HTMLInputElement).focus();
        });
      }
    },
    selectedOption: function() {
      this.validateForm();
    },
    answer: function(newValue) {
      if(newValue){
        this.validateForm();
      }
    }
  },
  methods: {
    submitForm() {
      console.log('Form submitted with:', this.selectedOption, this.answer);
      if(this.handleRecordingSubmited) {
        this.handleRecordingSubmited();
      }
    },
    validateForm() {
      if(this.answer) {
        this.textAreaError = false;
      } else {
        this.textAreaError = true;
        (this.$refs.answerInput as HTMLInputElement).focus();
      }
    }
  }
};
</script>

<style scoped lang="scss">
.form-label {
  color: var(--color-text);
  display: block;
  font-size: 1.1em;
  &.error {
    color: var(--color-error);
  }
}
.form-error-message {
  color: var(--color-error);
  visibility: hidden;
}
[aria-invalid="true"] ~ .form-error-message {
  visibility: visible;
}
.form-text-area-label {
  display: block;
  margin-top: var(--element-gap);
}
.form-text-area {
  border: 1px solid var(--color-border);
  border-radius: 5px;
  padding: calc(var(--element-gap) / 2);
  width: 100%;
  &.error {
    border: 1px solid var(--color-error);
  }
}
.form-field-set {
  border: 0;
  margin: var(--element-gap) 0;
  padding: 0;
}
</style>
