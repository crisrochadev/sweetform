<template>
  <draggable
    v-model="item.children"
    group="form"
    item-key="id"
    handle=".handle"
    direction="horizontal"
    :sort="true"
    tag="div"
    :animation="200"
    v-bind="item.attributes ?? {}"
    :class="[item.children.length || 'empty']"
  >
    <template #item="{ element, index }">
      <ItemFormCreator
        :item="element"
        :index="index"
        v-model:items="item.children"
        @update:item="(val:ItemType) => element = val"
      />
    </template>
  </draggable>
</template>

<script setup lang="ts">
import { useItem } from "src/composables/useItem";
import draggable from "vuedraggable";
import ItemFormCreator from "src/components/form/ItemFormCreator.vue";
import { defineProps, defineEmits } from "vue";
import type { ItemProps, ItemEmit } from "src/types/items-types";
const props = defineProps<ItemProps>();
const emit = defineEmits<ItemEmit>();
const { item } = useItem(props, emit);
</script>

<style scoped lang="scss">
.empty {
  padding: 20px;
  border: 1px dashed $purple-2;
  border-radius: 5px;
  position: relative;
}
.empty::before {
  content: "Arraste um novo item";
  color:  $purple-4;
  text-transform: uppercase;
}
</style>
