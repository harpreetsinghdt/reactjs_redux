import { createStore } from "redux";

const counterReducer = (state = { counter: 0 }, action) => {
  if (action.type === "increment") {
    return {
      counter: state.counter + 1,
    };
  }

  if (action.type === "decrement") {
    return {
      counter: state.counter - 1,
    };
  }

  return state;
};

const store = createStore(counterReducer);

export default store;

// const counterSubscriber = () => {
//   const currentState = store.getState();
//   console.log(currentState);
// };

// store.subscibe(counterSubscriber);

// store.dispatch((type = "increment"));
// store.dispatch((type = "decrement"));
