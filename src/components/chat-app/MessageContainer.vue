<template>
  <div>
    <div v-for="(message, index) in messages">
      <table>
        <tr :key="index">
          <td>{{ message.Message }} - {{ message.Username }}</td>
        </tr>
      </table>
    </div>
  </div>
</template>

<script setup lang="ts">
import { Message } from '@/entities/message';
const props = defineProps<{
  messages: Message[];
}>();
</script>

<style scoped></style>
