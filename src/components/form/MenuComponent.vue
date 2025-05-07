<template>
  <q-list class="full-width full-height">
    <q-scroll-area style="height: calc(100vh - 100px)">
      <q-expansion-item
        dense
        expand-separator
        icon="space_dashboard"
        label="Elementos para layout"
        header-class="text-primary"
        header-style="text-transform: uppercase;font-weight: 700;font-size:12px"
        expand-icon-class="text-primary"
        default-opened
      >
        <draggable
          dragClass="drag"
          ghostClass="drag"
          chosenClass="drag"
          :clone="onClone"
          v-model="layoutItems"
          :group="{ name: 'form', pull: 'clone', put: false }"
          :sort="false"
          handle=".handle"
          item-key="id"
          class="q-px-sm"
        >
          <template #item="{ element }">
            <q-item
              clickable
              dense
              class="handle bg-primary q-my-xs q-mx-xs"
              style="cursor: grab !important; border-radius: 5px"
            >
              <q-item-section avatar>
                <q-avatar round>
                  <q-icon :name="element.icon" color="white" />
                </q-avatar>
              </q-item-section>
              <q-item-section
                class="text-white text-bold"
                style="text-transform: uppercase; font-size: 12px"
              >
                {{ element.title }}
              </q-item-section>
              <q-item-section side>
                <q-icon
                  name="fa-solid fa-grip-vertical"
                  color="white"
                  size="xs"
                />
              </q-item-section>
            </q-item>
          </template>
        </draggable>
      </q-expansion-item>
      <q-expansion-item
        expand-separator
        icon="table_rows"
        label="Elementos para Formulário"
        header-class="text-primary"
        header-style="text-transform: uppercase;font-weight: 700;font-size:12px"
        expand-icon-class="text-primary"
        default-opened
      >
        <draggable
          dragClass="drag"
          ghostClass="drag"
          chosenClass="drag"
          :clone="onClone"
          v-model="items"
          :group="{ name: 'form', pull: 'clone', put: false }"
          :sort="false"
          handle=".handle"
          item-key="id"
          class="q-px-sm q-pb-lg"
        >
          <template #item="{ element }">
            <q-item
              clickable
              dense
              class="handle bg-primary q-my-xs q-mx-xs"
              style="cursor: grab !important; border-radius: 5px"
            >
              <q-item-section avatar>
                <q-avatar round>
                  <q-icon :name="element.icon" color="white" />
                </q-avatar>
              </q-item-section>
              <q-item-section
                class="text-white text-bold"
                style="text-transform: uppercase; font-size: 12px"
              >
                {{ element.title }}
              </q-item-section>
              <q-item-section side>
                <q-icon
                  name="fa-solid fa-grip-vertical"
                  color="white"
                  size="xs"
                />
              </q-item-section>
            </q-item>
          </template>
        </draggable>
      </q-expansion-item>
    </q-scroll-area>
  </q-list>
</template>

