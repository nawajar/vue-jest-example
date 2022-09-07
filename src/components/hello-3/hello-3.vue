<template>
  <div class="w-full">hello {{ counter }}
    <button id="click-btn" @click="doSomething">click</button>
  </div>
</template>

<script>
import { defineComponent, ref, onMounted, nextTick } from "vue";

export default defineComponent({
  setup() {
    const counter = ref(0);

    const doSomething = () => {
      counter.value++;
    };

    onMounted(async () => {});

    return {
      counter,
      doSomething,
    };
  },
});
</script>
