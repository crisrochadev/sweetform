<template>
  <q-input
    v-model="item.value"
    v-bind="item.attributes ?? {}"
  >
    <template v-slot:append>
      <q-icon
        name="event"
        class="cursor-pointer"
        v-if="item.date"
        color="primary"
      >
        <q-menu>
          <q-date
            :rules="['date']"
            mask="DD/MM/YYYY"
            v-model="item.value"
            :locale="locale"
            :default-year-month="defaultYearMonth"
          >
            <div class="row items-center justify-end">
              <q-btn color="primary" v-close-popup label="Fechar" flat />
            </div>
          </q-date>
        </q-menu>
      </q-icon>
      <q-btn
        v-if="item.password"
        :icon="visibility ? 'visibility' : 'visibility_off'"
        round
        dense
        flat
        color="primary"
        @click="changePassword"
      />
    </template>
  </q-input>
</template>

<script setup lang="ts">
import { useItem } from "src/composables/useItem";
import moment from "moment";
import { defineProps, defineEmits, ref, computed } from "vue";
import type { ItemProps, ItemEmit } from "src/types/items-types";
const props = defineProps<ItemProps>();
const emit = defineEmits<ItemEmit>();
const { item } = useItem(props, emit);
type Locale = {
  days: string[];
  daysShort: string[];
  months: string[];
  monthsShort: string[];
};

const locale = ref<Locale>({
  days: [
    "Domingo",
    "Segunda-feira",
    "Terça-feira",
    "Quarta-feira",
    "Quinta-feira",
    "Sexta-feira",
    "Sábado",
  ],
  daysShort: ["Dom", "Seg", "Ter", "Qua", "Qui", "Sex", "Sáb"],
  months: [
    "Janeiro",
    "Fevereiro",
    "Março",
    "Abril",
    "Maio",
    "Junho",
    "Julho",
    "Agosto",
    "Setembro",
    "Outubro",
    "Novembro",
    "Dezembro",
  ],
  monthsShort: [
    "Jan",
    "Fev",
    "Mar",
    "Abr",
    "Mai",
    "Jun",
    "Jul",
    "Ago",
    "Set",
    "Out",
    "Nov",
    "Dez",
  ],
});

const defaultYearMonth = ref<string>(moment().format("YYYY/MM"));
const visibility = ref<boolean>(false);

function checkDate(val) {
  return false;
}

function changePassword(){
  visibility.value = !visibility.value
  item.value.attributes.type = visibility.value ? 'text' : 'password'
}

</script>

<style scoped></style>
