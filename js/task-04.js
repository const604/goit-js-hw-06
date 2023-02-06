const refs = {
  counter: document.querySelector("#counter"),
  counterValueRef: document.querySelector("#value"),
  decrementBtn: document.querySelector('button[data-action="decrement"]'),
  incrementBtn: document.querySelector('button[data-action="increment"]'),
  counterValue: 0,
};
const onDecrementBtnClick = () => {
refs.counterValueRef.textContent = refs.counterValue -= 1;
};

const onIncrementBtnClick = () => {
refs.counterValueRef.textContent = refs.counterValue += 1;
};

refs.decrementBtn.addEventListener("click", onDecrementBtnClick);
refs.incrementBtn.addEventListener("click", onIncrementBtnClick);
