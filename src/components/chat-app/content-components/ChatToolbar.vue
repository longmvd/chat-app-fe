<template>
  <div class="chat-toolbar flex p-1">
    <div class="chat-toolbar-left flex">
      <div
        v-for="item in toolbarItems"
        class="chat-toolbar-item"
        :style="{
          width: '32px',
          height: '32px',
        }"
        @click="item.Action"
      ></div>
    </div>
    <div class="chat-toolbar-right flex flex-1 items-center">
      <div class="chat-toolbar-item flex-1 relative">
        <a-textarea
          v-bind="inputConfig"
          class="rounded-full"
          placeholder="Aa"
          autoSize={{ minRows: 2, maxRows: 6 }}
        ></a-textarea>
        <div
          class="w-6 h-6 rounded-full bg-blue-500 absolute inset-y-1/4 right-1.5"
        ></div>
      </div>
      <div class="emoji p-1 min-w-8 h-8"></div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { generateGUID } from '@/utils';
import { TextAreaProps } from 'ant-design-vue';
import { reactive } from 'vue';

interface ToolbarItem {
  ID: string;
  Title?: string;
  Action: () => void;
  Icon: string;
  SortOrder: number;
}
const toolbarItems = reactive<ToolbarItem[]>([
  {
    ID: generateGUID(),
    Action: () => {},
    Icon: '',
    SortOrder: 1,
  },
  {
    ID: generateGUID(),
    Action: () => {},
    Icon: '',
    SortOrder: 1,
  },
  {
    ID: generateGUID(),
    Action: () => {},
    Icon: '',
    SortOrder: 1,
  },
  {
    ID: generateGUID(),
    Action: () => {},
    Icon: '',
    SortOrder: 1,
  },
]);
//#region configuration
const inputConfig = reactive<TextAreaProps>({});

//#endregion
</script>

<style scoped></style>
