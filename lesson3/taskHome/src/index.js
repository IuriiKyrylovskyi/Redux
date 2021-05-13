import { addProduct, removeProduct } from "./cart.actions";
import { setLanguage } from "./language.actions";
import store from "./store";
import { removeUser, setUser } from "./user.actions";

store.subscribe(() => store.getState());

store.dispatch(setLanguage("jp"));
store.dispatch(setLanguage("ua"));

store.dispatch(addProduct({ id: 1, name: "milk" }));
store.dispatch(addProduct({ id: 11, name: "bread" }));
store.dispatch(addProduct({ id: 111, name: "chocolate" }));
store.dispatch(removeProduct(1));
store.dispatch(addProduct({ id: 2, name: "water" }));

store.dispatch(setUser({ name: "Bob" }));
store.dispatch(removeUser());
store.dispatch(setUser({ name: "Tom" }));
store.dispatch(setUser({ name: "Nick Cage" }));
store.dispatch(removeUser());
