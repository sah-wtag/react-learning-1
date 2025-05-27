import { useReducer, useState } from "react";

function App() {
  const [count, setCount] = useState(0);
  const [state, dispatch] = useReducer(reducer, 0);
  function reducer(state, action) {
    if (action.type == "increment") {
      return state + action.payload;
    }
    if (action.type == "decrement") {
      return state - action.payload;
    }
  }
  return (
    <div>
      <div>
        <h1>Count is: {count}</h1>
        <button onClick={(e) => setCount(count + 1)}>Increment</button>
        <button onClick={(e) => setCount(count - 1)}>Decrement</button>
      </div>

      <div>
        <h1>Use reducer count: {state}</h1>
        <button onClick={(e) => dispatch({ type: "increment", payload: 1 })}>
          Increment state
        </button>
        <button onClick={(e) => dispatch({ type: "decrement", payload: 1 })}>
          Decrement state
        </button>
      </div>
    </div>
  );
}

export default App;
