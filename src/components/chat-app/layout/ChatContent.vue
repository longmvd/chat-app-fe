<template>
  <div class="chat-content h-screen flex flex-row">
    <RecycleScroller
      class="user-list list-none flex-1"
      :items="messages"
      :item-size="78"
      key-field="ID"
      :infinite-scroll-disabled="busy"
      :infinite-scroll-distance="10"
      v-slot="{ item }"
    >
      <div class="message-box flex text-sm">
        <div
          class="message-left p-1.5 rounded-full w-5/12"
          :class="{
            'flex items-center bg-slate-200': !isMyMessage(item.UserID),
          }"
        >
          <div v-if="!isMyMessage(item.UserID)">{{ item.Content }}</div>
        </div>
        <div class="message-middle w-2/12"></div>
        <div
          class="message-right p-1.5 w-5/12"
          :class="{
            'flex items-center bg-blue-500 rounded-full text-white':
              isMyMessage(item.UserID),
          }"
        >
          <div v-if="isMyMessage(item.UserID)">{{ item.Content }}</div>
        </div>
      </div>
    </RecycleScroller>
    <div class="edit-message">
      <a-input v-bind="inputConfig"></a-input>
    </div>
  </div>
</template>

<script setup lang="ts">
import { Message } from '@/entities/message';
import { generateGUID } from '@/utils';
import { InputProps } from 'ant-design-vue';
import { reactive, ref } from 'vue';
import { RecycleScroller } from 'vue-virtual-scroller';
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