<script setup lang="ts">
import { ref } from "vue";
import { isValidDateBR } from "src/utils/date";
import draggable from "vuedraggable";
import { v4 as uuidv4 } from "uuid";
const items = ref<ItemType[]>([
  {
    id: 1,
    name: "text_field",
    title: "Entrada de texto pequeno",
    draggable: true,
    component: "InputField",
    value: null,
    attributes: {
      outlined: true,
      label: "Entrada de texto",
      type: "text",
    },
    icon: "text_fields",
  },
  {
    id: 13,
    name: "textarea_field",
    title: "Entrada de texto grande",
    draggable: true,
    component: "InputField",
    value: null,
    attributes: {
      outlined: true,
      label: "Entrada de texto",
      type: "textarea",
    },
    icon: "fa-solid fa-align-left",
  },
  {
    id: 2,
    name: "number_field",
    title: "Entrada de número",
    draggable: true,
    component: "InputField",
    value: null,
    attributes: {
      outlined: true,
      label: "Entrada de número",
      type: "number",
    },
    icon: "123",
  },
  {
    id: 3,
    name: "phone_field",
    title: "Entrada de telefone",
    draggable: true,
    component: "InputField",
    value: null,
    attributes: {
      outlined: true,
      mask: "(##) #####-####",
      clearable: true,
      label: "Entrada de telefone",
      type: "text",
    },
    icon: "call",
  },
  {
    id: 4,
    name: "date_field",
    title: "Entrada de data",
    draggable: true,
    component: "InputField",
    value: null,
    attributes: {
      outlined: true,
      mask: "##/##/####",
      clearable: true,
      rules: [isValidDateBR],
      label: "Entrada de data",
      type: "text",
    },
    date: true,
    icon: "calendar_month",
  },
  {
    id: 5,
    name: "password_field",
    title: "Entrada de senha",
    draggable: true,
    component: "InputField",
    value: null,
    attributes: {
      outlined: true,
      clearable: true,
      label: "Entrada de senha",
      type: "password",
    },
    password: true,
    icon: "password",
  },
  {
    id: 6,
    name: "file_field",
    title: "Entrada de arquivos",
    draggable: true,
    component: "FileField",
    value: null,
    attributes: {
      outlined: true,
      clearable: true,
      label: "Entrada de arquivos",
    },
    password: true,
    icon: "upload",
  },
  {
    id: 7,
    name: "radio_field",
    title: "Selecão unica",
    draggable: true,
    component: "RadioField",
    value: null,
    attributes: {
      outlined: true,
      clearable: true,
      val: "group-1",
      label: "Selecão unica",
    },
    icon: "radio_button_checked",
  },
  {
    id: 8,
    name: "checkbox_field",
    title: "Caixa de seleção",
    draggable: true,
    component: "CheckboxField",
    value: null,
    attributes: {
      outlined: true,
      clearable: true,
      label: "Caixa de seleção",
    },
    icon: "check_box",
  },
  {
    id: 9,
    name: "toggle_field",
    title: "Botão para alternar",
    draggable: true,
    component: "ToggleField",
    value: null,
    attributes: {
      label: "Botão para alternar",
    },
    icon: "toggle_on",
  },
  {
    id: 9,
    name: "slider_field",
    title: "Faixa de valores",
    draggable: true,
    component: "RangeField",
    value: { min: null, max: null },
    attributes: {
      outlined: true,
      clearable: true,
      min: 50,
      max: 90,
    },
    icon: "fa-solid fa-sliders",
  },
  {
    id: 10,
    name: "slider_field",
    title: "Controle deslizante ",
    draggable: true,
    component: "SliderField",
    value: null,
    attributes: {
      outlined: true,
      clearable: true,
    },
    icon: "linear_scale",
  },
  {
    id: 11,
    name: "slider_field",
    title: "Botões para alternar",
    draggable: true,
    component: "ButtonToggleField",
    value: null,
    attributes: {
      outlined: true,
      clearable: true,
      label: "Botões para alternar",
      options: [
        { label: "Opção 1", value: "opt1" },
        { label: "Opção 2", value: "opt2" },
        { label: "Opção 3", value: "opt3" },
      ],
      spread: true,
    },
    icon: "fa-solid fa-mattress-pillow",
  },
  {
    id: 12,
    name: "options_field",
    title: "Grupo de opçoes",
    draggable: true,
    component: "OptionGroupField",
    value: null,
    attributes: {
      outlined: true,
      clearable: true,
      label: "Grupo de opçoes",
      options: [
        { label: "Opção 1", value: "opt1" },
        { label: "Opção 2", value: "opt2" },
        { label: "Opção 3", value: "opt3" },
      ],
      spread: true,
    },
    icon: "fa-solid fa-ellipsis-vertical",
  },
  {
    id: 13,
    name: "select_field",
    title: "Seletor de opçoes",
    draggable: true,
    component: "SelectField",
    value: null,
    attributes: {
      outlined: true,
      clearable: true,
      label: "Seletor de opçoes",
      options: [
        { label: "Opção 1", value: "opt1" },
        { label: "Opção 2", value: "opt2" },
        { label: "Opção 3", value: "opt3" },
      ],
      spread: true,
    },
    icon: "fa-solid fa-square-caret-down",
  },
]);
const layoutItems = ref<ItemType[]>([
  {
    id: 14,
    name: "title_1",
    title: "Título",
    draggable: true,
    component: "TextComponent",
    attributes: {
      class: ["text-h3"],
      style:{
        width:'calc(100% - 20px)',
        overflow:'hidden'
      }
    },
    content: "Exemplo de título",
    icon: "title",
  },
  {
    id: 15,
    name: "text",
    title: "Texto",
    draggable: true,
    component: "TextComponent",
    attributes: {
      class: ["text-body"],
    },
    content: "Exemplo de texto",
    icon: "text_fields",
  },
  {
    id: 16,
    name: "image",
    title: "Imagem",
    draggable: true,
    component: "ImageComponent",
    attributes: {
      src: "/images/image.png",
      style: {
        width: "100px",
        margin:'0 auto'
      },
    },
    icon: "image",
  },
  {
    id: 16,
    name: "icon",
    title: "Ícone",
    draggable: true,
    component: "IconComponent",
    attributes: {
      name:'fa-solid fa-icons'
    },
    icon: "fa-solid fa-icons",
  },
  {
    id: 17,
    name: "grid_section",
    title: "Seção com colunas",
    draggable: true,
    component: "GridSection",
    attributes: {
      style:{
        display:'grid',
        gridTemplateColumns:'1fr 1fr',
        maxWidth:'100%',
        gap:'10px'
      }
    },
    children:[],
    icon: "grid_view",
  },
]);

function onClone(item: ItemType) {
  const newItem = { ...item, attributes: { ...item.attributes } };
  newItem.id = uuidv4();
  return newItem;
}
</script>

<style scoped lang="scss">
.drag .handle {
  display: none !important;
}
</style>
