# Old Redux vs Redux Toolkit

## Old Redux

```bash
https://redux.js.org
```

- You have to configure Redux DevTool Extension explicitly.
- We need to manually handle and change the state immutably.
- Configuring a Redux store is too complicated.
- Need to create reducers and creators separately - lots of boilerplate code.
- Lots of code need to write to handle asynchronous requests and handling error code was also manual.
- Class Based Implementation

## Redux Toolkit

```bash
https://redux-toolkit.js.org
```

- It provides automatic support of Redux DevTools Extension.
- It provides the support for Immer.js library which automatically changes the code immutably.
- Configuring a Redux store is much easier and built in support of middleware.
- A createSlice() function that comes in handy to replace create action and create Reducer functions with a single function.
- createAsyncThunk to make asynchronous requests.
- Functional Implementation with TypeScript and supports of Hooks.

```bash
npm install @reduxjs/toolkit
npm install react-redux
```

## React-Redux Hook Explanation

- React Redux offers a set of Hooks as an alternative to the existing connect() higher order component.
- These Hooks allow you to connect to the Redux store dispatch actions without having to wrap your components in connect()

## useSelector

- useSelector is equivalent to mapStateToProps()
- It takes in a function argument that returns the part of the state that you want.

## useDispatch

- useDispatch is equivalent to mapDispatchToProps()
- This hooks returns a reference to the dispatch function from the redux store. You may use it to dispatch actions as needed.


![Untitled-2023-12-25-1531](https://github.com/prasenjitpriyan/Redux-Toolkit/assets/132381731/fa19a0b6-7a5f-4e7f-b0e7-4a6b8f0ee5d7)

