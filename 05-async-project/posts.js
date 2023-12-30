const { createStore } = require('redux');

// Initial State
const initialState = {
  posts: []
}
// Actions
const fetchPostRequest = () => {
  return {
    type: 'REQUEST_STARTED',
  }
}
const fetchPostSuccess = () => {
  return {
    type: 'FETCH_SUCCESS',
  }
}
const fetchPostFailed = () => {
  return {
    type: 'FETCH_FAILED',
  }
}
// Reducers
const postsReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'REQUEST_STARTED':
      return {
        posts: ["HTML"]
      }
  }
}
// Store
const store = createStore(postsReducer, applyMiddleware(loggerMiddleware, customLogger))
// Subscribe
store.subscribe(() => {
  const data = store.getState()
  console.log(data);
})
// Dispatch
store.dispatch(fetchPostRequest())