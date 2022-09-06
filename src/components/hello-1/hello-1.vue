<template>
  <div class="w-full">hello {{ count }}
    <button id="click-btn" @click="doSomething">click</button>
  </div>
</template>

<script>
export default {
  name: "Hello1",
  data() {
   return {
    count: 0
   }
  },
  computed: {},
  methods: {
    doSomething: function(event) {
      this.count++;
    }
  }
};
</script>
