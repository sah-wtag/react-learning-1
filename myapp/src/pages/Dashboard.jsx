import { Link, Outlet } from "react-router-dom";
export default function Dashboard() {
  return (
    <div>
      <h1>This is a Dashboard page</h1>

      <li>
        <Link to="settings">Settings</Link>
      </li>

      <li>
        <Link to="profile">Profile</Link>
      </li>
      <Outlet />
    </div>
  );
}
