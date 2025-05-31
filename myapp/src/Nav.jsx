import { Link } from "react-router-dom";

export default function Nav() {
  return (
    <div>
      <h1>
        <Link to="/dashboard">Dashboard</Link>
      </h1>
      <h1>
        <Link to="/homepage">Homepage</Link>
      </h1>
    </div>
  );
}
