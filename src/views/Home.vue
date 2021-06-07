<template>
  <div class="home">
    <img alt="Me" src="../assets/me.jpg" width="375" height="500">
    <HelloWorld msg="Welcome to Your Vue.js + TypeScript App"/>
    <VmNavigationDrawer>
      <VmActionButton>Hello</VmActionButton>
      <p>Hi</p>
    </VmNavigationDrawer>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import HelloWorld from '@/components/HelloWorld.vue'; // @ is an alias to /src
// import { VmNavigationDrawer, VmActionButton } from 'vue3-material';

export default defineComponent({
  name: 'Home',
  components: {
    HelloWorld,
    // VmNavigationDrawer,
    // VmActionButton
  },
});
</script>
