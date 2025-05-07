<template>
  <q-item class="item flex" :class="[!store.view && 'view']">
    <q-item-section
      side
      class="handle"
      style="cursor: move"
      v-if="!store.view && item.draggable"
    >
      <q-icon name="fa-solid fa-grip-vertical" color="primary" size="xs" />
    </q-item-section>
    <q-item-section>
      <q-item-label
        v-if="!store.view"
        caption
        class="full-width flex justify-center q-mb-sm text-primary text-bold"
        style="text-transform: uppercase"
        >{{ item.title }}</q-item-label
      >
      <component :is="component" v-model:item="item"></component>
    </q-item-section>
    <q-item-section side v-if="!store.view">
      <q-btn
        icon="edit"
        color="primary"
        round
        dense
        flat
        size="md"
        @click="(store.editAside = true), (store.editElement = item)"
      />
      <q-btn
        icon="delete"
        color="negative"
        round
        dense
        flat
        size="md"
        @click="deleteElement"
      />
    </q-item-section>
  </q-item>
</template>

<script setup lang="ts">
import {
  defineAsyncComponent,
  computed,
  defineProps,
  defineEmits,
  ref,
} from "vue";
import ErrorComponent from "./elements/ErrorComponent.vue";
import LoadingComponent from "./elements/LoadingComponent.vue";
import { useTemplateStore } from "src/stores/template.ts";
import { useQuasar } from "quasar";
const props = defineProps<{
  item: ItemType;
  index: number;
  items: ItemType[];
}>();
const emit = defineEmits<{
  "update:item": (item: ItemType) => void;
  "update:items": (item: [ItemType[]]) => void;
}>();
const item = computed<ItemType>({
  get() {
    return props.item;
  },
  set(val: ItemType) {
    emit("update:item", val);
  },
});
const items = computed<ItemType[]>({
  get() {
    return props.items;
  },
  set(val: ItemType[]) {
    emit("update:items", val);
  },
});
const component = computed(() =>
  defineAsyncComponent({
    loader: () => import(`./elements/${item.value?.component}.vue`),
    loadingComponent: LoadingComponent,
    delay: 200,
    errorComponent: ErrorComponent,
    timeout: 3000,
  })
);

const store = useTemplateStore();
const $q = useQuasar();
function deleteElement() {
  $q.dialog({
    message: `Deseja deletar o elemento ( ${item.value.title}) ?`,
    color: "negative",
    class: "text-h6 text-negative",
    ok: {
      label: "Deletar",
      color: "negative",
    },
    cancel: {
      label: "Cancelar",
      outline: true,
      color: "grey-6",
    },
  }).onOk(() => {
    items.value.splice(props.index, 1);
  });
}
</script>

<style scoped lang="scss">
.item {
  padding: 10px;
  opacity: 0.8;
  max-width: 100%;
  flex-wrap: wrap !important;
}
.item:hover {
  opacity: 1;
}
.view {
  background-color: $grey-1;
  border-radius: 5px;
  margin: 10px 0;
  box-shadow: 0 0 2px rgba(0, 0, 0, 0.25);
}
</style>
