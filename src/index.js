import { createStore } from 'redux';

const reducer = (state = 0, action) => {
  switch (action.type) {
    case 'INCREMENT':
      return state + 1;
    case 'DECREMENT':
      return state - 1;
    case 'RANDOM_INC':
      return state + action.value;
    case 'RANDOM_DEC':
      return state - action.value;
    default:
      return state;
  }
};

const inc = () => ({ type: 'INCREMENT' });
const dec = () => ({ type: 'DECREMENT' });
const rnd_inc = (value) => ({ type: 'RANDOM_INC', value });
const rnd_dec = (value) => ({ type: 'RANDOM_DEC', value });

const store = createStore(reducer);

document.getElementById('increment').addEventListener('click', () => {
  store.dispatch(inc());
});

document.getElementById('decrement').addEventListener('click', () => {
  store.dispatch(dec());
});

document.getElementById('random_inc').addEventListener('click', () => {
  const value = Math.floor(Math.random() * 10);
  store.dispatch(rnd_inc(value));
});

document.getElementById('random_dec').addEventListener('click', () => {
  const value = Math.floor(Math.random() * 10);
  store.dispatch(rnd_dec(value));
});

const update = () => {
  document.getElementById('counter').textContent = store.getState();
};

store.subscribe(update);