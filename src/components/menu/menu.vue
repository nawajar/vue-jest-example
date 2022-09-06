<template>
  <div class="w-full h-screen flex">
    <div class="w-[200px] flex flex-col bg-gray-200 h-full">
      <router-link :to="{ name: 'helo1' }">
        <button class="">Hello 1</button>
      </router-link>
      <router-link :to="{ name: 'helo2' }">
        <button class="">Hello 2</button>
      </router-link>
    </div>
    <div>
      <router-view />
    </div>
  </div>
</template>

<script>
export default {
  name: "Menu",
  computed: {},
};
</script>

<style scoped lang="scss">
</style>
