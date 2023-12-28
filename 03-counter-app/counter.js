const { createStore } = require('redux')

// Steps

// Initial state
const initialState = {
  count: 0,
}
// Actions - action - action creator

// Action
{
  type: 'INCREMENT';
}
{
  type: 'DECREMENT';
}
{
  type: 'RESET';
}
{
  type: 'INCREASE_BY_AMT'
}
// Action creator
const incrementAction = () => {
  return {
    type: 'INCREMENT'
  };
};
const decrementAction = () => {
  return {
    type: 'DECREMENT'
  };
};
const resetAction = () => {
  return {
    type: 'RESET'
  };
};
const increaseByAmtAction = (anyAmount) => {
  return {
    type: 'INCREASE_BY_AMT',
    payload: anyAmount
  };
};

// Reducer
const counterReducer = (state = initialState, action) => {
  console.log(action);
  console.log(state);
  if (action.type === 'INCREMENT') {
    return {
      count: state.count + 1
    }
  } else if (action.type === 'DECREMENT') {
    return {
      count: state.count - 1
    }
  } else if (action.type === 'RESET') {
    return {
      count: 0
    }
  } else if (action.type === 'INCREASE_BY_AMT') {
    return {
      count: state.count + action.payload
    }
  }
}

// Store
const store = createStore(counterReducer);

// Subscribe to store 
store.subscribe(() => {
  const data = store.getState()
  console.log(data);
})

// Dispatch action

//Increment
store.dispatch(incrementAction());
store.dispatch(incrementAction());
store.dispatch(incrementAction());
store.dispatch(incrementAction());

//Decrement
store.dispatch(decrementAction());

//Reset
store.dispatch(resetAction())

//Dispatch action with payload
store.dispatch(increaseByAmtAction(100))

//Decrement
store.dispatch(decrementAction());