<template>
  <div>
    <div v-if="connection">
      <chat-room
        v-model:messages="messages"
        @send-message="sendMessage"
      ></chat-room>
    </div>
    <div v-else>
      <waiting-room @join-chat-room="joinChatRoom"></waiting-room>
    </div>
  </div>
</template>

<script setup lang="ts">
import { UserConnection } from '@/entities/connection';
import { Message } from '@/entities/message';
import {
  HubConnection,
  HubConnectionBuilder,
  LogLevel,
} from '@microsoft/signalr';
import { ref } from 'vue';
import ChatRoom from './ChatRoom.vue';
import WaitingRoom from './WaitingRoom.vue';

const connection = ref<HubConnection>();

const messages = ref<Message[]>([]);

async function joinChatRoom(userConnection: UserConnection) {
  try {
    if (!connection.value) {
      const conn = new HubConnectionBuilder()
        .withUrl('http://localhost:5159/Chat')
        .configureLogging(LogLevel.Information)
        .build();
      conn.on('ReceiveMessage', (user, message) => {
        messages.value = [
          ...(messages.value as any),
          { Content: message, Username: user },
        ];
      });

      conn.on('GetRoomMessages', (message) => {
        console.log('GetRoomMessages', message);

        if (message) {
          let receivedMessages = JSON.parse(message);
          console.log(receivedMessages);

          messages.value = [...(messages.value as any), ...receivedMessages];
        }
      });

      conn.on('ReceiveSpecificMessage', (user, message) => {
        console.log(user, message.toString());
        messages.value = [
          ...(messages.value as any),
          { Content: message, Username: user },
        ];
      });
      await conn.start();
      await conn.invoke('JoinSpecificChatRoom', userConnection);
      await conn.invoke('GetMessagesByRoom', userConnection);
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

async function sendMessage(message: string) {
  try {
    debugger;
    if (connection.value) {
      await connection.value.invoke('SendMessage', message);
    }
  } catch (e) {
    console.log(e);
  }
}
</script>

<style lang="scss" scoped></style>
