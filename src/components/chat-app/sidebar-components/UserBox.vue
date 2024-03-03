<template>
  <div class="user-box">
    <a-list-item
      class="flex rounded-md cursor-pointer mx-1"
      :class="[
        {
          'bg-gray-300': user?.ID == userSelected?.ID,
        },
      ]"
      v-bind="listItemConfig"
      @click="handleItemClick"
    >
      <a-skeleton avatar :title="false" :loading="!!user?.loading" active>
        <a-list-item-meta
          description="Ant Design, a design language for background applications, is refined by Ant UED Team"
          class="flex items-center text-xs py-1"
        >
          <template #title>
            <div class="font-semibold text-base">{{ user.FullName }}</div>
          </template>
          <template #avatar>
            <div class="p-4">
              <a-avatar :src="user.Avatar" v-bind="avatarConfig" />
            </div>
          </template>
        </a-list-item-meta>
      </a-skeleton>
    </a-list-item>
  </div>
</template>

<script setup lang="ts">
import { User } from '@/entities/user';
import { AvatarProps, ListItemMetaProps, ListItemProps } from 'ant-design-vue';
import { reactive } from 'vue';

const props = defineProps<{
  user: User;
  userSelected: User;
}>();

const emit = defineEmits<{
  (e: 'itemClick', user: User): void;
}>();

//#region config
const avatarConfig = reactive<AvatarProps>({
  size: 'large',
});
const listItemMetaConfig = reactive<ListItemMetaProps>({});
const listItemConfig = reactive<ListItemProps>({});
//#endregion

//#region events handlers
function handleItemClick() {
  emit('itemClick', props.user);
}

//#endregion
</script>

<style scoped></style>
