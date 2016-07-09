const INCREMENT = 'counter/INCREMENT';
const DECREMENT = 'counter/DECREMENT';

const initialState = {
  count: 0
};

export default function reducer(state = initialState, action = {}) {
  switch (action.type) {
    case INCREMENT:
      return Object.assign({}, state, {
        count: state.count + 1
      });
    case DECREMENT:
      return Object.assign({}, state, {
        count: state.count - 1
      });
    default:
      return state;
  }
}

export function increment() {
  return {
    type: INCREMENT
  };
}

export function decrement() {
  return {
    type: DECREMENT
  };
}
