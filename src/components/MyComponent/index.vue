<!-- src/components/MyComponent/index.vue -->
<template>
  <div class="my-component-test">My Component Test</div>
</template>
<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'MyComponent',
  setup () {
    return {}
  }
})
</script>
<style scoped>
.my-component-test {
  color: red;
}
</style>
