<template>
  <div>
    <div v-if="connection">
      <chat-room></chat-room>
    </div>
    <div v-else>
      <waiting-room @join-chat-room="joinChatRoom"></waiting-room>
    </div>
  </div>
</template>

<script setup lang="ts">
import { UserConnection } from '@/entities/connection';
import {
  HubConnection,
  HubConnectionBuilder,
  LogLevel,
} from '@microsoft/signalr';
import { ref } from 'vue';
import ChatRoom from './ChatRoom.vue';
import WaitingRoom from './WaitingRoom.vue';

const connection = ref<HubConnection>();

async function joinChatRoom(userConnection: UserConnection) {
  try {
    if (!connection.value) {
      const conn = new HubConnectionBuilder()
        .withUrl('http://localhost:5159/Chat')
        .configureLogging(LogLevel.Information)
        .build();
      conn.on('ReceiveMessage', (user, message) => {
        console.log(user, message.toString());
      });

      conn.on('ReceiveSpecificMessage', (user, message) => {
        console.log(user, message.toString());
      });
      await conn.start();
      await conn.invoke('JoinSpecificChatRoom', userConnection);
      connection.value = conn;
    }
  } catch (e) {
    console.log(e);
  }
}
interface SendingMessage {
  ChatRoom: string;
  Message: string;
  Sender: string;
  Recipient?: string;
}

function sendMessage(sendingMessage: SendingMessage) {}
</script>

<style lang="scss" scoped></style>
