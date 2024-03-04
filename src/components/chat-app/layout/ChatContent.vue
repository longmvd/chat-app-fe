<template>
  <div class="chat-content h-screen flex flex-col">
    <div class="chat-content-header flex border-b">
      <div class="p-2">
        <a-avatar :href="user?.Avatar" size="large"></a-avatar>
      </div>
    </div>
    <dynamic-scroller
      class="user-list list-none flex-1 mx-2"
      :items="messages"
      :min-item-size="42"
      key-field="ID"
      :infinite-scroll-disabled="busy"
      :infinite-scroll-distance="10"
    >
      <template #before>
        <div class="py-2 flex justify-center">
          Hey! I'm a message displayed before the items!
        </div>
      </template>
      <template #="{ item }">
        <div class="message-box flex text-sm">
          <div
            class="message-left py-1.5 px-2 rounded-full"
            :class="{
              'flex items-center bg-slate-200': !isMyMessage(item.UserID),
              'flex-1': isMyMessage(item.UserID),
            }"
          >
            <div v-if="!isMyMessage(item.UserID)">{{ item.Content }}</div>
          </div>
          <div class="message-middle w-2/12"></div>
          <div
            class="message-right py-1.5 px-2"
            :class="{
              'flex items-center bg-blue-500 rounded-full text-white':
                isMyMessage(item.UserID),
              'flex-1': !isMyMessage(item.UserID),
            }"
          >
            <div v-if="isMyMessage(item.UserID)">{{ item.Content }}</div>
          </div>
        </div>
      </template>
    </dynamic-scroller>
    <div class="toolbar-wrap">
      <chat-toolbar></chat-toolbar>
    </div>
  </div>
</template>

<script setup lang="ts">
import { Message } from '@/entities/message';
import { User } from '@/entities/user';
import { generateGUID } from '@/utils';
import { InputProps } from 'ant-design-vue';
import { reactive, ref } from 'vue';
import { DynamicScroller } from 'vue-virtual-scroller';
import ChatToolbar from '../content-components/ChatToolbar.vue';
const props = defineProps<{
  user: User;
}>();

