// 4. Managing State with Redux
// Problem You need to manage application state using Redux and TypeScript.

// actions.ts
// export interface IncrementAction {
//     type: "INCREMENT";
//   }
  
//   export interface DecrementAction {
//     type: "DECREMENT";
//   }
  
//   export type CounterAction = IncrementAction | DecrementAction;
  
//   export const increment = (): IncrementAction => ({ type: "INCREMENT" });
//   export const decrement = (): DecrementAction => ({ type: "DECREMENT" });
  
//   // reducer.ts
//   interface CounterState {
//     count: number;
//   }
  
//   const initialState: CounterState = { count: 0 };
  
//   const counterReducer = (state: CounterState = initialState, action: CounterAction): CounterState => {
//     switch (action.type) {
//       case "INCREMENT":
//         return { count: state.count + 1 };
//       case "DECREMENT":
//         return { count: state.count - 1 };
//       default:
//         return state;
//     }
//   };
  
//   export default counterReducer;
  
//   // store.ts
//   import { createStore } from "redux";
//   import counterReducer from "./reducer";
  
//   const store = createStore(counterReducer);
  
//   export default store;
  
//   // App.tsx
//   import React from "react";
//   import { useDispatch, useSelector } from "react-redux";
//   import { increment, decrement } from "./actions";
  
//   const App: React.FC = () => {
//     const dispatch = useDispatch();
//     const count = useSelector((state: { count: number }) => state.count);
  
//     return (
//       <div>
//         <p>Count: {count}</p>
//         <button onClick={() => dispatch(increment())}>Increment</button>
//         <button onClick={() => dispatch(decrement())}>Decrement</button>
//       </div>
//     );
//   };
  
//   export default App;
  