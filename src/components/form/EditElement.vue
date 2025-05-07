<template>
  <q-card-section>
    <q-card class="q-my-xs q-mx-xs q-py-xs q-px-xs">
      <component :is="component" v-model:item="item"></component>
    </q-card>
</q-card-section>
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

const store = useTemplateStore();
const item = computed<ItemType>({
  get() {
    return store.editElement;
  },
  set(val: ItemType) {
    store.editElement = val;
  },
});

const component = computed(() => {
  if (!item.value?.component) return null;

  return defineAsyncComponent({
    loader: () => import(`./elements/${item.value.component}.vue`),
    loadingComponent: LoadingComponent,
    delay: 200,
    errorComponent: ErrorComponent,
    timeout: 3000,
  });
});
</script>

<style scoped></style>
