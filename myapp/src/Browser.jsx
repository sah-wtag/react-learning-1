import { BrowserRouter, Routes, Route } from "react-router-dom";
import Banking from "./pages/Banking";
import Homepage from "./pages/Homepage";
import Dashboard from "./pages/Dashboard";
import PageNotFound from "./pages/PageNotFound";
import Nav from "./Nav";
import Profile from "./pages/Profile";
import Settings from "./pages/Settings";
import Products from "./pages/Products";

export default function Browser() {
  return (
    <BrowserRouter>
      <Nav />
      <Routes>
        <Route path="/homepage" element={<Homepage />} />
        <Route path="/dashboard" element={<Dashboard />}>
          <Route path="profile" element={<Profile />}></Route>
          <Route path="settings" element={<Settings />}></Route>
        </Route>
        <Route path="/banking" element={<Banking />} />
        <Route path="/products/:id" element={<Products />}></Route>
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </BrowserRouter>
  );
}
