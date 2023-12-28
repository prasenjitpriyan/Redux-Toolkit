# State, Old Redux vs Redux Toolkit

## State

- Any data in your application that can change based on conditions.
- It's a data store that is used to manage the component data.

## State Management

It is the ability to control the information that is passed between React components. State management is the process of determining how to manage state information in a web application.

## State management can be used to track --

- User data
- Session data
- Application data
- Component data

## Ways of Managing State in react

- UseState()
- useContext()
- Redux
- Redux Toolkit
- Redux Query

## Old Redux

Redux is an open-source JavaScript library for managing and centralizing application state and a Predictable State Container for JS Application.

```bash
https://redux.js.org
```

- You have to configure Redux DevTool Extension explicitly.
- We need to manually handle and change the state immutably.
- Configuring a Redux store is too complicated.
- Need to create reducers and creators separately - lots of boilerplate code.
- Lots of code need to write to handle asynchronous requests and handling error code was also manual.
- Class Based Implementation

## When to Use Redux?

- You should use Redux when you have a complex state object that is difficult to manage with the local store alone.
- The app state is updated frequently.
- The logic to update that state may be complex
- The app has a medium or large-sized codebase, and might be worked on by many people.

## Redux Benefits

- Predictable
- Centralized state management
- Debuggable

## Redux Terminologies

### Actions

Actions are the driving force of every dynamic application, as they are the medium by which all changes are communicated with a Redux application.

### Reducers

Reducers are event listeners which handle events based on the action type.

### Store

It stores the application data

## How Redux Works



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
