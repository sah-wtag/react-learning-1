import Browser from "./Browser";
import Checkout from "./Checkout";
import { UserProvider } from "./context/UserContext";
import Login from "./Login";
import Logout from "./logout";

function App() {
  return (
    <div>
      {/* <Browser /> */}
      <UserProvider>
        <Login />
        <Checkout />
        <Logout />
      </UserProvider>
    </div>
  );
}

export default App;
