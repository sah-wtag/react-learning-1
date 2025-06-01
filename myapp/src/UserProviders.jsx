import Checkout from "./Checkout";
import { UserProvider } from "./context/UserContext";
import Login from "./Login";
import Logout from "./logout";

export default function UserProviders() {
  return (
    <div>
      <UserProvider>
        <Login />
        <Checkout />
        <Logout />
      </UserProvider>
    </div>
  );
}
