import { createContext, useState } from "react";
import Browser from "./Browser";
import Checkout from "./Checkout";
import Login from "./Login";
export const userContext = createContext();

function App() {
  const [user, setUser] = useState("This is a context");
  return (
    <div>
      {/* <Browser /> */}

      <userContext.Provider value={{ user, setUser }}>
        <Login />
        <Checkout />
      </userContext.Provider>
    </div>
  );
}

export default App;
