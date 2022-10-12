<template>
  <div class="component-test">Component Test</div>
</template>
<script setup>
import { defineComponent } from 'vue'

defineComponent({
  name: 'component-test',
  setup () {
    return {}
  }
})
</script>
<style scoped>
.component-test {
  color: red;
}
</style>
