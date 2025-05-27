import { useReducer } from "react";

function App() {
  const [state, dispatch] = useReducer(reducer, { count: 0 });
  function reducer(state, action) {
    if (action.type == "increment") {
      return { ...state, count: state.count + action.payload };
    }
    if (action.type == "decrement") {
      return { ...state, count: state.count - action.payload };
    }
  }
  return (
    <div>
      <div>
        <h1>Use reducer count: {state.count}</h1>
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
