<template>
  <div
    class="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8"
  >
    <div class="sm:mx-auto sm:w-full sm:max-w-sm">
      <img
        class="mx-auto h-10 w-auto"
        src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
        alt="Your Company"
      />
      <h2
        class="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900"
      >
        Join the chat
      </h2>
    </div>

    <div class="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
      <div class="space-y-6" action="#" method="POST">
        <div>
          <label
            for="email"
            class="block text-sm font-medium leading-6 text-gray-900"
            >Username</label
          >
          <div class="mt-2">
            <input
              id="email"
              name="email"
              type="text"
              autocomplete="email"
              v-model="formModel.Username"
              required="true"
              class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 px-4"
            />
          </div>
        </div>

        <div>
          <div class="flex items-center justify-between">
            <label
              for="password"
              class="block text-sm font-medium leading-6 text-gray-900"
              >Chat room</label
            >
            <div class="text-sm">
              <div
                href="#"
                class="font-semibold text-indigo-600 hover:text-indigo-500"
              >
                Forgot password?
              </div>
            </div>
          </div>
          <div class="mt-2">
            <input
              id="password"
              name="password"
              type="text"
              autocomplete="current-password"
              required="true"
              v-model="formModel.ChatRoom"
              class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 px-4"
            />
          </div>
        </div>

        <div>
          <button
            class="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            @click="() => joinChatRoom(formModel)"
          >
            Sign in
          </button>
        </div>
      </div>

      <p class="mt-10 text-center text-sm text-gray-500">
        Not a member?
        {{ ' ' }}
        <a
          href="#"
          class="font-semibold leading-6 text-indigo-600 hover:text-indigo-500"
          >Start a 14 day free trial</a
        >
      </p>
    </div>
  </div>
</template>

<script setup lang="ts">
import { UserConnection } from '@/entities/connection';
import { ref } from 'vue';

const formModel = ref<UserConnection>({
  Username: '',
  ChatRoom: '',
});

const emit = defineEmits<{
  (e: 'joinChatRoom', userConnection: UserConnection): void;
}>();
// defineModel<UserConnection>({});

function joinChatRoom(userConnection: UserConnection) {
  console.log(userConnection);

  emit('joinChatRoom', userConnection);
}
</script>

<style scoped></style>
