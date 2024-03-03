<template>
  <div class="chat-room">
    <div class="message-box">
      <message-container :messages="messages"></message-container>
    </div>
    <div class="message-input">
      <input
        type="text"
        v-model="message"
        class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 px-4"
      />
    </div>
    <div>
      <button @click="sendMessage">Gửi</button>
    </div>
  </div>
</template>

<script setup lang="ts">
import { Message } from '@/entities/message';
import { ref } from 'vue';
import MessageContainer from './MessageContainer.vue';

const messages = defineModel<Message[]>('messages', {
  default: [],
});

const emit = defineEmits<{
  (e: 'sendMessage', message: string): void;
}>();

const message = ref<string>('');

function sendMessage() {
  emit('sendMessage', message.value);
}
</script>

<style scoped lang="scss">
.chat-room {
  margin: auto;
  width: 400px;
}
</style>
