<template>
  <q-range
    v-if="item.attributes"
    v-model="item.value"
    v-bind="item.attributes ?? {}"
  />
</template>

<script setup lang="ts">
import { useItem } from "src/composables/useItem";
import { defineProps, defineEmits, ref, computed } from "vue";
import type { ItemProps, ItemEmit } from "src/types/items-types";
const props = defineProps<ItemProps>();
const emit = defineEmits<ItemEmit>();
const { item } = useItem(props, emit);

console.log(item.value.attributes)
</script>

<style scoped></style>
