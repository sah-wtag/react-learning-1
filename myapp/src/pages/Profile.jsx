import { useLocation } from "react-router-dom";

export default function Profile() {
  const location = useLocation();
  const { username } = location.state || {};

  return (
    <div>
      <h1>This is profile page for {username}</h1>
    </div>
  );
}
