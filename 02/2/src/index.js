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
  const state = store.getState();
  const currentValue = state.history.reduce((acc, value) => acc + parseInt(value), 0);
  const historyString = state.history.join("");

  resultElem.textContent = currentValue === 0 ? "" : `${historyString} = ${currentValue}`;
});