const messages = reactive<Message[]>([
  {
    ID: generateGUID(),
    Content: 'Con cò be bé',
    CreatedDate: new Date(),
    Username: 'Long',
    UserID: 'long',
  },
  {
    ID: generateGUID(),
    Content: 'Con cò be bé',
    CreatedDate: new Date(),
    Username: 'Long',
    UserID: 'x',
  },
  {
    ID: generateGUID(),
    Content: 'Con cò be bé',
    CreatedDate: new Date(),
    Username: 'Long',
    UserID: 'x',
  },
  {
    ID: generateGUID(),
    Content: 'Con cò be bé',
    CreatedDate: new Date(),
    Username: 'Long',
    UserID: 'long',
  },
  {
    ID: generateGUID(),
    Content: 'Con cò be bé',
    CreatedDate: new Date(),
    Username: 'Long',
    UserID: 'long',
  },
  {
    ID: generateGUID(),
    Content: 'Con cò be bé',
    CreatedDate: new Date(),
    Username: 'Long',
    UserID: 'x',
  },
  {
    ID: generateGUID(),
    Content: 'Con cò be bé',
    CreatedDate: new Date(),
    Username: 'Long',
    UserID: 'x',
  },
  {
    ID: generateGUID(),
    Content: 'Con cò be bé',
    CreatedDate: new Date(),
    Username: 'Long',
    UserID: 'long',
  },
  {
    ID: generateGUID(),
    Content: 'Con cò be bé',
    CreatedDate: new Date(),
    Username: 'Long',
    UserID: 'long',
  },
  {
    ID: generateGUID(),
    Content: 'Con cò be bé',
    CreatedDate: new Date(),
    Username: 'Long',
    UserID: 'x',
  },
  {
    ID: generateGUID(),
    Content: 'Con cò be bé',
    CreatedDate: new Date(),
    Username: 'Long',
    UserID: 'x',
  },
  {
    ID: generateGUID(),
    Content: 'Con cò be bé',
    CreatedDate: new Date(),
    Username: 'Long',
    UserID: 'long',
  },
  {
    ID: generateGUID(),
    Content: 'Con cò be bé',
    CreatedDate: new Date(),
    Username: 'Long',
    UserID: 'long',
  },
  {
    ID: generateGUID(),
    Content: 'Con cò be bé',
    CreatedDate: new Date(),
    Username: 'Long',
    UserID: 'x',
  },
  {
    ID: generateGUID(),
    Content: 'Con cò be bé',
    CreatedDate: new Date(),
    Username: 'Long',
    UserID: 'x',
  },
  {
    ID: generateGUID(),
    Content: 'Con cò be bé',
    CreatedDate: new Date(),
    Username: 'Long',
    UserID: 'long',
  },
  {
    ID: generateGUID(),
    Content: 'Con cò be bé',
    CreatedDate: new Date(),
    Username: 'Long',
    UserID: 'long',
  },
  {
    ID: generateGUID(),
    Content: 'Con cò be bé',
    CreatedDate: new Date(),
    Username: 'Long',
    UserID: 'x',
  },
  {
    ID: generateGUID(),
    Content: 'Con cò be bé',
    CreatedDate: new Date(),
    Username: 'Long',
    UserID: 'long',
  },
  {
    ID: generateGUID(),
    Content: 'Con cò be bé',
    CreatedDate: new Date(),
    Username: 'Long',
    UserID: 'long',
  },
  {
    ID: generateGUID(),
    Content: 'Con cò be bé',
    CreatedDate: new Date(),
    Username: 'Long',
    UserID: 'x',
  },
  {
    ID: generateGUID(),
    Content: 'Con cò be bé',
    CreatedDate: new Date(),
    Username: 'Long',
    UserID: 'long',
  },
  {
    ID: generateGUID(),
    Content: 'Con cò be bé',
    CreatedDate: new Date(),
    Username: 'Long',
    UserID: 'x',
  },
  {
    ID: generateGUID(),
    Content: 'Con cò be bé',
    CreatedDate: new Date(),
    Username: 'Long',
    UserID: 'long',
  },
  {
    ID: generateGUID(),
    Content: 'Con cò be bé',
    CreatedDate: new Date(),
    Username: 'Long',
    UserID: 'x',
  },
  {
    ID: generateGUID(),
    Content: 'Con cò be bé',
    CreatedDate: new Date(),
    Username: 'Long',
    UserID: 'long',
  },
  {
    ID: generateGUID(),
    Content: 'Con cò be bé',
    CreatedDate: new Date(),
    Username: 'Long',
    UserID: 'x',
  },
  {
    ID: generateGUID(),
    Content: 'Con cò be bé',
    CreatedDate: new Date(),
    Username: 'Long',
    UserID: 'long',
  },
  {
    ID: generateGUID(),
    Content: 'Con cò be bé',
    CreatedDate: new Date(),
    Username: 'Long',
    UserID: 'x',
  },
  {
    ID: generateGUID(),
    Content: 'Con cò be bé',
    CreatedDate: new Date(),
    Username: 'Long',
    UserID: 'long',
  },
  {
    ID: generateGUID(),
    Content: 'Con cò be bé',
    CreatedDate: new Date(),
    Username: 'Long',
    UserID: 'x',
  },
  {
    ID: generateGUID(),
    Content: 'Con cò be bé',
    CreatedDate: new Date(),
    Username: 'Long',
    UserID: 'long',
  },
]);

const currentUser = reactive({
  ID: 'long',
});

const busy = ref(false);
//#region config
const inputConfig = reactive<InputProps>({});

//#endregion

function isMyMessage(id: string) {
  return id == currentUser.ID;
}
</script>

<style scoped></style>
