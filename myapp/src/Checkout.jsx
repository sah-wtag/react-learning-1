import { useContext } from "react";
import { userContext } from "./App";

export default function Checkout() {
  const { user } = useContext(userContext);
  return (
    <div>
      <h1>Checkout as {user}</h1>
    </div>
  );
}
