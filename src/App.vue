<script setup lang="ts">
import { shallowRef } from 'vue'
import AppHeader from './components/molecules/AppHeader.vue';
import SoundWave from './components/molecules/SoundWave.vue';
import IconButton from './components/atoms/IconButton.vue';
import IconPlay from './components/icons/IconPlay.vue';
import IconStop from './components/icons/IconStop.vue';
import IconRecord from './components/icons/IconRecord.vue';
import AnswerForm from './components/organisms/AnswerForm.vue';
import AppButton from './components/atoms/AppButton.vue';
</script>

<template>
  <AppHeader></AppHeader>

  <main>
    <div class="secondary-content" v-if="recordingSubmited">
      <h1>Thanks for your answer!</h1>
      <AppButton :onClick="handleRecordingSubmited" label="Resubmit" :disabled="false"></AppButton>
    </div>
    <div v-else="recordingSubmited">
      <SoundWave :active="recordingActive" />
      <h1>Say the vocabulary words</h1>
      <div class="button-container">
        <IconButton @click="handleClick(button.label)" v-for="button in buttons" :key="button.label"
          :color="button.color" :label="button.label">
          <template #icon>
            <component :is="button.icon" />
          </template>
        </IconButton>
      </div>
      <AnswerForm :focusTextArea="focusTextArea" :handleRecordingSubmited="handleRecordingSubmited"></AnswerForm>
    </div>
  </main>
</template>

<script lang="ts">
enum ButtonLabels {
  STOP = 'Stop',
  PLAY = 'Review your recording',
  RECORD = 'Record'
}
export default {
  data() {
    return {
      recordingSubmited: false,
      recordingActive: false,
      focusTextArea: false,
      buttons: [
        { label: ButtonLabels.STOP, color: 'hsla(207, 90%, 54%, 1)', icon: shallowRef(IconStop) },
        { label: ButtonLabels.RECORD, color: 'hsla(4, 90%, 58%, 1)', icon: shallowRef(IconRecord) },
        { label: ButtonLabels.PLAY, color: 'hsla(160, 100%, 37%, 1)', icon: shallowRef(IconPlay) },
      ]
    };
  },
  methods: {
    handleClick(label: string) {
      if (this.recordingActive && label === ButtonLabels.STOP) {
        this.focusTextArea = true;
      } else {
        this.focusTextArea = false;
      }
      if (label === ButtonLabels.RECORD || label === ButtonLabels.PLAY) {
        this.recordingActive = true
      }
      if (label === ButtonLabels.STOP) {
        this.recordingActive = false
      }
    },
    handleRecordingSubmited() {
      this.recordingSubmited = !this.recordingSubmited;
    }
  }
};
</script>

<style scoped lang="scss">
h1 {
  color: var(--color-text);
  text-align: center;
}

.secondary-content {
  h1 {
    margin-bottom: var(--element-gap)
  }
}

.button-container {
  align-items: center;
  display: flex;
  justify-content: center;
  flex-direction: column;
}

@media (min-width: 351px) {
  .button-container {
    flex-direction: row;
  }
}
</style>
