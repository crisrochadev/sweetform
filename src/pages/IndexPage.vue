<template>
  <q-page class="full-width q-px-md q-py-md" style="height:calc(100vh - 70px) !important">
    <q-scroll-area class="full-width full-height">
      <FormCreator v-model:items="items" />
    </q-scroll-area>
  </q-page>
</template>

<script setup lang="ts">
import FormCreator from "src/components/form/FormCreator.vue";
import { ref } from "vue";
const items = ref<ItemType[]>([]);
</script>

<style scoped></style>
