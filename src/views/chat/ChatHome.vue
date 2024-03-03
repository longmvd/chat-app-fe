<template>
  <div class="chat-home container flex flex-column h-screen">
    <div class="w-4/12">
      <chat-sidebar></chat-sidebar>
    </div>
    <div class="w-8/12">
      <chat-content></chat-content>
    </div>
  </div>
</template>

<script setup lang="ts">
import ChatContent from '@/components/chat-app/layout/ChatContent.vue';
import ChatSidebar from '@/components/chat-app/layout/ChatSidebar.vue';
</script>

<style scoped lang="scss"></style>
