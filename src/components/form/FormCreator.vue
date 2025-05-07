<template>
  <draggable
    ghostClass="drag"
    v-model="items"
    item-key="id"
    group="form"
    :animation="200"
    :disabled="store.view"
    handle=".handle"
    :class="[items.length || 'empty', 'drag-area']"
  >
    <template #item="{ element, index }">
      <div>
        <ItemFormCreator
          :item="element"
          v-model:items="items"
          :index="index"
          @update:item="(val:ItemType) => element = val"
        />
      </div>
    </template>
  </draggable>
</template>

<script setup lang="ts">
import type { ItemType } from "src/types/items-types.ts";
import ItemFormCreator from "src/components/form/ItemFormCreator.vue";
import draggable from "vuedraggable";
import { QInput } from "quasar";
import { ref, defineProps, defineEmits, computed } from "vue";
import { useTemplateStore } from "src/stores/template.ts";

const store = useTemplateStore();

const props = defineProps<{ items: ItemType[] }>();
const emit = defineEmits<{ "update:items": [ItemType[]] }>();
const items = computed<ItemType[]>({
  get() {
    return props.items;
  },
  set(val: itemType[]) {
    emit("update:items", val);
  },
});
</script>

<style scoped lang="scss">
.drag-area {
  padding-bottom: 50px;
  max-width: 90%;
}
.empty {
  padding: 20px;
  border: 1px dashed $purple-2;
  border-radius: 5px;
  position: relative;
}
.empty::before {
  content: "Arraste um novo item";
  color: $purple-4;
  text-transform: uppercase;
}
</style>
