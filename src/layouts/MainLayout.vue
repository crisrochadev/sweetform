<template>
  <q-layout view="hHh lpR fFf">
    <q-header class="bg-grey-3 text-primary">
      <q-toolbar>
        <q-btn
          dense
          unelevated
          icon="menu"
          label="Elementos"
          @click="toggleLeftDrawer"
        />

        <q-toolbar-title class="text-center"> Sweet Form </q-toolbar-title>

        <div>
          <q-btn
            dense
            flat
            round
            :icon="store.view ? 'visibility' : 'visibility_off'"
            @click="store.view = !store.view"
          />
        </div>
      </q-toolbar>
    </q-header>

    <q-drawer
      v-model="leftDrawerOpen"
      side="left"
      bordered
      :behavior="$q.screen.xs || $q.screen.sm ? 'desktop' : 'default'"
    >
      <div
        class="bg-gray-1"
        style="height: calc(100vh - 50px); overflow: hidden"
      >
        <p
          class="q-px-md q-pt-md text-uppercase text-h6 text-primary drawer-title"
        >
          Elementos
        </p>
        <MenuComponent />
      </div>
    </q-drawer>

    <q-dialog
      v-model="store.editAside"
      persistent
      :maximized="true"
      transition-show="slide-up"
      transition-hide="slide-down"
    >
      <q-card class="bg-gray-1">
        <q-card-section
          header
          style="height:40px;padding: 0 20px;"
          class="text-uppercase text-body text-primary drawer-title flex justify-between items-center"
        >
          Editar {{ store.editElement?.title ?? "" }}
          <q-btn
            round
            flat
            color="primary"
            dense
            icon="close"
            @click="store.editAside = false"
          />
        </q-card-section>
        <EditElement v-if="store.editElement" />
      </q-card>
    </q-dialog>

    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script setup lang="ts">
import { ref } from "vue";
import { useTemplateStore } from "src/stores/template.ts";
import { useQuasar } from "quasar";
import MenuComponent from "src/components/form/MenuComponent.vue";
import EditElement from "src/components/form/EditElement.vue";

const $q = useQuasar();

const store = useTemplateStore();
const leftDrawerOpen = ref(true);
function toggleLeftDrawer() {
  leftDrawerOpen.value = !leftDrawerOpen.value;
}
</script>
<style scoped lang="scss">
.drawer-title {
  border-bottom: 1px solid $primary;
}
</style>
