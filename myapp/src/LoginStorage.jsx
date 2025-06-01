import { useState } from "react";
import useLocalStorage from "./hooks/useLocalStorage";

export default function LoginStorage() {
  const [user, setUser] = useLocalStorage();
  const [value, setValue] = useState("");

  function handleClick() {
    setUser(value);
  }
  return (
    <div>
      <input
        type="text"
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
      <button onClick={handleClick}>Login</button>
    </div>
  );
}
