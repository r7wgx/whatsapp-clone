<template>
  <router-view />
</template>

<script setup>
  import { onMounted } from 'vue';
  import { useUserStore } from '@/store/user-store.js';
  import { useRouter } from 'vue-router';
  
  let userStore = useUserStore();
  const router = useRouter();

  onMounted(() => {
    if(!userStore.sub) return router.push('/login');
  })
</script>
