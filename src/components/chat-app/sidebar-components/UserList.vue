<template>
  <RecycleScroller
    class="user-list h-screen list-none"
    :items="users"
    :item-size="78"
    key-field="ID"
    :infinite-scroll-disabled="busy"
    :infinite-scroll-distance="10"
    v-slot="{ item }"
  >
    <!-- <a-list v-bind="listConfig">
      <template #renderItem="{ item }"> -->
    <user-box
      :user="item"
      @itemClick="handleSelect"
      :userSelected="userSelected"
    ></user-box>
    <!-- </template>
    </a-list> -->
  </RecycleScroller>
</template>

<script setup lang="ts">
import { check } from '@/composable/http/use-response';
import { User } from '@/entities/user';
import { generateGUID } from '@/utils';
import { ListProps } from 'ant-design-vue';
import { reactive, ref } from 'vue';
import { useRouter } from 'vue-router';
import { RecycleScroller } from 'vue-virtual-scroller';
import UserBox from './UserBox.vue';
const router = useRouter();
const users = reactive<User[]>([
  {
    FullName: 'Mai Đại Long',
    ID: generateGUID(),
  },
  {
    FullName: 'Mai Đại Long',
    ID: generateGUID(),
  },
  {
    FullName: 'Mai Đại Long',
    ID: generateGUID(),
  },
  {
    FullName: 'Mai Đại Long',
    ID: generateGUID(),
  },
  {
    FullName: 'Mai Đại Long',
    ID: generateGUID(),
  },
  {
    FullName: 'Mai Đại Long',
    ID: generateGUID(),
  },
  {
    FullName: 'Mai Đại Long',
    ID: generateGUID(),
  },
  {
    FullName: 'Mai Đại Long',
    ID: generateGUID(),
  },

  {
    FullName: 'Mai Đại Long',
    ID: generateGUID(),
  },
  {
    FullName: 'Mai Đại Long',
    ID: generateGUID(),
  },
  {
    FullName: 'Mai Đại Long',
    ID: generateGUID(),
  },
  {
    FullName: 'Mai Đại Long',
    ID: generateGUID(),
  },
  {
    FullName: 'Mai Đại Long',
    ID: generateGUID(),
  },
  {
    FullName: 'Mai Đại Long',
    ID: generateGUID(),
  },
  {
    FullName: 'Mai Đại Long',
    ID: generateGUID(),
  },
  {
    FullName: 'Mai Đại Long 99',
    ID: generateGUID(),
  },
]);
const listConfig = reactive<ListProps>({
  dataSource: users,
  itemLayout: 'horizontal',
});

const busy = ref(false);
const loading = ref(false);
const total = ref(14);
function handleInfiniteOnLoad() {
  loading.value = true;
  if (users.length > total.value) {
    // this.$message.warning('Infinite List loaded all');
    busy.value = true;
    loading.value = false;
    return;
  }
}

async function fetchData() {
  // var res = await
  const res = null;
  const { data, isSuccess } = check(res);

  if (isSuccess) {
    users.push(...data);
    loading.value = false;
  }
}

const userSelected = ref<User>({});

//#region event handlers

function handleSelect(user: User) {
  userSelected.value = user;
  router.push({ name: 'ChatHome', params: { userId: user?.ID } });
}
//#endregion
</script>

<style scoped></style>
