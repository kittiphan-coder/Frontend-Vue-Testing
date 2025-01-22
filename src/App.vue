<script setup lang="ts">
import { onBeforeMount } from 'vue';
import { useUserStore } from './stores/user';

const user = useUserStore();

onBeforeMount(()=>{
  user.checkDataCookies()
})
</script>

<template>
  <RouterView />
</template>

