const { createStore, combineReducers } = require('redux')

// Initial state
const initialState = {
  posts: []
}
//users
const usersInitialState = {
  users: []
}

// Action (Action, Action Creator)
// Action types
const ADD_POST = 'ADD_POST';
const REMOVE_POST = 'REMOVE_POST';
const ADD_USER = 'ADD_USER';

// Add post Creator
const addPostAction = post => {
  return {
    type: ADD_POST,
    payload: post
  }
}
// Remove post Creator
const removePostAction = id => {
  return {
    type: REMOVE_POST,
    id,
  }
}
// Add user Creator
const addUserAction = user => {
  return {
    type: ADD_USER,
    payload: user
  }
}

// Post Reducer
const postReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_POST:
      return {
        posts: [...state.posts, action.payload]
      };
    case REMOVE_POST:
      return {
        posts: state.posts.filter((post) => {
          return post.id !== action.id
        })
      }
    default:
      return state;
  }

  // if (action.type === ADD_POST) {
  //   return {
  //     posts: [...state.posts, action.payload]
  //   }
  // } else if (action.type === REMOVE_POST) {
  //   return {
  //     posts: state.posts.filter((post) => {
  //       return post.id !== action.id
  //     })
  //   }
  // } else {
  //   return state;
  // }
}
// Users Reducer
const userReducer = (state = usersInitialState, action) => {
  switch (action.type) {
    case ADD_USER:
      return {
        users: [...state.users, action.payload]
      };
    default:
      return state;
  }
}

//Root reducer
const rootReducer = combineReducers({
  posts: postReducer,
  users: userReducer,
})

// Store
const store = createStore(rootReducer);

// Subscribe
store.subscribe(() => {
  const data = store.getState();
  console.log('posts', data.posts);
  console.log('users', data.users);
})
// Dispatch
// Add post action
store.dispatch(addPostAction({
  id: 1,
  title: 'best course'
}))
store.dispatch(addPostAction({
  id: 2,
  title: 'best courses'
}))

// Remove post action
store.dispatch(removePostAction(1))

// Add new user
store.dispatch(addUserAction({
  name: 'Prasenjit',
  email: 'pasenjitpriyan@gmail.com'
}))

