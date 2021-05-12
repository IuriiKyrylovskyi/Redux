import "./index.scss";
import store, { increment, decrement, reset } from "./store.js";

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

// const toAddSign = (e) => {
//   console.log(e.target.dataset.action);
//   e.target.dataset.action === 'increment' ? "+" : "";
// }

store.subscribe(() => {
  const state = store.getState();
  // console.log(state);
  const currentValue = state.history.reduce((acc, value) => acc + parseInt(value), 0);
  const historyString = state.history.join("");

    resultElem.textContent = state.history.length === 0 ? "" : `${historyString} = ${currentValue}`;
  // resultElem.textContent = currentValue === 0 ? "" : `${historyString} = ${currentValue}`;
});
