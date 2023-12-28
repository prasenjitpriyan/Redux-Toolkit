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

![Screenshot 2023-12-28 at 6 45 47 PM](https://github.com/prasenjitpriyan/Redux-Toolkit/assets/132381731/e418ac5f-895c-4f67-8b52-d23580f38edb)

![Screenshot 2023-12-28 at 6 52 59 PM](https://github.com/prasenjitpriyan/Redux-Toolkit/assets/132381731/86af1a92-4210-4f49-a2b9-123cd6d27efd)

## Store Methods

![Screenshot 2023-12-28 at 6 57 11 PM](https://github.com/prasenjitpriyan/Redux-Toolkit/assets/132381731/6941bc7c-bd45-4b78-8f7e-21b8caff06c9)

## Action (Object) Vs Action Creator (Function)

- Action is simply a JavaScript object that contains information about an event that has occurred in your app.
- Action creators are functions that create and return actions.

## Action Properties

- It is plain Javascript Object
- It has a type field as a property which is required.
- It is an event that occurs in your application.
- It can accept additional properties(payload). This is optional.
- A function that returns an action is called an action creator.

## Reducer

A reducer is a function that receives the current state or initial state and an action object, decides how to update the state base on the action, and returns the new state.

## Rules of Reducers

- The new state value should only be calculated based on the state and action arguments.
- Reducers are not allowed to modify the existing state.

## Rules of Store

When it receives an action that cause a change to the state, the store will notify all the registered listeners that a change to the state has been made. This will alow various parts of the system, like the UI, to update themselves according to the new state.

- It stores the application data
- It doesn't contain business logic
- It receives actions and pass to all the registered middleware.
- The only way to change the state inside it is to dispatch an action.

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
