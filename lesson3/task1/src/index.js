import { decrement, increment, reset } from "./counter.actions";
import store from "./store";
import { addUser, deleteUser, updateUser } from "./users.actions";

store.subscribe(() => console.log(store.getState()));

store.dispatch(increment());
store.dispatch(increment());
store.dispatch(decrement());
store.dispatch(reset());
store.dispatch(decrement());

store.dispatch(addUser({ id: 1, name: "Tom" }));
store.dispatch(addUser({ id: 2, name: "Bob" }));
store.dispatch(deleteUser(2));
store.dispatch(addUser({ id: 3, name: "Nick" }));
store.dispatch(updateUser(3, { age: 22 }));
