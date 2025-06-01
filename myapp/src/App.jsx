import Browser from "./Browser";
import Checkout from "./Checkout";
import { UserProvider } from "./context/UserContext";
import Login from "./Login";

function App() {
  return (
    <div>
      {/* <Browser /> */}
      <UserProvider>
        <Login />
        <Checkout />
      </UserProvider>
    </div>
  );
}

export default App;
