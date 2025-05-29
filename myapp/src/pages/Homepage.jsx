import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

export default function Homepage() {
  const navigate = useNavigate();
  const [username, setUserName] = useState("");
  function handleClick() {
    navigate("/dashboard/profile", { state: { username } });
  }
  return (
    <div>
      <h1>This is a Homepage</h1>
      <input
        type="text"
        value={username}
        onChange={(e) => setUserName(e.target.value)}
      />
      <button onClick={handleClick}>Go to profile</button>
    </div>
  );
}
