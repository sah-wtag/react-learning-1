import { useReducer, useState } from "react";

function App() {
  const [state, dispatch] = useReducer(reducer, { balance: 0 });
  const [amount, setAmount] = useState(0);
  function reducer(state, action) {
    if (action.type == "add") {
      return { ...state, balance: state.balance + action.payload };
    }

    if (action.type == "sub") {
      return { ...state, balance: state.balance - action.payload };
    }
  }
  return (
    <div>
      <div>
        <h1>Current Balance {state.balance}</h1>
      </div>
      <input
        type="text"
        onChange={(e) => setAmount(e.target.value)}
        value={amount}
        name=""
        id=""
      />
      <button
        onClick={() => dispatch({ type: "add", payload: Number(amount) })}
      >
        Deposit
      </button>

      <button
        onClick={() => dispatch({ type: "sub", payload: Number(amount) })}
      >
        Withdraw
      </button>
    </div>
  );
}

export default App;
