import "./index.css";
import { store, increment, decrement, reset } from "./store.js";

const resultElem = document.querySelector(".counter__result");
const decrementBtn = document.querySelector("[data-action='decrement']");
const resetBtn = document.querySelector("[data-action='reset']");
const incrementBtn = document.querySelector("[data-action='increment']");

const onIncrement = () => {
  store.dispatch(increment());
};

const onDecrement = () => {
  store.dispatch(decrement());
};

const onReset = () => {
  store.dispatch(reset());
};

incrementBtn.addEventListener("click", onIncrement);
decrementBtn.addEventListener("click", onDecrement);
resetBtn.addEventListener("click", onReset);

store.subscribe(() => {
  console.log(store.getState());
  const state = store.getState();
  const currentValue = state.value;
  const historyString = state.history.join(" ");

  resultElem.textContent = state.value === 0
    ? ""
    : `${historyString} = ${currentValue}`;
});
