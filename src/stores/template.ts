import { defineStore, acceptHMRUpdate } from "pinia";

export const useTemplateStore = defineStore("template", {
  state: () => ({
    view: false,
    editAside:false,
    editElement:null
  }),
});

if (import.meta.hot) {
  import.meta.hot.accept(acceptHMRUpdate(useTemplateStore, import.meta.hot));
}
