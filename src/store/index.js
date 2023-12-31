import journalModule from "@/modules/daybook/store/module-journal";
import { createStore } from "vuex";

const store = createStore({
  modules: {
    journal: journalModule,
  },
});

export default store;
