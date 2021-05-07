import { store, increment, decrement, reset } from "./store.js";

const resultElem = document.querySelector(".counter__result");
const decrementBtn = document.querySelector("[data-action='decrement']");
const resetBtn = document.querySelector("[data-action='reset']");
const incrementBtn = document.querySelector("[data-action='increment']");

const onIncrement = () => {
  store.despatch(increment());
};

incrementBtn.addEventListener("click", onIncrement);

store.subscribe(() => {
  console.log(store.getSate());
});
