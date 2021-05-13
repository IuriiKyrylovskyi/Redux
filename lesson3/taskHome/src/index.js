import store from "./store";

store.subscribe(() => store.getState());

store.dispatch();
