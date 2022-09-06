<template>
  <div class="w-full">hello 1
    <button id="click-btn" @click="doSomething">click</button>
  </div>
</template>

<script>
export default {
  name: "Hello1",
  computed: {},
  methods: {
    doSomething: function(event) {
      console.log('click!');
    }
  }
};
</script>
